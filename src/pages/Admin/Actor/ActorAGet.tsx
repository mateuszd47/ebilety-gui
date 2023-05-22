import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getActorsID } from "../../../services/Api";
interface Data {
    id: string;
    profilePictureURL: string;
    fullName: string;
    bio: string;
}
const ActorAGet = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setLoading] = useState<boolean>(false);
    const [actor, setActor] = useState<Data>({ id: "", profilePictureURL: "", fullName: "", bio: "" });

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
                <NavLink to={`/Actors/Edit/${actor.id}`} className="button default">
                    Edytuj
                </NavLink>
            </nav>
            <div className="get">
                <div className="get__image">
                    <figure
                        className="image"
                        style={{ backgroundImage: `url("${actor?.profilePictureURL}")` }}
                    ></figure>
                </div>
                <div className="get__headertext">
                    <h2>{actor?.fullName}</h2>
                </div>
                <div className="get__bio">
                    <p>{actor?.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default ActorAGet;
