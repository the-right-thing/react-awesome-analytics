/** @jsx jsx */
import { FunctionComponentElement } from 'react';
import { jsx } from '@emotion/core';
import { AnalyticsData } from '../../src';

interface ContainerProps {
    children: JSX.Element[] | JSX.Element;
    name: string;
}

const Container = ({
    children,
    name,
}: ContainerProps): FunctionComponentElement<ContainerProps> => {
    return (
        <AnalyticsData name={name}>
            <div
                css={{
                    margin: 12,
                    border: '3px solid #f0f0f0',
                    borderRadius: 3,
                }}
            >
                {children}
            </div>
        </AnalyticsData>
    );
};

export default Container;
