import React from "react";

import Layout from 'components/Layout';

function RNativeTest() {
    return <Layout>
        {typeof window !== "undefined" && window.ReactNativeWebView}
    </Layout>
}
export default RNativeTest;
