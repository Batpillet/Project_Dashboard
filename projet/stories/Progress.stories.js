import React from 'react';
import { storiesOf } from '@storybook/react'; 
import Progress from '../src/components/Progress'; 

export default {
  title: 'Progress',
};

storiesOf('Progress', module).add('default', () => <Progress />)