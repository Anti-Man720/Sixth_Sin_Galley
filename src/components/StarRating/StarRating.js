import React from "react";
import classes from "./StarRating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
export default function StarRating(props) {
  console.log("StarRating mounted");
  const stars = props.stars;

  function getStars() {
    switch (stars) {
      case 0:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        );
      case 1:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        );
      case 2:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        );

      case 3:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarRegular} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        );
      case 4:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarRegular} />
          </div>
        );

      case 5:
        return (
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        );

      default:
        return "By Odins Beard!";
    }
  }
  return <div className={classes.container}>{getStars()}</div>;
}
