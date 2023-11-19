import React from 'react';

import {Text} from '../webcomps';
import SectionTitle from '../sections/sectionTitle';
import {SectionContainer} from "../wrappers";

function WhoAmI() {
    return <SectionContainer>
        <SectionTitle title="whoami"/>
        <Text>
            I'm a software developer and a tinkerer.
            <br/>
            <br/>
            As a software developer and an avid explorer, I'm fascinated by understanding how
            things work, whether it's a challenging piece of code or the everyday wonders of life. This approach fuels
            my engineering creativity, leading to better solutions and innovations. My blog is born from this passion, a
            platform where I share my experiences and the insights gained along the way.
        </Text>
    </SectionContainer>
}

export default WhoAmI;
