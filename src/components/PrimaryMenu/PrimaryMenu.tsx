import { MenuItem, type MenuItemProps } from '@/components/MenuItem';

type NavBarProps = {
  menuItems: MenuItemProps[];
};

export function PrimaryMenu({ menuItems }: NavBarProps) {
  const currentPath = window.location.pathname;
  const currentItem = menuItems.find((item) => item.href === currentPath);

  return (
    <>
      <ul className='ml-6 hidden lg:flex'>
        {menuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </ul>

      <div className='animated-underline-100 relative mx-4 py-6 lg:hidden'>
        {currentItem?.label}
      </div>
    </>
  );
}
