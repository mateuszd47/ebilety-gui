import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getActorsID } from "../../../services/Api";

const ActorGet = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [actor, setActor] = useState<{}>({});

    const onSuccess = ({ data }: { data: any }) => {
        console.log(data);
        setActor(data);
    };

    const onError = ({ data }: { data: any }) => {
        console.log("actor error:", data);
    };
    useEffect(() => {
        if (!isLoading && id) {
            getActorsID(id, onSuccess, onError);
            setLoading(true);
        }
    }, [actor, isLoading, id]);
    return (
        <div className="getItem">
            <nav className="getItem__nav">
                <button
                    className="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cofnij
                </button>
            </nav>
            <div className="getItem__container">
                <div className="container__image">
                    <figure className="image" style={{ backgroundImage: `url("${actor?.profilePictureURL}")` }}></figure>
                </div>
                <div className="container__info">
                    <h2>{actor?.fullName}</h2>
                    <p>{actor?.bio}</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ActorGet;
