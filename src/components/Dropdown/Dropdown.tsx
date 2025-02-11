import { PropsWithChildren, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import classNames from 'classnames';

type DropdownProps = {
  className?: string;
  label: string;
};

export function Dropdown({ children, className, label }: PropsWithChildren<DropdownProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const containerClass = classNames('relative', className);

  const iconClass = classNames('transition-transform', {
    'rotate-180': isOpen,
  });

  const dropdownClass = classNames(
    'absolute top-10 right-0 overflow-hidden rounded-2xl border border-2 border-solid border-neutral-200 bg-neutral-200 transition-all duration-200 ease-in-out',
    {
      'translate-y-0 opacity-100': isOpen,
      '-translate-y-4 opacity-0': !isOpen,
    }
  );

  return (
    <div className={containerClass}>
      <button
        onClick={clickHandler}
        className='flex items-center gap-2 font-bold hover:cursor-pointer'
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label} <ChevronDown className={iconClass} aria-hidden="true" />
      </button>

      <div 
        className={dropdownClass}
        role="menu"
        aria-orientation="vertical"
      >
        {children}
      </div>
    </div>
  );
}
