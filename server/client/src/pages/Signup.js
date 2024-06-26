import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import '../scss/Login.scss';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await signup(email, password);
    };

    return (
        <div className="login-background">
            <div className="login-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <i className="bx bxs-lock-alt"></i>
                    </div>

                    <button type="submit" className="btn" disabled={isLoading}>
                        Submit
                    </button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    );
}
