import React, { useState } from "react";
import AllParcelList from "../components/AllParcelList";
import { useAppContext } from "../contexts/AppProvider";
import useFetch from "../hooks/useFetch";
import ScrollToTop from "../utils/ScrollToTop";
import MyParcels from "./MyParcels";

const Parcels = () => {
  const [parcelOf, setParcelOf] = useState("all");
  const { user } = useAppContext();
  const { list: parcels } = useFetch(
    `https://polar-fjord-39630.herokuapp.com/myParcels/${user?.email}`
  );
  const { list: parcelList } = useFetch(
    "https://polar-fjord-39630.herokuapp.com/parcels"
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 lg:py-10 flex-1">
      <ScrollToTop />
      <div className="block">
        <div className="border-b border-smalt-400">
          <h3 className="text-2xl leading-6 font-medium text-white">Parcels</h3>
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setParcelOf("all")}
              className={
                parcelOf === "all"
                  ? "text-white border-white whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                  : "border-transparent text-smalt-200 hover:text-white hover:border-smalt-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
              }
            >
              All Parcel
              <span className="bg-gray-100 text-gray-900 ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium inline-block">
                {parcelList.length}
              </span>
            </button>

            <button
              onClick={() => setParcelOf("myParcel")}
              className={
                parcelOf === "myParcel"
                  ? "text-white border-white whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                  : "border-transparent text-smalt-200 hover:text-white hover:border-smalt-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
              }
            >
              My Parcels
              <span className="bg-indigo-100 text-indigo-600 ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium inline-block">
                {parcels.length}
              </span>
            </button>
          </nav>
        </div>
        {parcelOf === "all" ? <AllParcelList /> : <MyParcels />}
      </div>
    </div>
  );
};

export default Parcels;
