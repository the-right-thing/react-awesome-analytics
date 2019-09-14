/** @jsx jsx */
import { FunctionComponentElement } from 'react';
import Button from '@atlaskit/button';
import { jsx } from '@emotion/core';

import { useAnalytics } from '../../src';

interface ButtonProps {
    name: string;
}

const SimpleButton = ({ name }: ButtonProps): FunctionComponentElement<ButtonProps> => {
    const { fire } = useAnalytics();
    const payload = { fromButton: 'Something!!', buttonName: name };

    const onClick = () => {
        fire(payload);
    };

    return (
        <div
            css={{
                margin: 12,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Button onClick={onClick} appearance="primary">
                Fire with payload:
            </Button>
            <pre css={{ margin: '0 0 0 12px', fontSize: '11px' }}>{JSON.stringify(payload)}</pre>
        </div>
    );
};

export default SimpleButton;
