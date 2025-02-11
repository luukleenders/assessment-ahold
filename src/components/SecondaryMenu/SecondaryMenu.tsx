import { MenuItem } from '@/components/MenuItem';

export function SecondaryMenu() {
  const clickHandler = () => {
    console.log('click!');
  };

  return (
    <ul className='flex flex-col gap-0.5'>
      <MenuItem onClick={clickHandler} icon='moon' label='Dark Mode' secondary />
      <MenuItem onClick={clickHandler} icon='log-out' label='Uitloggen' secondary />
    </ul>
  );
}
