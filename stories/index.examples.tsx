import React from 'react';
import '@atlaskit/css-reset';

import { AnalyticsProvider } from '../src';

import Container from './components/block-with-name';
import Button from './components/simple-button';

export default {
    title: 'Contextual analytics - simple tree',
};

export const DefaultStory = () => {
    return (
        <AnalyticsProvider>
            <Container name="container-1">
                <Container name="container-1-1">
                    <Container name="container-1-1-1">
                        <Button>First button</Button>
                    </Container>
                    <Button>Second button</Button>
                </Container>
                <Container name="container-1-2">
                    <Button>Third button</Button>
                </Container>
            </Container>
        </AnalyticsProvider>
    );
};
