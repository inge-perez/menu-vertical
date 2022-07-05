import React from 'react';
import { SiteBarMenu } from './components/SiteBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising } from 'react-icons/fc'
import profileImage from './profile.jpg'

function App() {

  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'hola',
      icon: FcAdvertising,
      url: "/"
    }
  ];

  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Juan Perez',
    title: 'youtuber',
    photoUrl: profileImage,
    url: "/"
  }

  return (
    <div>
      <SiteBarMenu items={items} card={card} />
    </div>
  );
}

export default App;
