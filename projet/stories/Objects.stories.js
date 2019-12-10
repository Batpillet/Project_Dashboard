import React from 'react';
import { storiesOf } from '@storybook/react'; 
import Objects from '../src/components/Objects'; 

export default {
  title: 'Widget : Objets connectés',
};

storiesOf('Objects', module).add('default', () => <Objects />)

