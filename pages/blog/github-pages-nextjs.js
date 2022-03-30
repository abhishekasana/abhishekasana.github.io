import React from "react";

import styled from "styled-components";

import Layout from "components/Layout";
import {BaseContainer} from "components/wrappers";
import {Span} from "components/webcomps";
import {BlogSectionHeader, BlogWrapper, Separator} from "components/blog/wrapper";
import Title from "components/blog/header";
import COLORS from "constants/color";

const Snippet = styled.div`
  font: normal 16px monospace;
  background-color: ${COLORS.LIGHT_PURPLE};
  border: 1px solid ${COLORS.LIGHT_WHITE};
  padding: 12px;
  margin: 16px 0;
  border-radius: 2px;
  white-space: pre-wrap;
`;
const DivWrapper = styled.div`
  white-space: pre-wrap;
`;
const ShellCode = styled.code`
        span::before {
                content: "$ "
        }
`;
const scriptJsonConf = `"scripts": {
        //...other_scripts
        "nojekyll": "touch docs/.nojekyll",
        "export": "next build && next export -o docs",
        "fullexport": "yarn export && yarn nojekyll"
}`;

const githubPagesNextJSBlog = () => (
    <Layout>
        <BaseContainer>
                <BlogWrapper>
                        <Title title="Github Pages with Next JS"/>
                        <Separator />
                        <BlogSectionHeader>
                            Github Setup
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 1 - </Span>Create a GitHub account. {'\n'}
                                If you don’t have a GitHub account, create one, otherwise go log in.{'\n'}
                                Note: Your username will eventually be part of your websites URL, so just keep that in mind when picking a username.{'\n'}
                                <Span color={COLORS.PINK}>Step 2 - </Span>Create a public repo named username.github.io{'\n'}
                                Like, if my username is &quot;abhishekasana&quot; then my repo name will abhishekasana.github.io
                        </DivWrapper>
                        <BlogSectionHeader>
                                App Setup
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 3 - </Span>Create Next.js app using a boilerplate.{'\n'}
                                <Snippet>
                                        <ShellCode>
                                                <span>npx create-next-app --example with-static-export username.github.io</span>{'\n'}
                                                <span>git add -a</span>{'\n'}
                                                <span>git commit -m &quot;added my next js project&quot;</span>{'\n'}
                                                <span>git remote add origin https://github.com/username/username.github.io.git</span>{'\n'}
                                                <span>git push -u -f origin main</span>{'\n'}
                                        </ShellCode>
                                </Snippet>
                                Useful Links - [
                                        <a href="https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github">git push</a>
                                ]
                        </DivWrapper>
                        <BlogSectionHeader>
                                Modding app for github pages
                        </BlogSectionHeader>
                        {/*add the step to either update the export output path either from next.config.js or package.json*/}
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 4 - </Span>Update the &quot;package.json&quot;{'\n'}
                                <Snippet>
                                        <code>
                                                {scriptJsonConf}
                                        </code>
                                </Snippet>
                                <Span color={COLORS.PINK}>Step 5 [optional] - </Span>Remap pages path for the static export.{'\n'}
                                update next.config.js{'\n'}
                                <Span color={COLORS.PINK}>Step 6 - </Span>commit these changes.{'\n'}
                                <Snippet>
                                        <ShellCode>
                                                <span>git add .</span>{'\n'}
                                                <span>git commit -m &quot;script changes&quot;</span>
                                        </ShellCode>
                                </Snippet>
                        </DivWrapper>
                        <BlogSectionHeader>
                                Github pages dashboard
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 7 - </Span>Map your branch in the GitHub page{'\n'}
                        </DivWrapper>
                        <BlogSectionHeader>
                                All Done
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 8 - </Span>Wait for few min, and your website should be ready{'\n'}
                        </DivWrapper>
                </BlogWrapper>
        </BaseContainer>
    </Layout>
);

export default githubPagesNextJSBlog;