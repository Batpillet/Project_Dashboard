import React from 'react';
import { storiesOf } from '@storybook/react'; 
import PieWidget from '../src/components/PieWidget'; 

export default {
  title: 'Widget : Camembert',
};

storiesOf('PieWidget', module).add('default', () => <PieWidget />)

