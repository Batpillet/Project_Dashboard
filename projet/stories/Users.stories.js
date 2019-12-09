import React from 'react';
import { StoriesOf, storiesOf } from '@storybook/react'; 
import Users from '../src/components/Users'; 

export default {
  title: 'Users',
};

storiesOf('Users', module).add('default', () => <Users />)


