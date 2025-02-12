import { MobileMenu } from '@/components/MobileMenu';
import { PrimaryMenu } from '@/components/PrimaryMenu';
import { MenuItemProps } from '@/components/MenuItem';
import { SecondaryMenu } from '@/components/SecondaryMenu';
import { Dropdown } from '@/components/Dropdown';
import { Logo } from '@/components/Logo';

import { useData } from '@/context/useData.tsx';
import menuData from '@/data/menu-data.json';

function App() {
  const menuItems = menuData as MenuItemProps[];
  const { userName } = useData();

  return (
    <div className='flex h-screen flex-col bg-white'>
      <header className='px-4 shadow-md'>
        <div className='relative container mx-auto flex items-center justify-between lg:justify-start'>
          <Logo />

          <PrimaryMenu menuItems={menuItems} />

          <Dropdown className='ml-auto hidden lg:flex' label={userName}>
            <SecondaryMenu />
          </Dropdown>

          <MobileMenu menuItems={menuItems} />
        </div>
      </header>

      <div className='flex grow items-center justify-center'>Hello Ahold!</div>
    </div>
  );
}

export default App;
