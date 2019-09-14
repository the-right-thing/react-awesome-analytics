/** @jsx jsx */
import { FunctionComponentElement } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@atlaskit/button';
import { jsx } from '@emotion/core';

import { useAnalytics } from '../../src';

interface ButtonProps {
    children: JSX.Element[] | JSX.Element | string | void;
}

const SimpleButton = ({ children }: ButtonProps): FunctionComponentElement<ButtonProps> => {
    const { fire } = useAnalytics();

    const onClick = () => {
        fire();
        action('click');
    };

    return (
        <div
            css={{
                margin: 12,
            }}
        >
            <Button onClick={onClick}>{children || 'Default button'}</Button>
        </div>
    );
};

export default SimpleButton;
