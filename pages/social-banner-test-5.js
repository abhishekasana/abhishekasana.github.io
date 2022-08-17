import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function SocialBannerTest5() {
    return <Layout>
        <Head>
            <title>social banner test</title>
            <meta property="og:url" content="https://www.kasana.io/social-banner-test-5" />
            <meta property="og:title" content="social banner test 5" />
            <meta property="og:image" content="https://i.ibb.co/H2wfJmH/1-77.png" />
        </Head>
        <BaseContainer>
            <Text>Test Me - ratio 1.7</Text>
        </BaseContainer>
    </Layout>
}

export default SocialBannerTest5;
