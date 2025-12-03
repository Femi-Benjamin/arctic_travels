import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for user
        const storedUser = localStorage.getItem('arctic_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockUser = { id: 1, email, name: email.split('@')[0] };
                    setUser(mockUser);
                    localStorage.setItem('arctic_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject('Invalid credentials');
                }
            }, 1000);
        });
    };

    const signup = (email, password, name) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockUser = { id: Date.now(), email, name: name || email.split('@')[0] };
                    setUser(mockUser);
                    localStorage.setItem('arctic_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject('Invalid signup data');
                }
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('arctic_user');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
