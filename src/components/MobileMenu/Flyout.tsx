import classNames from 'classnames';
import { X } from 'lucide-react';
import { MenuItem, type MenuItemProps } from '@/components/MenuItem';
import { SecondaryMenu } from '@/components/SecondaryMenu';
import { useData } from '@/context/useData';

type MobileMenuProps = {
  isOpen: boolean;
  menuItems: MenuItemProps[];
  onClose: () => void;
};

export function Flyout({ isOpen, menuItems, onClose }: MobileMenuProps) {
  const { userName } = useData();
  const classes = classNames(
    'fixed top-0 left-0 z-50 flex h-screen w-screen transform flex-col gap-4 bg-gray-200 transition-transform duration-200 ease-in-out',
    {
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen,
    }
  );

  return (
    <div className={classes}>
      <div className='flex items-center justify-between bg-white p-4 shadow-md'>
        <span className='p-2 font-bold'>{userName}</span>

        <div className='flex items-center'>
          <div className='mr-4 h-6 w-px bg-gray-200' />
          <button className='hover:cursor-pointer' onClick={onClose} aria-label='Close menu'>
            <X size='28' />
          </button>
        </div>
      </div>

      <ul className='flex flex-col gap-0.5'>
        {menuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </ul>

      <SecondaryMenu />
    </div>
  );
}
