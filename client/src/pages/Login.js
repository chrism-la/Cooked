import { useState } from 'react';
import '../scss/Login.scss';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-background">
            <div className="login-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                            Remember me
                        </label>
                        <a href="/">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                    <div className="register-link">
                        <p>
                            Don't have an account? <a href="/">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
