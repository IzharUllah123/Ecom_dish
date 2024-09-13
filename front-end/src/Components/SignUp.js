import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setUserName] = useState('');
    const [email, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // use for navigation from signup page to product list
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');

        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    // handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        // Handle form submission logic
        console.log(name, password, email);
        await collectData();
    };

    // calling api
    const collectData = async () => {
        let result = await fetch(`http://localhost:5000/register`, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);

        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
    }

    return (
        <div className="content">
            <div className="text">SignUp</div>
            <form onSubmit={handleSubmit}>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className="field">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <span className="fas fa-user"></span>
                    <label>User Name</label>
                </div>
                <div className="field">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        required
                    />
                    <span className="fas fa-user"></span>
                    <label>Email or Phone</label>
                </div>
                <div className="field">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="fas fa-lock"></span>
                    <label>Password</label>
                </div>
                
                <button className="buttonn" type="submit">Sign up</button>
                
            </form>
        </div>
    );
};

export default SignUp;
