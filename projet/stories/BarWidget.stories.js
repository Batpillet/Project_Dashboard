import React from 'react';
import { storiesOf } from '@storybook/react'; 
import BarWidget from '../src/components/BarWidget'; 

export default {
  title: 'BarWidget',
};

storiesOf('BarWidget', module).add('default', () => <BarWidget />)