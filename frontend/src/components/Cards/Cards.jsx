import React, { useContext, useState } from "react";
import "./Cards.scss";
import MainContext from "../../context/context";
import { Link } from "react-router-dom";
const Cards = () => {
  const { data, addToBasket } = useContext(MainContext);
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="mb-5 mt-5"><input
          value={inpVal}
          onChange={(e) => {
            setInpVal(e.target.value);
          }}
          type="text"
          placeholder="Search "
        />
        <button
          onClick={() => setSortBy({ field: "title", asc: true })}
          className="btn btn-light mx-3  "
        >
          A-Z
        </button>
        <button
          onClick={() => setSortBy({ field: "title", asc: false })}
          className="btn btn-light mx-3 "
        >
          Z-A
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: false })}
          className="btn btn-light v"
        >
          Low To High
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: true })}
          className="btn btn-light mx-3 "
        >
          High To Low
        </button></div>
        {data
          .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
          .sort((a, b) => {
            if (!sortBy) {
              return 0;
            } else if (sortBy.asc == true) {
              return a[sortBy.field] > b[sortBy.field]
                ? 1
                : b[sortBy.field] > a[sortBy.field]
                ? -1
                : 0;
            } else if (sortBy.asc == false) {
              return a[sortBy.field] < b[sortBy.field]
                ? 1
                : b[sortBy.field] < a[sortBy.field]
                ? -1
                : 0;
            }
          })
          .map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div key={item._id} className="card">
                <div className="card-body">
                  <img src={item.image} className="card-img-top" alt="" />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-light "
                    onClick={() => {
                      addToBasket(itemData._id);
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
