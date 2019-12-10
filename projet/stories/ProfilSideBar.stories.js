import React from 'react';
import { storiesOf } from '@storybook/react'; 
import ProfilSideBar from '../src/components/ProfilSideBar';

export default {
  title: 'Informations Profil',
};

storiesOf('ProfilSideBar', module).add('default', () => <ProfilSideBar />)