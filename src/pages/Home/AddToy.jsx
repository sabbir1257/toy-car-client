import React from "react";
import { useAuth } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useAuth();

  const addNewToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo_url = form.toy_image.value;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.email.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toy = {
      photo_url,
      name,
      price,
      seller_name,
      seller_email,
      sub_category,
      rating,
      quantity,
      description,
    };

    fetch("https://colleccon-mart.vercel.app/add-new-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "",
            text: "Data Inserted Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="md:w-[1250px] mx-auto">
      <h1 className="text-blue-600 text-center font-bold my-10 text-3xl underline">
        Add Toy
      </h1>
      <form onSubmit={addNewToy}>
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </h1>
            <input
              className="w-full rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Picture URL of the toy
            </h1>
            <input
              className="p-2 w-full rounded-lg"
              type="text"
              name="toy_image"
              placeholder="Picture URL"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Name
            </h1>
            <input
            value={user?.displayName && user.displayName}
              className="w-full rounded-lg"
              type="text"
              name="seller_name"
              placeholder="Seller Name"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Email
            </h1>
            <input 
            value={user?.email && user.email}
              className="w-full rounded-lg"
              type="email"
              name="email"
              placeholder="Seller Email"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sub-category
            </h1>
            <input
              className="w-full rounded-lg"
              type="text"
              name="sub_category"
              placeholder="Sub-Category"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </h1>
            <input
              className="w-full rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rating
            </h1>
            <input
              className="w-full rounded-lg"
              type="text"
              name="rating"
              placeholder="Rating"
            />
          </div>
          <div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Available quantity
            </h1>
            <input
              className="w-full rounded-lg"
              type="text"
              name="quantity"
              placeholder="Available quantity"
            />
          </div>
        </div>
        <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">
          Detail description
        </h1>
        <textarea
          className="w-full rounded-lg mb-6"
          name="description"
          id=""
          cols="30"
          rows="8"
          placeholder=" Detail description"
        ></textarea>
        <button type="submit" className="w-full block text-center p-2 rounded-lg text-white bg-blue-600">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddToy;
