import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ScrollToTop from "../utils/ScrollToTop";

const Parcels = () => {
  const [parcelList, setParcelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getParcelList = async () => {
    const response = await fetch(
      "https://polar-fjord-39630.herokuapp.com/parcels"
    );
    const data = await response.json();
    setParcelList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getParcelList();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ScrollToTop />
      {parcelList.map((parcel) => {
        return (
          <ul>
            <li>{parcel._id}</li>
            <li>{parcel.sender_name}</li>
            <li>{parcel.status}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Parcels;
