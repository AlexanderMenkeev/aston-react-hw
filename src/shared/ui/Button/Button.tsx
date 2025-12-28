import styles from './Button.module.css';
import type { PropsWithChildren } from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'icon';
}

function Button({ children, onClick, variant = 'default', ...props }: PropsWithChildren<IButtonProps>) {
  const className = variant === 'default' ? styles.button : styles.icon;
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
