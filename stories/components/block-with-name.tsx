/** @jsx jsx */
import { FunctionComponentElement } from 'react';
import { jsx } from '@emotion/core';
import { AnalyticsContainer, AnalyticsData } from '../../src';

interface ContainerProps {
    children: JSX.Element[] | JSX.Element;
    name: string;
    data: AnalyticsData;
}

const Container = ({
    children,
    name,
    data,
}: ContainerProps): FunctionComponentElement<ContainerProps> => {
    return (
        <AnalyticsContainer name={name} data={data}>
            <div
                css={{
                    margin: 12,
                    border: '3px solid #f0f0f0',
                    borderRadius: 3,
                }}
            >
                {children}
                <div
                    css={{
                        margin: 12,
                        padding: '8px 12px',
                        fontSize: 11,
                        background: '#f0f0f0',
                    }}
                >
                    Block named <b>{name}</b>, data inside: <pre>{JSON.stringify(data)}</pre>
                </div>
            </div>
        </AnalyticsContainer>
    );
};

export default Container;
