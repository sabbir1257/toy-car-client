import React from "react";

const Card = ({ subCategory }) => {
    const [name, photo_url, price, rating] = subCategory;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={photo_url} /></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p className="">{price}</p>
      <p className="">{rating}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Card;
