import React from "react";
import Head from "next/head";

import Layout from 'components/Layout';
import {BaseContainer} from 'components/wrappers';
import {Text} from "components/webcomps";

function BannerTest() {
    return <Layout>
        <Head>
            <title>social banner test</title>
            <meta property="og:url" content="https://www.kasana.io/banner-test" />
            <meta property="og:title" content="banner test" />
            <meta property="og:image" content="https://static.qumath.in/maruti-test/13242710-23a5-43f2-81ff-275cad575b03.png" />
        </Head>
        <BaseContainer>
            <Text>Test Me - ratio 1.5</Text>
        </BaseContainer>
    </Layout>
}

export default BannerTest;
