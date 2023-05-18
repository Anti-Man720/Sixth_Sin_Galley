import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tags from "../../components/Tags/Tags";
import StarRating from "../../components/StarRating/StarRating";
import Price from "../../components/Price/Price";
import { useCart } from '../../hooks/useCart';
import classes from "./foodPage.module.css";
import { getById } from "../../services/foodService";
import NotFound from '../../components/NotFound/NotFound';

export default function FoodPage() {
  const [food, setFood] = React.useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);
    navigate('/cart');
  };
  console.log(id);

  useEffect(() => {
    const food = getById(parseInt(id));
    // const currentComponentUrl = new URL(import.meta.url);
    // const imagePath = new URL(food.imageUrl, currentComponentUrl)
    // food.imageUrl = imagePath;
    setFood(food);
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
        <img
          className={classes.image}
          src={food.imageUrl}
          alt={food.name}
        />


          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? '' : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map(origin => (
                <span key={origin}>{origin}</span>
              ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map(tag => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime}</strong> minutes
              </span>
            </div>

            <div className={classes.price}>
              <Price price={food.price} />
            </div>

            {<button onClick={handleAddToCart}>Add To Cart</button>
            }
          </div>
        </div>
      )}
    </>
  );
}
