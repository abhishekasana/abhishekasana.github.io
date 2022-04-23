import React from "react";

import styled from "styled-components";

import Layout from "components/Layout";
import {BaseContainer} from "components/wrappers";
import {Span} from "components/webcomps";
import {BlogSectionHeader, BlogWrapper, Separator} from "components/blog/wrapper";
import Title from "components/blog/header";
import COLORS from "constants/color";
import CollapsibleSection from "components/sections/collapsibleSection";

const BlogBaseWrapper = styled(BlogWrapper)`
  white-space: pre-wrap;
`;
const Snippet = styled.div`
  font: normal 16px monospace;
  background-color: ${COLORS.LIGHT_PURPLE};
  border: 1px solid ${COLORS.LIGHT_WHITE};
  padding: 12px;
  margin: 16px 0;
  border-radius: 2px;
`;
const Code = styled.code`
  background-color: ${COLORS.LIGHT_PURPLE};
  padding: 2px 4px;
  border-radius: 3px;
`;
const StyleLink = styled.a`
  text-decoration-line: underline;
  text-decoration-color: ${COLORS.L_TINT_PURPLE};
  color: ${COLORS.L_TINT_PURPLE};
`;

const setupSnippet = (
    <>
        Firstly, lets create a users tables to run our benchmarking.
        <Snippet>
            -- CREATE TABLE
            {'\n'}
            CREATE TABLE users ( id UUID PRIMARY KEY, username varchar);
        </Snippet>
    </>
);
const referenceLinks = {
    ginVsGist: 'https://www.postgresql.org/docs/12/textsearch-indexes.html',
    pgDocPatternMatch: 'https://www.postgresql.org/docs/current/functions-matching.html',
    elasticGithub: 'https://github.com/elastic/elasticsearch',
    levenshteinWiki: 'https://en.wikipedia.org/wiki/Levenshtein_distance',
    gin: 'http://www.sai.msu.su/~megera/wiki/Gin',
}

const ftsOnDistributedData = () => (
    <Layout>
        <BaseContainer>
            <BlogBaseWrapper>
                <Title title="Text Search in PostgreSQL"/>
                In this article, I'm documenting some of my findings when weighing different ways to implement
                text search in Postgres. We will also compare how these DB methods hold against external
                search systems like elasticsearch/Solr.
                <Separator />
                <BlogSectionHeader>
                    Available Options
                </BlogSectionHeader>
                Postgres offers several tools for pattern matching and searching text. There's:
                <ul>
                    <li>
                        <Code>LIKE</Code>, <Code>SIMILAR TO</Code>, Regex
                    </li>
                    <li>
                        Trigram index
                    </li>
                    <li>
                        Full Text Search
                    </li>
                </ul>
                Each of these searching options can be implemented with multiple choices of index. Postgres provides
                several index types: B-tree, Hash, GiST, GIN & BRIN. Each index type uses a different algorithm that
                is best suited to different types of queries.
                <br />
                <CollapsibleSection
                    header={<BlogSectionHeader>Database setup</BlogSectionHeader>}
                    body={setupSnippet}
                    collapsed
                    style={{
                        global: {
                            margin: "1em 0 0 0 !important",
                            collapsedAccordion: '+',
                            expandedAccordion: '-',
                            accordionPosition: 'right',
                        },
                    }}
                />
                <BlogSectionHeader>
                    LIKE & Regex for pattern search
                </BlogSectionHeader>
                To implement a search we can think of a simple&nbsp;
                <StyleLink href={referenceLinks.pgDocPatternMatch}>
                    pattern search
                </StyleLink>
                &nbsp;where we are filtering the rows based on a
                exact pattern i.e <Code>LIKE pattern</Code> or <Code>~ pattern</Code>
                <br/>
                <Snippet>
                    -- LIKE
                    <br/>
                    -- "%" means wildcard character denoting any string
                    <br/>
                    -- search users with username's starting with alice i.e pattern = 'alice%'
                    <br/>
                    SELECT * FROM users WHERE username LIKE 'alice%';
                    <br/>
                    -- search users with username's containing alice i.e pattern = '%alice%'
                    <br/>
                    SELECT * FROM users WHERE username LIKE '%alice%';
                    <br/>
                    <br/>
                    -- Regex (~) & SIMILAR TO
                    <br/>
                    -- ".*" denotes any string
                    <br/>
                    -- SIMILAR TO expressions are rewritten into regular expressions internally
                    <br/>
                    -- search users with username's starting with alice i.e pattern = '^alice.*'
                    <br/>
                    SELECT * FROM users WHERE username ~ '^alice.*';
                </Snippet>
                Searching on a million rows will require you to build an index on the searched column (or multi-columns).
                <Snippet>
                    EXPLAIN (COSTS OFF) SELECT * FROM users WHERE username LIKE 'alice%';
                    <br/>
                    -- Seq Scan on users
                </Snippet>
                The default index in Postgres is the B-tree which fits in most situations.
                <br/>
                <Span color={COLORS.PINK}>B-tree index</Span> only provide index scan on access predicates (= operator)
                and range queries. We need to create the index with a special operator class to support indexing of
                pattern-matching that too only left-anchored i.e 'pattern%' or 'patt%ern'. This prefix pattern search makes
                sense once you understand how a B-tree (B+tree) index works.
                <Snippet>
                    CREATE INDEX col_search ON table (col text_pattern_ops);
                    <br/>
                    EXPLAIN (COSTS OFF) SELECT * FROM users WHERE username LIKE 'alice%';
                    <br/>
                    -- Index Scan using col_search_idx on users
                </Snippet>
                <BlogSectionHeader>
                    Trigram index
                </BlogSectionHeader>
                Another way of implementing a search instead of a direct pattern match can be a <strong>fuzzy search</strong> where the
                searches for a text that matches a term closely instead of a exact match like username matching "Ailce"
                search should also return the username "Alice" too.
                <br/>
                To build this fuzzy search lets see the concept of Trigram. A trigram is a group of three consecutive
                characters taken from a string.
                We can measure the similarity of two strings by counting the number of trigrams they share.
                This simple idea turns out to be very effective for measuring the similarity of words in many
                natural languages. This similarity function allows for narrowing our filter similar to what&nbsp;
                <StyleLink href={referenceLinks.levenshteinWiki}>
                    levenshtein
                </StyleLink>
                &nbsp;algorithm does.
                <br/>
                By using the operator classes provided by the module <Code>pg_trgm</Code> provides index support for
                any <Code>LIKE/ ILIKE</Code> pattern using a GIN or GiST index, also supporting the word_similarity operators.
                Effectiveness of trigram index varies with the exact data set.
                For example, the trigram for "alice" would be:
                <Snippet>
                    -- install module
                    CREATE EXTENSION pg_trgm;
                    <br/>
                    select show_trgm('alice');
                    <br/>
                    -- output - {`{"  a"," al",ali,"ce ",ice,lic}`}
                </Snippet>
                We can create index on these trigram's using a GIN or a GiST index operator classes provided by the
                <Code>pg_trgm</Code>.
                <br/>
                <Span color={COLORS.PINK}>GIN index</Span> (
                <StyleLink href={referenceLinks.gin}>
                    generalised inverted index
                </StyleLink>
                ) an inverted index maps entities
                to its position in a table. An inverted index is an index structure storing a set of (key, posting list)
                pairs, where 'posting list' is a set of documents in which the key occurs. GIN works well on composite
                data types (consisting of multiple elements e.g array, json, etc.)
                <br/>
                Note: GIN only supports bitmap queries, as index tree only maintains the heap pointers.
                <br/>
                <Span color={COLORS.PINK}>GiST index</Span> (generalized search tree) a balanced search tree more
                optimized towards handling geodata, text documents, images, etc. In case of text a trie like
                structure is built which spread across multiple page index.
                <br/>
                Note: GiST and GIN both index types can be used to speed up text searches. But, creating and maintaining
                these index carries a cost & there are substantial performance
                differences between the two of them. You can read further&nbsp;
                <StyleLink href={referenceLinks.ginVsGist}>
                    here
                </StyleLink>
                &nbsp;to make a decision which index operator class fits your use case.
                <br/>
                As a rule of thumb, a GIN index is faster to search than a GiST index, but slower to build or update.
                So, GIN is better suited for static data and GiST for often-updated data. I will be using GIN operator
                class index for our trigram exploration.
                <Snippet>
                    CREATE INDEX col_gin_trgm_idx ON table USING gin (col gin_trgm_ops);
                    <br/>
                    SELECT col, similarity(col, 'word') AS sml FROM table WHERE col % 'word' ORDER BY sml DESC, col;
                    <br/>
                    SELECT * FROM table WHERE col LIKE '%foo%bar';
                    <br/>
                    -- The index search works by extracting trigrams from the search string and then looking these
                    up in the index. The more trigrams in the search string, the more effective the index search is.
                    <br/>
                    -- Unlike B-tree based searches, the search string need not be left-anchored.
                </Snippet>
                <BlogSectionHeader>
                    Full Text Search
                </BlogSectionHeader>
                Postgres provides a advance full-text search out of box since PostgreSQL 8.3. It is based on TF-IDF concept.
                It involves multiple pre-index steps lemmatize, stemming, ignoring stop words, weight and rank search matches. This gives us
                the ability to index and search in large amounts of text data.
                <br/>
                Imagine, we have a blog table having a million rows each containing documents that are not just
                meta-data but rather an abstract for an article, or full-text articles themselves, and you want to find
                out if certain words are present or not in them.
                <br/>
                An effective way to approach this problem is by getting a semantic vector [vectorization] for all of the words
                contained in a document. So, when you search for a word like "jump", you will match all instances of the
                word and its tenses, even if you searched for "jumped" or "jumping". Additionally, you won't be searching
                the full document itself, but the vector [querying].
                <br/>
                Postgres offers several native functions to implement this full-fledged text search,
                here are few to get started -
                <br/>
                <ul>
                    <li>
                        <Code>to_tsvector</Code> [vectorization]- creates a list of tokens of tsvector (text search vector) data type.
                        Every token is a lexeme (unit of lexical meaning) with pointers (the positions in the document),
                        and here words that carry little meaning, such as articles (the) and conjunctions (and, or)
                        are conveniently omitted.
                    </li>
                    <li>
                        <Code>to_tsquery</Code> [querying] - querying the vector occurrences of a particular word/prhase
                    </li>
                </ul>
                <Snippet>
                    -- VECTORIZATION
                    <br/>
                    SELECT to_tsvector('The quick brown fox jumped over the lazy dog.');
                    <br/>
                    -- 'brown':3 'dog':9 'fox':4 'jump':5 'lazi':8 'quick':2
                    <br/>
                    <br/>
                    -- QUERYING
                    <br/>
                    SELECT to_tsvector('The quick brown fox jumped over the lazy dog') @@ to_tsquery('fox');
                </Snippet>
                <Snippet>
                    -- Try FTS without Index
                    <br/>
                    SELECT * FROM table WHERE to_tsvector('english', body) @@ to_tsquery('english', 'hello');
                    <br/>
                    <br/>
                    -- Lets try building an Index
                    <br/>
                    CREATE INDEX v_search_idx ON table USING GIN (to_tsvector('english', body));
                    <br/>
                    <br/>
                    <br/>
                    -- left anchored
                    <br/>
                    SELECT * FROM users WHERE ts_username @@ to_tsquery('simple', 'alice:*');
                    <br/>
                    -- search
                    <br/>
                    select * from users where ts_username @@ to_tsquery('simple','alice');
                </Snippet>
                PostgresSQL full text search works best when the text vectors are stored in physical columns with an index.
                This means you’d have to set up a stored procedure or database trigger to keep these text vector columns
                updated with newest value from the raw data.
                <br/>
                Note: To implement multi-column text search using above options a new column maintaining
                these tokenized values including amalgam of these multi-column indexes will be required, with stored
                procedure or database trigger to keep them in sync.
                <BlogSectionHeader>
                    External Search Engine -
                </BlogSectionHeader>
                <Span color={COLORS.PINK}>Elasticsearch - </Span>A dedicated search system, maintaining a document with GIN index like manner while preserving the
                original document. ElasticSearch showcases searches & log analytics in near-real-time and a scalable
                manner. Elasticsearch (& other dedicated search systems) are far better-known for text search but here
                are few benefits of Postgres over a dedicated search system:
                <ul>
                    <li>avoid operating additional infrastructure (e.g., spinning up an Elasticsearch cluster)</li>
                    <li>avoid syncing data between systems (e.g., every CRUD operation needs to be relayed from Postgres
                        to Elasticsearch)</li>
                </ul>
                If search is your core offering, or you can’t afford to fit your searchable text in Postgres shared
                memory buffer, use Elasticsearch. Otherwise, Postgres is probably good enough. At the very least,
                you’ll end up with a competent baseline for further improvement.
            </BlogBaseWrapper>
        </BaseContainer>
    </Layout>
);

export default ftsOnDistributedData;