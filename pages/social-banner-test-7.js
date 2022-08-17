import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function SocialBannerTest7() {
    return <Layout>
        <Head>
            <title>social banner test</title>
            <meta property="og:url" content="https://www.kasana.io/social-banner-test-7" />
            <meta property="og:title" content="social banner test 7 - 1.2" />
            <meta property="og:image" content="https://i.ibb.co/93rHk8W/1-2.png" />
        </Head>
        <BaseContainer>
            <Text>Test Me - ratio 1.2</Text>
        </BaseContainer>
    </Layout>
}

export default SocialBannerTest7;
