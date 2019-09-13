import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

import Button from '../src/index';

storiesOf('Button', module).add('with text', () => <Button />);
