import React from 'react';
import { storiesOf } from '@storybook/react'; 
import TableWidget from '../src/components/TableWidget'; 

export default {
  title: 'Widget : Tableau',
};

storiesOf('TableWidget', module).add('default', () => <TableWidget />)

