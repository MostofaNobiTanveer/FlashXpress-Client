import React from "react";
import EmptyParcelList from "../components/EmptyParcelList";
import Loading from "../components/Loading";
import SingleParcelList from "../components/SingleParcelList";
import { useAppContext } from "../contexts/AppProvider";
import useFetch from "../hooks/useFetch";
import ScrollToTop from "../utils/ScrollToTop";

const MyParcels = () => {
  const { user } = useAppContext();
  const { isLoading, list: myParcels } = useFetch(
    `https://polar-fjord-39630.herokuapp.com/myParcels/${user?.email}`
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-8">
      <ScrollToTop />
      {myParcels.length === 0 && <EmptyParcelList />}
      <ul className="divide-y bg-smalt-50 divide-smalt-200 rounded-md overflow-hidden">
        {myParcels
          .slice()
          .reverse()
          .map((parcel) => (
            <SingleParcelList key={parcel._id} parcel={parcel} />
          ))}
      </ul>
    </div>
  );
};

export default MyParcels;
