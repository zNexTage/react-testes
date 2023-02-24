import style from "./button.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'orange' 
}

const Button = ({ children, variant = 'orange', className, ...rest }: IButtonProps) => {
    return (
        <button {...rest} className={`${style.button} btn-${variant} ${className}`}>
            {children}
        </button>
    )
}

export default Button;