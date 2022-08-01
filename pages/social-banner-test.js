import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function SocialBannerTest() {
    return <Layout>
        <Head>
            <title>social banner test</title>
            <meta property="og:url" content="https://www.kasana.io/social-banner-test" />
            <meta property="og:title" content="social banner test" />
            <meta property="og:image" content="https://i.ibb.co/S3vXH3k/building-architecture.jpg" />
        </Head>
        <BaseContainer>
            <Text>Test Me</Text>
        </BaseContainer>
    </Layout>
}

export default SocialBannerTest;
