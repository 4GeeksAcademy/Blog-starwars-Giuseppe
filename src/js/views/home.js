import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";
import Planetas from "../component/planetas";


export const Home = () => {

	const { store } = useContext(Context)
	return (
		<div className="container ">
			<h1 className="text-danger">Characters</h1>
			<div className="carrusel">
				{store.characters.map((item) => {
					return (
						<div className="row" key={item.uid}>
							<div className="col-1">
								<Card src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
									name={item.properties.name}
									gender={item.properties.gender}
									hair_color={item.properties.hair_color}
									eye_color={item.properties.eye_color}
								/>
							</div>

						</div>
					)
				})}

			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="carrusel">
					{console.log("error", store)}
					{store.planets.map((item, index) => {
						console.log("viendo", item)
						return (
							<div className="row" key={item.uid}>
								<div className="col-1">
									<Planetas
										src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
										name={item.properties.name}
										population={item.properties.population}
										terrain={item.properties.terrain}
									/>
								</div>

							</div>
						)
					})}

				</div>

			</div>
		</div>
	);
}



