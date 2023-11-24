import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite {store.favorites.length}
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites && store.favorites.length > 0 ? store.favorites.map((item, index) => {
								return (
									<li key={index}><a className="dropdown-item" href="#">{item} <span onClick={() => { actions.deleteFavorite(item) }}><i class="bi bi-trash"></i></span></a></li>
								)
							}) :
								<li><a className="dropdown-item" href="#">No Favorites</a></li>
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
