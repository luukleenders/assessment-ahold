import classNames from 'classnames';

import { DynamicIcon, IconName } from 'lucide-react/dynamic';

type BaseItem = {
  label: string;
  icon: IconName;
  secondary?: boolean;
};

type MenuLink = {
  href: string;
  onClick?: never;
};

type MenuButton = {
  href?: never;
  onClick: () => void;
};

export type MenuItemProps = BaseItem & (MenuLink | MenuButton);

export function MenuItem({ href, icon, label, onClick, secondary }: MenuItemProps) {
  const isActive = window.location.pathname === href;

  const iconColor = isActive ? '#02ade6' : 'black';
  const iconClasses = classNames({
    'lg:hidden': !secondary,
  });

  const classes = classNames('relative mx-4 flex flex-row gap-2 py-6 hover:cursor-pointer', {
    'lg:animated-underline-100': isActive,
    'w-full lg:mr-12': secondary,
    'lg:animated-underline-0 lg:hover:animated-underline-100': !secondary,
  });

  return (
    <li className='bg-white'>
      {href && (
        <a className={classes} href={href}>
          <DynamicIcon className={iconClasses} size='24' color={iconColor} name={icon} />
          {label}
        </a>
      )}

      {onClick && (
        <button className={classes} onClick={onClick}>
          <DynamicIcon className={iconClasses} size='24' color={iconColor} name={icon} />
          {label}
        </button>
      )}
    </li>
  );
}
