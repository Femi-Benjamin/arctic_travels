import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Failed to sign in. Please check your credentials.');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-arctic-800/60 p-8 rounded-2xl shadow-xl border border-arctic-700/40 text-text-primary">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-text-primary">Welcome Back</h2>
                    <p className="mt-2 text-text-secondary">Sign in to your account</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <Input
                            id="email"
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@example.com"
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="text-red-300 text-sm text-center bg-red-900/30 p-2 rounded">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </Button>

                    <div className="text-center text-sm">
                        <span className="text-text-secondary">Don't have an account? </span>
                        <button type="button" className="text-arctic-blue font-medium hover:underline">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
