import React from "react";
import { useLocation } from "react-router";

export const DetailsPage = () => {
    const location = useLocation();
    const { name, gender, eye_color, hair_color, birth_year, src } = location.state;

    return (
        <>
            <div className="container mt-5">
                <h1>{name}</h1>
                <h1>{gender}</h1>
                <h1>{eye_color}</h1>
                <h1>{hair_color}</h1>
                <h1>{birth_year}</h1>
                <div className="row">
                    <div className="col">
                        <img src={src} alt={name} style={{ maxWidth: "100%" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

// Crear el componente Planets
const Planets = ({ name, population, terrain, src }) => {
    return (
        <div className="container mt-5">
            <h1>{name}</h1>
            <h1>{population}</h1>
            <h1>{terrain}</h1>
            <div className="row">
                <div className="col">
                    <img src={src} alt={name} style={{ maxWidth: "100%" }} />
                </div>
            </div>
        </div>
    );
};
