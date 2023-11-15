import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";

export const Home = () => {

	const { store } = useContext(Context)
	return (
		<div className="container mt-5">
			<h1 className="text-danger">Characters</h1>
			<div className="carrusel">
				<div className="row">
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
				</div>

			</div>
			<h1 className="text-danger">Planets</h1>
			<div className="carrusel">
				<div className="row">
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
					<div className="col-1">
						<Card src="https://img.freepik.com/foto-gratis/foto-deliciosa-hamburguesa-aislado-sobre-fondo-blanco_125540-3378.jpg?w=996&t=st=1699512050~exp=1699512650~hmac=ba2371dcf314320afa76f17e249427bb5109fbcee202a6245e54353568b2dc6f" Name="Luke" Gender="Male" hairColor="blond" eyeColor="blue" />
					</div>
				</div>

			</div>
		</div>
	);
}



