import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../services/Api";
interface RegisterFormValues {
    fullName: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<RegisterFormValues>({
        fullName: "",
        emailAddress: "",
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

    const onSuccess = () => {
        
        navigate("/");
    };

    const onError = ({ data }: { data: any }) => {
        console.log("Login error:", data);
        localStorage.clear();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
        const { fullName, emailAddress, password, confirmPassword } = formValues;
        createAccount(fullName, emailAddress, password, confirmPassword, onSuccess, onError);
    };
    return (
        <div className="signPage">
            <div className="signPage__left">
                <figure className="left__image"></figure>
            </div>
            <div className="signPage__right">
                <div className="right__container">
                    <div className="container__header">
                        <h2>Stwórz konto</h2>
                    </div>
                    <div className="container__header">
                        <h4>Jesli posiadasz konto</h4>
                        <button
                            className="header__button"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            <u>Zaloguj</u>
                        </button>
                    </div>
                    <form className="container__form" onSubmit={handleSubmit}>
                        <div className="form__containerInput">
                            <label className="containerInput__label" htmlFor="fullName">
                                Imię i Nazwisko:
                            </label>
                            <input
                                className="containerInput__input"
                                type="fullName"
                                id="fullName"
                                name="fullName"
                                placeholder="Imię i Nazwisko"
                                value={formValues.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__containerInput">
                            <label className="containerInput__label" htmlFor="emailAddress">
                                Email:
                            </label>
                            <input
                                className="containerInput__input"
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                placeholder="Email"
                                value={formValues.emailAddress}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__containerInput">
                            <label className="containerInput__label" htmlFor="password">
                                Hasło:
                            </label>
                            <input
                                className="containerInput__input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Hasło"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__containerInput">
                            <label className="containerInput__label" htmlFor="confirmPassword">
                                Powtórz hasło:
                            </label>
                            <input
                                className="containerInput__input"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Powtórz hasło"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="form__button" type="submit">
                            Rejestruj
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
