import React from "react"

const Card = (props) => {
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p className="card-text">{props.gender}</p>
          <p className="card-text">{props.hairColor}</p>
          <p className="card-text">{props.eyeColor}</p>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-6">
              <button className="btn btn-warning"><i className="bi bi-heart "></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;