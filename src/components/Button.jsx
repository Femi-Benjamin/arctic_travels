import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-arctic-blue text-white hover:bg-blue-600 focus:ring-blue-500',
        secondary: 'bg-arctic-dark text-white hover:bg-gray-800 focus:ring-gray-500',
        outline: 'border-2 border-arctic-blue text-arctic-blue hover:bg-blue-50 focus:ring-blue-500',
        ghost: 'text-text-secondary hover:text-arctic-blue hover:bg-blue-50',
        white: 'bg-white text-arctic-blue hover:bg-gray-100 focus:ring-white',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
