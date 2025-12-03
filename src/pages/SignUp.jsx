import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signup(email, password, name);
            navigate('/');
        } catch (err) {
            setError(err.toString());
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-arctic-800/70 p-8 rounded-2xl shadow-xl border border-arctic-700/30 text-text-primary">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Create your account</h2>
                    <p className="mt-2 text-text-secondary">Sign up to manage bookings and save trips</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <Input id="name" label="Full name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jane Doe" />
                        <Input id="email" type="email" label="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@example.com" />
                        <Input id="password" type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="••••••••" />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                            {error}
                        </div>
                    )}

                    <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</Button>

                    <div className="text-center text-sm">
                        <span className="text-text-secondary">Already have an account? </span>
                        <a href="/signin" className="text-arctic-blue font-medium hover:underline">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
