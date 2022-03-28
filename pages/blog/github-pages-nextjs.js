import React from "react";

import Layout from "components/Layout";
import {BaseContainer} from "components/wrappers";
import {BlogSectionHeader, BlogWrapper, Separator} from "components/blog/wrapper";
import Title from "components/blog/header";


const githubPagesNextJSBlog = () => (
    <Layout>
        <BaseContainer>
                <BlogWrapper>
                        <Title title="Github Pages with Next JS"/>
                        <Separator />
                        <BlogSectionHeader>
                            Setup
                        </BlogSectionHeader>
                        WIP
                </BlogWrapper>
        </BaseContainer>
    </Layout>
);

export default githubPagesNextJSBlog;