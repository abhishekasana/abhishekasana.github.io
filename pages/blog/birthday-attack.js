import React from "react";

import Head from "next/head";
import styled from 'styled-components';

import {BlogWrapper, BlogSectionHeader, Separator} from 'components/blog/wrapper';
import CollapsibleSection from 'components/sections/collapsibleSection';
import Title from 'components/blog/header';
import Layout from 'components/Layout';
import { BaseContainer } from "components/wrappers";
import { renderEquation } from "utils/methods";
import COLORS from "constants/color";

const Snippet = styled.div`
  font: normal 16px monospace;
  background-color: ${COLORS.LIGHT_PURPLE};
  border: 1px solid ${COLORS.LIGHT_WHITE};
  padding: 12px;
  margin: 16px 0;
  border-radius: 2px;
`;

const renderDisplayEquation = (eq, elt) => renderEquation(eq, elt, {displayMode: true});
const renderInlineEquation = (eq, elt) => renderEquation(eq, elt, {displayMode: false});
const comparisonSnippet = (
    <Snippet>
        n1-n2,n1-n3…,n1-n23 [22 comparison]
        <br/>
        + n2-n3,n2-n3,...,n2-n23 [21 comparison]
        <br/>
        + n3-n4,...,n3-n23 [20 comparison]
        <br/>
        + ...
        <br/>
        + n22-n23 [1 comparison]
        <hr/>
        = 253 comparison
    </Snippet>
);
const generalizedProbSnippet = (
    <Snippet>
        The probability of not sharing a birthday in a room of 23 people comes out to be,
        <div ref={node => renderDisplayEquation(
            "(365/365) * (364/365) * (363/365) * (362/365) …… * (342/365) \\sim 0.49", node
        )}/>
        Hence, the probability of sharing a birthday in a room of 23 people.
        <div ref={node => renderDisplayEquation("1 - 0.49 = 0.51", node)}/>
        <div ref={node => renderDisplayEquation("1 - \\frac{365!}{(365-n)! * (365^n)} = 0.51", node)}/>
        <div ref={node => renderDisplayEquation("\\approx 50\\%", node)}/>
        <hr/>
        <div ref={node => renderDisplayEquation("p_M(n) = 1 - \\frac{M!}{(M-n)!M^n}", node)}/>
    </Snippet>
);

const BirthdayAttackBlog = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
                      integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
                      crossOrigin="anonymous"/>
                <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js"
                        integrity="sha384-0fdwu/T/EQMsQlrHCCHoH10pkPLlKA1jL5dFyUOvB3lfeT2540/2g6YgSi2BL14p"
                        crossOrigin="anonymous" />
                <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/contrib/auto-render.min.js"
                        integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
                        crossOrigin="anonymous"
                        onLoad="renderMathInElement(document.body);" />
                <style>
                    {` .katex-display > .katex { text-align: left; overflow: auto hidden;} `}
                </style>
            </Head>
            <Layout>
                <BaseContainer>
                    <BlogWrapper>
                        <Title title="Birthday Attack"/>
                        <Separator />
                        A Birthday Attack is a brute force cryptographic attack which exploits the possibility of a hash collision.
                        This exploit cracks the mathematics behind the birthday paradox through which the chance of sharing one
                        birthday by
                        two people is quite higher than one may think.
                        <BlogSectionHeader>
                            The Birthday Paradox
                        </BlogSectionHeader>
                        Suppose if there are "n" number of people in a room, there is a probability that some of them might have
                        their birthdays on a similar day. Intuitively this probability might seem small. But, actually its about 50%
                        (r1)
                        chance that two people might share the same birthday in a room of 23 people (n=23) and this reaches 99.9%
                        (r2) if
                        the number of people in room are 75 (n=75).
                        <br/>
                        <br/>
                        One important point to consider here is that we don't care which two people share a birthday. To arrive at
                        this 50% (r1) probability of a birthday match in a room of 23 people we form 253 pairs/comparisons.
                        <br/>
                        <CollapsibleSection
                            header={<p>Comparisons Derivation</p>}
                            body={comparisonSnippet}
                            collapsed={true}
                            style={{
                                global: {
                                    margin: "1em 0 0 0 !important",
                                }
                            }}
                        />
                        Whereas, if we did consider which person share a birthday i.e we fix a person/birthday and search for a
                        person with similar birthday then we would need 253 people (n=253) to get same number of pairs/comparisons
                        and arrive at same 50% (r3) probability.
                        <BlogSectionHeader>
                            Maths behind The Birthday Paradox
                        </BlogSectionHeader>
                        According to the pigeonhole principle, if n items are put into m containers, with n>m, then at least one
                        container must contain more than one item.
                        <br/>
                        In relation to the birthday paradox, the pigeonhole principle can be used to intuitively see that as the
                        number of people grow larger (or approach 367), at least 2 people will have to be assigned to a certain
                        “box” (birthday) since there are only 366 possible birthdays, resulting in people having the same birthday.
                        <br/>
                        <br/>
                        Note: To simplify the calculation we will not consider leap year and assume every birthday has an equal
                        occurrence chance.
                        <br/>
                        <br/>
                        Instead of calculating the chance of two people sharing a birthday in a room we calculate the opposite i.e
                        chances of two people not sharing a birthday. By this approach, the first person can have any birthday so
                        365/365 chance, for second person not to share a birthday its 364/365 (excluding the birthday of the first
                        person), for third is 363/365 … so on.
                        <CollapsibleSection
                            header={<p>Equation Derivation</p>}
                            body={generalizedProbSnippet}
                            collapsed={true}
                            style={{
                                global: {
                                    margin: "1em 0 0 0 !important",
                                }
                            }}
                        />
                        It turns out that &nbsp;<span ref={node => renderInlineEquation("p_M(n) = 0.5", node)}/>&nbsp;
                        when n is on the order of &nbsp;<span ref={node => renderInlineEquation("\\sqrt M", node)}/>&nbsp;.
                        <br/>
                        Suppose, we have a hash algo which gives a output of 64-bit. Total hashes possible would be &nbsp;
                        <span ref={node => renderInlineEquation("2^{64}", node)}/>&nbsp;
                        i.e <span ref={node => renderInlineEquation("M = 2^{64}", node)}/>.
                        This means, we have a 50% chance of collision after only
                        <span ref={node => renderInlineEquation("2^{32}", node)}/> tries.
                        <br/>
                        For a 128 bit digest, this requires <span ref={node => renderInlineEquation("2^{64}", node)}/>&nbsp;
                        (<span ref={node => renderInlineEquation("\\sim 10^9", node)}/>)&nbsp; tries. (That is computationally infeasible)
                        <BlogSectionHeader>
                            Birthday Paradox exploitation in hashing
                        </BlogSectionHeader>
                        Hash function is a versatile one-way* cryptographic algorithm that maps an input (message) of any size to a
                        unique output of a fixed length of bits (message digest).
                        <Snippet>
                            <code>
                                def hash_it(input: int):
                                <br/>
                                &nbsp;&nbsp;return input % 1024
                                <br/>
                            </code>
                        </Snippet>
                        Our simple hashing approach would take the modular of the integer passed and return a output of a fixed
                        range (0–1023). Our hash function does not map our passed params to unique indexes. This anomaly
                        of a hash function is known as a hash collision.
                        <br/>
                        According to the Pigeonhole Principle, it is impossible to avoid hash collisions, unless the size of the
                        output is at least as large as the input (which defeat's the purpose of a hash function).
                        <br/>
                        <BlogSectionHeader>
                            Exploitation in action
                        </BlogSectionHeader>
                        Suppose "A" wants to share a document with "B".&nbsp;&nbsp;"A" signs the document by n-bit hash code.
                        <br/>
                        Now,&nbsp;&nbsp;evil "C" can generate <span ref={node => renderInlineEquation("2^{n}", node)}/>
                        versions of the document (appending space, blank line, etc to output different hash but still
                        maintaining the document visually alike to the original), generate&nbsp;
                        <span ref={node => renderInlineEquation("2^{n}", node)}/> versions of the evil
                        document, and see which pair hashes to the same value.
                        <br/>
                        The probability that there is a benign document and an evil document
                        with the same hash is greater > 0.5 i.e&nbsp;<span ref={node => renderInlineEquation("O(\\sqrt N)", node)}/>.
                        If no match found, additional valid and fraudulent document are generated until a match is made.
                        <br/>
                        "C" then presents the benign document for "B" to agree to, and now he has the evil document with
                        the same signature. This attack is called a "collision attack"; as the attacker is
                        looking for a "collision".
                        <br/>
                        <br/>
                        On the other hand, if "C" has no control over the good document, this doesn't work. He can,
                        of course, create 𝑁 evil documents and see if there is one with the same hash as the good one,
                        however the probability  of that happening is significantly smaller if 𝑁 is large it goes upto
                        &nbsp;<span ref={node => renderInlineEquation("O(N)", node)}/>.
                        This attack is called a "second preimage attack", that is, find a second
                        message that hashes to the same value as a given one.
                        If the source document is already fixed then we can do a pre-image attack where we try to find a message
                        that has a specific hash value.
                    </BlogWrapper>
                </BaseContainer>
            </Layout>
        </>
    )
};
export default BirthdayAttackBlog;
