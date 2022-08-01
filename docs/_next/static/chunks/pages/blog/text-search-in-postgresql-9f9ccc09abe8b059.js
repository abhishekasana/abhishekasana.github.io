(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{5215:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/text-search-in-postgresql",function(){return r(7449)}])},6741:function(e,t,r){"use strict";var n=r(5893),s=(r(7294),r(63)),i=r(5697),a=r.n(i);function o(){var e,t,r=(e=["\n  font-size: 70px;\n  font-weight: 400;\n  letter-spacing: -1px;\n  line-height: 1.1;\n  margin-bottom: 3%;\n\n  @media (max-width: 1024px) {\n    font-size: 54px;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 42px;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return r},r}var c=s.ZP.h1(o());function l(e){var t=e.title;return(0,n.jsx)(c,{children:t})}l.propTypes={title:a().string.isRequired},l.defaultProps={},t.Z=l},9832:function(e,t,r){"use strict";r.d(t,{XF:function(){return c},U7:function(){return l},Z0:function(){return h}});var n=r(63);function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(){var e=s(["\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    color: #f5f8fa;\n    text-shadow: none;\n    font-size: 1.125rem;\n    line-height: 1.5;\n    margin-bottom: 5em;\n\n    @media(max-width: 767px) {\n      font-size: 1.0625rem;\n    }\n\n"]);return i=function(){return e},e}function a(){var e=s(["\n    font-size: 32px;\n    margin: .4em 0;\n    font-weight: 500;\n\n    @media (max-width: 1024px) {\n      font-size: 26px;\n    }\n"]);return a=function(){return e},e}function o(){var e=s(["\n    margin: "," 0;\n    border: none;\n    background: ",";\n    height: ",";\n"]);return o=function(){return e},e}var c=n.ZP.div(i()),l=n.ZP.h2(a()),h=n.ZP.hr(o(),(function(e){return e.gap?e.gap:"16px"}),(function(e){return e.bg?e.bg:"#f5f8fa"}),(function(e){return e.height?e.height:"2px"}))},7449:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=(r(7294),r(63)),i=r(5225),a=r(5711),o=r(6385),c=r(9832),l=r(6741),h=r(8790),d=r(9825);function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(){var e=u(["\n  white-space: pre-wrap;\n"]);return x=function(){return e},e}function m(){var e=u(["\n  font: normal 16px monospace;\n  background-color: ",";\n  border: 1px solid ",";\n  padding: 12px;\n  margin: 16px 0;\n  border-radius: 2px;\n"]);return m=function(){return e},e}function f(){var e=u(["\n  background-color: ",";\n  padding: 2px 4px;\n  border-radius: 3px;\n"]);return f=function(){return e},e}function g(){var e=u(["\n  text-decoration-line: underline;\n  text-decoration-color: ",";\n  color: ",";\n"]);return g=function(){return e},e}var p=(0,s.ZP)(c.XF)(x()),b=s.ZP.div(m(),h.Z.LIGHT_PURPLE,h.Z.LIGHT_WHITE),j=s.ZP.code(f(),h.Z.LIGHT_PURPLE),w=s.ZP.a(g(),h.Z.L_TINT_PURPLE,h.Z.L_TINT_PURPLE),E=(0,n.jsxs)(n.Fragment,{children:["Firstly, lets create a users tables to run our benchmarking.",(0,n.jsxs)(b,{children:["-- CREATE TABLE","\n","CREATE TABLE users ( id UUID PRIMARY KEY, username varchar);"]})]}),y="https://www.postgresql.org/docs/12/textsearch-indexes.html",v="https://www.postgresql.org/docs/current/functions-matching.html",T="https://en.wikipedia.org/wiki/Levenshtein_distance",I="http://www.sai.msu.su/~megera/wiki/Gin";t.default=function(){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(a.PU,{children:(0,n.jsxs)(p,{children:[(0,n.jsx)(l.Z,{title:"Text Search in PostgreSQL"}),"In this article, I'm documenting some of my findings when weighing different ways to implement text search in Postgres. We will also compare how these DB methods hold against external search systems like elasticsearch/Solr.",(0,n.jsx)(c.Z0,{}),(0,n.jsx)(c.U7,{children:"Available Options"}),"Postgres offers several tools for pattern matching and searching text. There's:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(j,{children:"LIKE"}),", ",(0,n.jsx)(j,{children:"SIMILAR TO"}),", Regex"]}),(0,n.jsx)("li",{children:"Trigram index"}),(0,n.jsx)("li",{children:"Full Text Search"})]}),"Each of these searching options can be implemented with multiple choices of index. Postgres provides several index types: B-tree, Hash, GiST, GIN & BRIN. Each index type uses a different algorithm that is best suited to different types of queries.",(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{header:(0,n.jsx)(c.U7,{children:"Database setup"}),body:E,collapsed:!0,style:{global:{margin:"1em 0 0 0 !important",collapsedAccordion:"+",expandedAccordion:"-",accordionPosition:"right"}}}),(0,n.jsx)(c.U7,{children:"LIKE & Regex for pattern search"}),"To implement a search we can think of a simple\xa0",(0,n.jsx)(w,{href:v,children:"pattern search"}),"\xa0where we are filtering the rows based on a exact pattern i.e ",(0,n.jsx)(j,{children:"LIKE pattern"})," or ",(0,n.jsx)(j,{children:"~ pattern"}),(0,n.jsx)("br",{}),(0,n.jsxs)(b,{children:["-- LIKE",(0,n.jsx)("br",{}),'-- "%" means wildcard character denoting any string',(0,n.jsx)("br",{}),"-- search users with username's starting with alice i.e pattern = 'alice%'",(0,n.jsx)("br",{}),"SELECT * FROM users WHERE username LIKE 'alice%';",(0,n.jsx)("br",{}),"-- search users with username's containing alice i.e pattern = '%alice%'",(0,n.jsx)("br",{}),"SELECT * FROM users WHERE username LIKE '%alice%';",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"-- Regex (~) & SIMILAR TO",(0,n.jsx)("br",{}),'-- ".*" denotes any string',(0,n.jsx)("br",{}),"-- SIMILAR TO expressions are rewritten into regular expressions internally",(0,n.jsx)("br",{}),"-- search users with username's starting with alice i.e pattern = '^alice.*'",(0,n.jsx)("br",{}),"SELECT * FROM users WHERE username ~ '^alice.*';"]}),"Searching on a million rows will require you to build an index on the searched column (or multi-columns).",(0,n.jsxs)(b,{children:["EXPLAIN (COSTS OFF) SELECT * FROM users WHERE username LIKE 'alice%';",(0,n.jsx)("br",{}),"-- Seq Scan on users"]}),"The default index in Postgres is the B-tree which fits in most situations.",(0,n.jsx)("br",{}),(0,n.jsx)(o.Dr,{color:h.Z.PINK,children:"B-tree index"})," only provide index scan on access predicates (= operator) and range queries. We need to create the index with a special operator class to support indexing of pattern-matching that too only left-anchored i.e 'pattern%' or 'patt%ern'. This prefix pattern search makes sense once you understand how a B-tree (B+tree) index works.",(0,n.jsxs)(b,{children:["CREATE INDEX col_search ON table (col text_pattern_ops);",(0,n.jsx)("br",{}),"EXPLAIN (COSTS OFF) SELECT * FROM users WHERE username LIKE 'alice%';",(0,n.jsx)("br",{}),"-- Index Scan using col_search_idx on users"]}),(0,n.jsx)(c.U7,{children:"Trigram index"}),"Another way of implementing a search instead of a direct pattern match can be a ",(0,n.jsx)("strong",{children:"fuzzy search"}),' where the searches for a text that matches a term closely instead of a exact match like username matching "Ailce" search should also return the username "Alice" too.',(0,n.jsx)("br",{}),"To build this fuzzy search lets see the concept of Trigram. A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages. This similarity function allows for narrowing our filter similar to what\xa0",(0,n.jsx)(w,{href:T,children:"levenshtein"}),"\xa0algorithm does.",(0,n.jsx)("br",{}),"By using the operator classes provided by the module ",(0,n.jsx)(j,{children:"pg_trgm"})," provides index support for any ",(0,n.jsx)(j,{children:"LIKE/ ILIKE"}),' pattern using a GIN or GiST index, also supporting the word_similarity operators. Effectiveness of trigram index varies with the exact data set. For example, the trigram for "alice" would be:',(0,n.jsxs)(b,{children:["-- install module CREATE EXTENSION pg_trgm;",(0,n.jsx)("br",{}),"select show_trgm('alice');",(0,n.jsx)("br",{}),"-- output - ",'{"  a"," al",ali,"ce ",ice,lic}']}),"We can create index on these trigram's using a GIN or a GiST index operator classes provided by the",(0,n.jsx)(j,{children:"pg_trgm"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(o.Dr,{color:h.Z.PINK,children:"GIN index"})," (",(0,n.jsx)(w,{href:I,children:"generalised inverted index"}),") an inverted index maps entities to its position in a table. An inverted index is an index structure storing a set of (key, posting list) pairs, where 'posting list' is a set of documents in which the key occurs. GIN works well on composite data types (consisting of multiple elements e.g array, json, etc.)",(0,n.jsx)("br",{}),"Note: GIN only supports bitmap queries, as index tree only maintains the heap pointers.",(0,n.jsx)("br",{}),(0,n.jsx)(o.Dr,{color:h.Z.PINK,children:"GiST index"})," (generalized search tree) a balanced search tree more optimized towards handling geodata, text documents, images, etc. In case of text a trie like structure is built which spread across multiple page index.",(0,n.jsx)("br",{}),"Note: GiST and GIN both index types can be used to speed up text searches. But, creating and maintaining these index carries a cost & there are substantial performance differences between the two of them. You can read further\xa0",(0,n.jsx)(w,{href:y,children:"here"}),"\xa0to make a decision which index operator class fits your use case.",(0,n.jsx)("br",{}),"As a rule of thumb, a GIN index is faster to search than a GiST index, but slower to build or update. So, GIN is better suited for static data and GiST for often-updated data. I will be using GIN operator class index for our trigram exploration.",(0,n.jsxs)(b,{children:["CREATE INDEX col_gin_trgm_idx ON table USING gin (col gin_trgm_ops);",(0,n.jsx)("br",{}),"SELECT col, similarity(col, 'word') AS sml FROM table WHERE col % 'word' ORDER BY sml DESC, col;",(0,n.jsx)("br",{}),"SELECT * FROM table WHERE col LIKE '%foo%bar';",(0,n.jsx)("br",{}),"-- The index search works by extracting trigrams from the search string and then looking these up in the index. The more trigrams in the search string, the more effective the index search is.",(0,n.jsx)("br",{}),"-- Unlike B-tree based searches, the search string need not be left-anchored."]}),(0,n.jsx)(c.U7,{children:"Full Text Search"}),"Postgres provides a advance full-text search out of box since PostgreSQL 8.3. It is based on TF-IDF concept. It involves multiple pre-index steps lemmatize, stemming, ignoring stop words, weight and rank search matches. This gives us the ability to index and search in large amounts of text data.",(0,n.jsx)("br",{}),"Imagine, we have a blog table having a million rows each containing documents that are not just meta-data but rather an abstract for an article, or full-text articles themselves, and you want to find out if certain words are present or not in them.",(0,n.jsx)("br",{}),'An effective way to approach this problem is by getting a semantic vector [vectorization] for all of the words contained in a document. So, when you search for a word like "jump", you will match all instances of the word and its tenses, even if you searched for "jumped" or "jumping". Additionally, you won\'t be searching the full document itself, but the vector [querying].',(0,n.jsx)("br",{}),"Postgres offers several native functions to implement this full-fledged text search, here are few to get started -",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(j,{children:"to_tsvector"})," [vectorization]- creates a list of tokens of tsvector (text search vector) data type. Every token is a lexeme (unit of lexical meaning) with pointers (the positions in the document), and here words that carry little meaning, such as articles (the) and conjunctions (and, or) are conveniently omitted."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(j,{children:"to_tsquery"})," [querying] - querying the vector occurrences of a particular word/prhase"]})]}),(0,n.jsxs)(b,{children:["-- VECTORIZATION",(0,n.jsx)("br",{}),"SELECT to_tsvector('The quick brown fox jumped over the lazy dog.');",(0,n.jsx)("br",{}),"-- 'brown':3 'dog':9 'fox':4 'jump':5 'lazi':8 'quick':2",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"-- QUERYING",(0,n.jsx)("br",{}),"SELECT to_tsvector('The quick brown fox jumped over the lazy dog') @@ to_tsquery('fox');"]}),(0,n.jsxs)(b,{children:["-- Try FTS without Index",(0,n.jsx)("br",{}),"SELECT * FROM table WHERE to_tsvector('english', body) @@ to_tsquery('english', 'hello');",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"-- Lets try building an Index",(0,n.jsx)("br",{}),"CREATE INDEX v_search_idx ON table USING GIN (to_tsvector('english', body));",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"-- left anchored",(0,n.jsx)("br",{}),"SELECT * FROM users WHERE ts_username @@ to_tsquery('simple', 'alice:*');",(0,n.jsx)("br",{}),"-- search",(0,n.jsx)("br",{}),"select * from users where ts_username @@ to_tsquery('simple','alice');"]}),"PostgresSQL full text search works best when the text vectors are stored in physical columns with an index. This means you\u2019d have to set up a stored procedure or database trigger to keep these text vector columns updated with newest value from the raw data.",(0,n.jsx)("br",{}),"Note: To implement multi-column text search using above options a new column maintaining these tokenized values including amalgam of these multi-column indexes will be required, with stored procedure or database trigger to keep them in sync.",(0,n.jsx)(c.U7,{children:"External Search Engine -"}),(0,n.jsx)(o.Dr,{color:h.Z.PINK,children:"Elasticsearch - "}),"A dedicated search system, maintaining a document with GIN index like manner while preserving the original document. ElasticSearch showcases searches & log analytics in near-real-time and a scalable manner. Elasticsearch (& other dedicated search systems) are far better-known for text search but here are few benefits of Postgres over a dedicated search system:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"avoid operating additional infrastructure (e.g., spinning up an Elasticsearch cluster)"}),(0,n.jsx)("li",{children:"avoid syncing data between systems (e.g., every CRUD operation needs to be relayed from Postgres to Elasticsearch)"})]}),"If search is your core offering, or you can\u2019t afford to fit your searchable text in Postgres shared memory buffer, use Elasticsearch. Otherwise, Postgres is probably good enough. At the very least, you\u2019ll end up with a competent baseline for further improvement."]})})})}}},function(e){e.O(0,[115,496,774,888,179],(function(){return t=5215,e(e.s=t);var t}));var t=e.O();_N_E=t}]);