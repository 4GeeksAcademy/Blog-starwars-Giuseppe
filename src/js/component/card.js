import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.gender}</p>
          <p className="card-text">{props.hair_color}</p>
          <p className="card-text">{props.eye_color}</p>
          <div className="row">
            <div className="col-6">
              <Link to={`/characters/${props._id}`} state={props} className="btn btn-primary">Learn More</Link>
            </div>
            <div className="col-6">
              <button className="btn btn-warning" onClick={() => { actions.addFavorite(props.name) }}><i className="bi bi-heart "></i></button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Card;