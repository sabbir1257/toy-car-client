import React, { useEffect, useState } from "react";
import Tabile from "../../components/Tabile";
import { useAuth } from "../../Providers/AuthProviders";

const MyToy = () => {
  const { user } = useAuth();

  const [toysInfo, setToysInfo] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    fetch(`https://colleccon-mart.vercel.app/services?sort=${asc ? 'asc' : 'desc'}&email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToysInfo(data));
  }, [asc]);

  return (
    <div className="my-12 md:w-[1250px] mx-auto">
      <h1 className="my-8 text-center text-3xl font-bold text-blue-600 underline">
        My Toy
      </h1>
      <button
        onClick={() => setAsc(!asc)}
        type="button"
        className="text-white mb-9 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {asc ? "Price: High to Low" : "Price: Low To High"}
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-3">
                Seller
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Available Quantity
              </th>

              <th scope="col" className="px-6 py-3">
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

export default MyToy;
