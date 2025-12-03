import React from 'react';

const Input = ({
    label,
    error,
    className = '',
    id,
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-text-primary">
                    {label}
                </label>
            )}
                        <input
                                id={id}
                                className={`
                    px-4 py-2.5 rounded-lg border bg-arctic-800/40 text-text-primary placeholder:text-text-secondary
                    focus:outline-none focus:ring-2 focus:ring-arctic-blue/30 focus:border-arctic-blue
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-arctic-700/40'}
                `}
                {...props}
            />
            {error && (
                <span className="text-sm text-red-500">{error}</span>
            )}
        </div>
    );
};

export default Input;
