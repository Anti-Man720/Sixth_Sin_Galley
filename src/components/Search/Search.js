import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./search.module.css";
export default function Search() {
  console.log("Search mounted");
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? "");
  }, [searchTerm]);
  console.log(searchTerm);
  const search = async () => {
    term ? navigate("/search/" + term) : navigate("/");
  };
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search My Belly Baby!"
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && search()}
        value={searchTerm}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
