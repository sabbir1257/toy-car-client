import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useAuth } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Tabss = () => {
  const { user } = useAuth();
  const [tabIndex, setTabIndex] = useState(2);
  const [tabSub, setTabSub] = useState("Trucks");
  const [tabs, setTabs] = useState([]);

  const handleSubCategory = (sub) => {
    setTabSub(sub);
  };

  useEffect(() => {
    fetch(`https://colleccon-mart.vercel.app/sub-category?category=${tabSub}`)
      .then((res) => res.json())
      .then((data) => setTabs(data));
  }, [tabSub]);

  const handelTost = () => {
    if (!user) {
      toast.error("You Have To Login First To View Details");
    }
  };

  console.log(tabs)

  return (
    <Tabs
      className="max-w-[1240px] mx-auto text-center "
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <h1 className="text-2xl font-black my-8 border-2 border-[bl] w-72 mx-auto p-3 rounded-md">
    Category
      </h1>
      <TabList>
        <Tab onClick={() => handleSubCategory("Sports-Cars")}>
          <span className="font-bold">Sports Car</span>
        </Tab>
        <Tab onClick={() => handleSubCategory("Trucks")}>
          <span className="font-bold">Truck</span>
        </Tab>
        <Tab onClick={() => handleSubCategory("Regular-Cars")}>
          <span className="font-bold">Regular Car</span>
        </Tab>
      </TabList>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4 ">
          {tabs?.subCategories && tabs?.subCategories.map((sports) => (
            <>
              <div key={sports._id} className="border rounded-md shadow">
                <img
                  className="md:w-full h-80 w-full rounded-md border p-5"
                  src={sports.photo_url}
                  alt=""
                />
                <div className="text-center px-6">
                  <h1 className="text-xl mt-6">
                    Name: <span className="font-semibold">{sports.name}</span>
                  </h1>
                  <p className="my-2">
                    Price: <span className="font-semibold">{sports.price}</span>
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="font-semibold">{sports.rating}</span>
                  </p>
                  <button
                    onClick={handelTost}
                    className="border-2 border-blue-600 my-4 mb-6  px-6 py-3 rounded"
                  >
                    <Link to={`/toy/${sports._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4">
          {tabs?.subCategories && tabs?.subCategories.map((trucks) => (
            <>
              <div key={trucks._id} className="border rounded-md shadow">
                <img
                  className="md:w-full h-80 w-full rounded-md border p-5"
                  src={trucks.photo_url}
                  alt=""
                />
                <div className="text-center px-6">
                  <h1 className="text-xl mt-6">
                    Name: <span className="font-semibold">{trucks.name}</span>
                  </h1>
                  <p className="my-2">
                    Price: <span className="font-semibold">{trucks.price}</span>
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="font-semibold">{trucks.rating}</span>
                  </p>
                  <button
                    onClick={handelTost}
                    className="border-2 border-blue-600 my-4 mb-6  px-6 py-3 rounded"
                  >
                    <Link to={`/toy/${trucks._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4">
          {tabs?.subCategories && tabs?.subCategories.map((regular) => (
            <>
              <div key={regular._id} className="border rounded-md shadow">
                <img
                  className="md:w-full h-80 w-full rounded-md border p-5"
                  src={regular.photo_url}
                  alt=""
                />
                <div className="text-center px-6">
                  <h1 className="text-xl mt-6">
                    Name: <span className="font-semibold">{regular.name}</span>
                  </h1>
                  <p className="my-2">
                    Price:{" "}
                    <span className="font-semibold">{regular.price}</span>
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="font-semibold">{regular.rating}</span>
                  </p>
                  <button
                    onClick={handelTost}
                    className="border-2 border-blue-600 my-4 mb-6  px-6 py-3 rounded"
                  >
                    <Link to={`/toy/${regular._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Tabss;
