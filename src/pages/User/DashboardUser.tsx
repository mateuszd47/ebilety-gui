import Header from "../../components/Header";
import { getMoviesID } from "../../services/Api";
import { useEffect, useState } from "react";

const DashboardUser = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [movie, setMovie] = useState<{}>({});
    const onSuccess = ({ data }: { data: any }) => {
        console.log(data);
        setMovie(data);
    };

    const onError = ({ data }: { data: any }) => {
        console.log("Movie error:", data);
    };
    useEffect(() => {
        if (!isLoading) {
            getMoviesID(1, onSuccess, onError);
            setLoading(true);
        }
    }, [movie, isLoading]);

    return (
        <div className="dashboardUser">
            <div className="dashboardUser__container">
                <Header />
                <main className="main">
                    <figure className="main__banner">
                        {isLoading && (
                            <div className="banner__container">
                                <div className="container__image">
                                    <figure
                                        className="image"
                                        style={{ backgroundImage: `url("${movie?.imageURL}")` }}
                                    ></figure>
                                </div>
                                <div className="container__info">
                                    <div className="info__text">
                                        <h2>{movie?.name}</h2>
                                        <p>{movie?.description}</p>
                                    </div>

                                    <div className="info__button">
                                        <button className="button__buy">Kup Bilet</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </figure>
                </main>
            </div>
            <footer className="footer"></footer>
        </div>
    );
};

export default DashboardUser;
