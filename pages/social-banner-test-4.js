import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function SocialBannerTest4() {
    return <Layout>
        <Head>
            <title>social banner test</title>
            <meta property="og:url" content="https://www.kasana.io/social-banner-test-4" />
            <meta property="og:title" content="social banner test 4" />
            <meta property="og:image" content="https://i.ibb.co/p327tWG/1-5.png" />
        </Head>
        <BaseContainer>
            <Text>Test Me - ratio 1.5</Text>
        </BaseContainer>
    </Layout>
}

export default SocialBannerTest4;
