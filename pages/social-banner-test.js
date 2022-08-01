import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function SocialBannerTest() {
    return <Layout>
        <Head>
            <meta property="og:image" content="https://www.kasana.io/static/images/building_architecture.jpeg" />
        </Head>
        <BaseContainer>
            <Text>Test Me</Text>
        </BaseContainer>
    </Layout>
}

export default SocialBannerTest;
