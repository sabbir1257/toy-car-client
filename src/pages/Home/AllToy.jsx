import React, { useEffect, useState } from "react";
import Tabile from "../../components/Tabile";

const AllToy = () => {
  const [toysInfo, setToysInfo] = useState([]);

  useEffect(() => {
    fetch("https://colleccon-mart.vercel.app/all-toy")
      .then((res) => res.json())
      .then((data) => setToysInfo(data));
  }, []);

  const search = (e) => { 
    e.preventDefault()
    fetch(`https://colleccon-mart.vercel.app/search/${e.target.search.value}`)
    .then((res) => res.json())
    .then((data) => setToysInfo(data));
  }

  return (
    <div className="my-12 md:w-[1250px] mx-auto">
      <h1 className="my-8 text-center text-3xl font-bold text-blue-600 underline">
        All Toy
      </h1>

      <form onSubmit={search} className="my-8">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input name="search"
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" class="px-6 py-3">
                Seller
              </th>
              <th scope="col" class="px-6 py-3">
                Sub-category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Available Quantity
              </th>

              <th scope="col" class="px-6 py-3">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {toysInfo.map((toy) => (
              <Tabile key={toy._id} toy={toy}></Tabile>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
