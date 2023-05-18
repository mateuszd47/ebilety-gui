import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const ReagisterPage = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<RegisterFormValues>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        setFormValues({ fullName: "", email: "", password: "", confirmPassword: "" });
    };
    return (
        <div>
            <div></div>
            <div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="fullName"
                            id="fullName"
                            name="fullName"
                            value={formValues.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <div>
                        <label htmlFor="confirmPassword">Password:</label>
                        <input
                            type="confirmPassword"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >Back to Login</button>
            </div>
        </div>
    );
};

export default ReagisterPage;
