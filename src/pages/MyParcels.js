import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useAppContext } from "../contexts/AppProvider";
import ScrollToTop from "../utils/ScrollToTop";

const MyParcels = () => {
  const { user } = useAppContext();
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyParcels = async () => {
    const response = await fetch(
      `https://polar-fjord-39630.herokuapp.com/myParcels/${user?.email}`
    );
    const data = await response.json();
    setParcels(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyParcels();
    // eslint-disable-next-line
  }, [user.email]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ScrollToTop />
      {parcels.length}
      {parcels.map((item) => (
        <li>{item.sender_name}</li>
      ))}
    </div>
  );
};

export default MyParcels;
