import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'icon';
}

function Button({ children, onClick, variant = 'default', ...props }: ButtonProps) {
  const className = variant === 'default' ? styles.button : styles.icon;
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
