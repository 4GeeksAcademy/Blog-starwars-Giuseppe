import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";
import Planets from "../component/planets";


export const Home = () => {

	const { store } = useContext(Context)
	return (
		<>
			<div className="container ">
				<h1 className="text-danger">Characters</h1>
				<div className="carrusel">
					{store.characters.map((item) => {
						return (
							<div className="row">
								<div className="col-1">
									<Card src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""
										name={item.properties.name}
										gender={item.properties.gender}
										hairColor={item.properties.hair_color}
										eyeColor={item.properties.eye_color}
									/>
								</div>

							</div>
						)
					})
					}
				</div>
			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="carrusel">
					{store.planets.map((item) => {
						return (
							<div className="row">
								<div className="col-1">
									<Planets
										src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
										alt="planets"
										population={item.properties.population}
										terrain={item.properties.terrain}
									/>
								</div>
							</div>
						)
					})}

				</div>
			</div>
		</>
	);
}



