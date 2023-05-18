import React from "react";
import { Link } from "react-router-dom";
import classes from "./Tags.module.css";

export default function Tags(props) {
  console.log("Tags mounted");
  const tags = props.tags;
  const forFoodPage = props.forFoodPage;
  console.log(tags);
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFoodPage ? "start" : "center",
      }}
    >
      {tags.map((tag) => (
        <Link key={tag.name} to={"/search/" + tag.name}>
          {tag.name}
          {!forFoodPage && ` (${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
