import React from 'react';
import { storiesOf } from '@storybook/react'; 
import TableWidget from '../src/components/TableWidget'; 

export default {
  title: 'TableWidget',
};

storiesOf('TableWidget', module).add('default', () => <TableWidget />)

