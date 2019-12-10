import React from 'react';
import { storiesOf } from '@storybook/react'; 
import Formulaire from '../src/Formulaire'; 

export default {
  title: 'Formulaire API',
};

storiesOf('Formulaire', module).add('default', () => <Formulaire />)