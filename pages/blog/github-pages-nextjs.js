import React from "react";

import styled from "styled-components";

import Layout from "components/Layout";
import {BaseContainer} from "components/wrappers";
import {Span} from "components/webcomps";
import {BlogSectionHeader, BlogWrapper, Separator} from "components/blog/wrapper";
import Title from "components/blog/header";
import COLORS from "constants/color";
import Thumbnail from "components/thumbnail";

const Snippet = styled.div`
  font: normal 16px monospace;
  background-color: ${COLORS.LIGHT_PURPLE};
  border: 1px solid ${COLORS.LIGHT_WHITE};
  padding: 12px;
  margin: 16px 0;
  border-radius: 2px;
  white-space: pre-wrap;
  overflow: auto;
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
        "fullexport": "npx export && npx nojekyll"
}`;

const githubPagesNextJSBlog = () => (
    <Layout>
        <BaseContainer>
                <BlogWrapper>
                        <Title title="Github Pages with Next JS"/>
                        <DivWrapper>
                        Learn how to get up and running with your first GitHub Pages website using Next.js .&nbsp;
                        A quick and easy way for creating & publishing a free portfolio, blog or website.
                        By the end of the blog, you will have your own domain and a public place without any hosting cost to post your work.{'\n'}
                        We will be using Next.js which is an open-source React front-end framework which supports &quot;static-site generation&quot;.
                        It exports our react app to static HTML which can be run standalone without the need of a Node.js server & moreover, this can be processed by GitHub Pages.
                        </DivWrapper>
                        <Separator />
                        <BlogSectionHeader>
                            Github Setup
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 1 - </Span>Create a GitHub account{'\n'}
                                If you don’t have a GitHub account, create one, otherwise go log in.{'\n'}
                                Note: Your username will eventually be part of your websites URL, so just keep that in mind when picking a username.{'\n'}
                                <Span color={COLORS.PINK}>Step 2 - </Span>Create a public repo named username.github.io{'\n'}
                                Like, if my username is &quot;abhishekasana&quot; then my repo name will be &quot;abhishekasana.github.io&quot;.
                        </DivWrapper>
                        <Separator height="1px" bg={COLORS.PINK}/>
                        <Thumbnail imgUrl="/static/images/create_repo.png" />
                        <BlogSectionHeader>
                                App Setup
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 3 - </Span>Create Next.js app using a boilerplate{'\n'}
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
                                        <a
                                            style={{color: COLORS.NEON_PURPLE}}
                                            href="https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github">
                                                How to push a project to github
                                        </a>
                                ]
                        </DivWrapper>
                        <BlogSectionHeader>
                                Modding app for github pages
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 4 - </Span>Update the &quot;package.json&quot;. Add the following scripts{'\n'}
                                <Snippet>
                                        <code>
                                                {scriptJsonConf}
                                        </code>
                                </Snippet>
                                Explanation -{'\n'}
                                <ul>
                                        <li>
                                                By default, Next.js spits the static export in the &quot;out/&quot; directory.
                                                But Github Pages site can be only built from either root i.e &quot;/&quot; or &quot;docs/&quot; directory which we will see later in the repo settings in Github.{'\n'}
                                                So we will updating the export script to output in the &quot;docs/&quot; directory.
                                        </li>
                                        <li>
                                                By default Github Pages do a Jekyll processing on the site.
                                                Jekyll considers files or directories that start with underscores as special resources and does not copy them to the final site.
                                                And, Next.js uses &quot;_&quot; underscore in the export files/directories naming convention.{'\n'}
                                                So we need to disable this Jekyll processing by creating a &quot;.nojekyll&quot; file in the directory which is set as the source in Github pages.
                                        </li>
                                </ul>
                                <br/>
                                <Span color={COLORS.PINK}>Step 6 - </Span>Commit & Push these changes{'\n'}
                                <Snippet>
                                        <ShellCode>
                                                <span>git add .</span>{'\n'}
                                                <span>git commit -m &quot;script changes&quot;</span>{'\n'}
                                                <span>git push -u -f origin main</span>
                                        </ShellCode>
                                </Snippet>
                        </DivWrapper>
                        <BlogSectionHeader>
                               Configuring Github pages through dashboard
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 7 - </Span>Update the following params in the GitHub page Settings,
                                <ul>
                                        <li>Map your branch as &quot;main&quot;</li>
                                        <li>Map your source folder as &quot;docs/&quot;</li>
                                </ul>
                                <Separator height="1px" bg={COLORS.PINK}/>
                                <Thumbnail
                                    imgUrl="/static/images/configure_branch_gh_pages.png" alt="configure branch at github dashboard"
                                    style={{thumbnail: {maxWidth: "128px", maxHeight: "auto"}}}
                                />
                        </DivWrapper>
                        <BlogSectionHeader>
                                All Done!
                        </BlogSectionHeader>
                        <DivWrapper>
                                <Span color={COLORS.PINK}>Step 8 - </Span>Open your website url (https://username.github.io) in the browser.{'\n'}
                                There may be a few minute delay, but eventually GitHub will recognize that you created a GitHub Pages repository, it will automatically pick it up and create your website.
                        </DivWrapper>
                </BlogWrapper>
        </BaseContainer>
    </Layout>
);

export default githubPagesNextJSBlog;