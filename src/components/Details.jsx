import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();

  const {
    name,
    seller_name,
    seller_email,
    price,
    sub_category,
    rating,
    quantity,
    description,
    photo_url,
  } = toy;

  return (
    <div class="flex flex-col mx-auto mt-20 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={photo_url}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2  text-2xl  tracking-tight text-gray-900 dark:text-white">
          <span className="font-bold">Product Name:</span> {name}
        </h5>
        <p class="mb-3  text-gray-700 dark:text-gray-400">
          <span className="font-bold">Seller Name:</span> {seller_name}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Seller Email:</span> {seller_email}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Sub Category:</span> {sub_category}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         <span className="font-bold"> Rating:</span> {rating}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         <span className="font-bold"> Quantity:</span> {quantity}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
