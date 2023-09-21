import React from "react";

const Card = (props) => {
    const handleLinkClick = () => {
        window.open(props.igLink, '_blank');
    }

    return (
        <div className="Card">
            <div className="card-image">
                <img src= {props.img} alt="" className= "card-image-circle" />
            </div>
            <div className="card-content">
                <h3> {props.name} </h3>
                <h4> {props.location}</h4>
                <p>Food: {props.foodRating}</p>
                <p>Service: {props.serviceRating}</p>
                <p>Decoration: {props.decorationRating}</p>
                <button className = "card-ig-link" onClick={handleLinkClick}> Instagram </button>
            </div>
        </div>
    )
} 

export default Card