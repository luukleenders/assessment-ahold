import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Flyout } from './Flyout';
import { MenuItemProps } from '@/components/MenuItem';

type MobileMenuProps = {
  menuItems: MenuItemProps[];
};

export function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button 
        onClick={clickHandler} 
        className='flex items-center hover:cursor-pointer md:hidden'
        aria-expanded={isOpen}
        aria-label="Main menu"
      >
        <div className='mr-4 h-6 w-px bg-gray-200' />
        <Menu size='24' aria-hidden="true" />
      </button>

      <Flyout isOpen={isOpen} menuItems={menuItems} onClose={clickHandler} />
    </>
  );
}
