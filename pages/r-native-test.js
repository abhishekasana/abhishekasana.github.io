import React from "react";

import Layout from 'components/Layout';

function RNativeTest() {
    return <Layout>
        <p>Test - {typeof window !== "undefined" && typeof window}</p>
        {typeof window !== "undefined" && window.ReactNativeWebView}
    </Layout>
}
export default RNativeTest;
