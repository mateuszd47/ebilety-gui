import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<LoginFormValues>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
        setFormValues({ email: "", password: "" });
    };

    return (
        <div>
            <div></div>
            <div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <button
                    onClick={() => {
                        navigate("/Register");
                    }}
                >Go to Register</button>
            </div>
        </div>
    );
};

export default LoginPage;
