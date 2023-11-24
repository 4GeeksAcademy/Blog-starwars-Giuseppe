import React from "react";
import { useLocation } from "react-router";

export const DetailsPage = () => {
    const location = useLocation();
    const { name, gender, eye_color, hair_color, src } = location.state;

    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
