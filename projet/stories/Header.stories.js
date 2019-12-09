import React from 'react';
import { storiesOf } from '@storybook/react'; 
import Header from '../src/components/Header'; 

export default {
  title: 'Header',
};

storiesOf('Header', module).add('default', () => <Header/>)

