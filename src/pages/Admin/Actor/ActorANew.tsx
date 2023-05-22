import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postActors } from "../../../services/Api";

interface DataValues {
    profilePictureURL: string;
    fullName: string;
    bio: string;
}

const ActorANew = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<DataValues>({
        profilePictureURL: "",
        fullName: "",
        bio: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleChangeAREA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onSuccess = ({ data }: { data: any }) => {
        console.log(data);
    };

    const onError = ({ data }: { data: any }) => {
        console.log(data);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
        const { profilePictureURL, fullName, bio } = formValues;
        postActors(profilePictureURL, fullName, bio, onSuccess, onError);
    };
    return (
        <div className="container__form">
            <nav className="form__nav">
                <button
                    className="button nav"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cofnij
                </button>
            </nav>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__inputContainer">
                    <label className="inputContainer__label" htmlFor="profilePictureURL">
                        Obrazek URL
                    </label>
                    <input
                        className="inputContainer__input"
                        type="text"
                        id="profilePictureURL"
                        name="profilePictureURL"
                        placeholder="Obrazek URL"
                        value={formValues.profilePictureURL}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__inputContainer">
                    <label className="inputContainer__label" htmlFor="fullName">
                        Imię i Nazwisko:
                    </label>
                    <input
                        className="inputContainer__input"
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Imię i Nazwisko"
                        value={formValues.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__textareaContainer">
                    <label className="textareaContainer__label" htmlFor="bio">
                        Bio:
                    </label>
                    <textarea
                        className="textareaContainer__input"
                        id="bio"
                        name="bio"
                        placeholder="Bio"
                        value={formValues.bio}
                        onChange={handleChangeAREA}
                        required
                    />
                </div>
                <div className="form__buttonContainer">
                    <button className="button success" type="submit">
                        Stwórz
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ActorANew;
