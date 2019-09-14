/** @jsx jsx */
import { useState } from 'react';
import '@atlaskit/css-reset';
import { jsx } from '@emotion/core';

import { AnalyticsProvider } from '../src';

import Container from './components/block-with-name';
import Button from './components/simple-button';

export default {
    title: 'Contextual analytics - simple tree',
};

export const DefaultStory = () => {
    const [firedData, setFiredData] = useState({});

    return (
        <div css={{ display: 'flex', width: '100%' }}>
            <div css={{ flex: '1 0 auto' }}>
                <AnalyticsProvider
                    onEventFired={data => {
                        setFiredData(data);
                    }}
                >
                    <Container name="container-1" data={{ id: '1', something: '1' }}>
                        <Container name="container-1-1" data={{ id: '1-1', something: '1-1' }}>
                            <Container
                                name="container-1-1-1"
                                data={{ id: '1-1-1', something: '1-1-1' }}
                            >
                                <Button name="First button" />
                            </Container>
                            <Button name="Second button" />
                        </Container>
                        <Container name="container-1-2" data={{ id: '1-2', something: '1-2' }}>
                            <Button name="Third button" />
                        </Container>
                        <Button name="Forth button" />
                    </Container>
                </AnalyticsProvider>
            </div>
            <pre css={{ flexBasis: '50%' }}>{JSON.stringify(firedData, null, 2)}</pre>
        </div>
    );
};
