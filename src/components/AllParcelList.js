import React from "react";
import useFetch from "../hooks/useFetch";
import ScrollToTop from "../utils/ScrollToTop";
import EmptyParcelList from "./EmptyParcelList";
import Loading from "./Loading";
import SingleParcelList from "./SingleParcelList";

const AllParcelList = () => {
  const { isLoading, list: parcelList } = useFetch(
    "https://polar-fjord-39630.herokuapp.com/parcels"
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-8">
      <ScrollToTop />
      {parcelList.length === 0 && <EmptyParcelList />}
      <ul className="divide-y bg-smalt-50 divide-smalt-200 rounded-md overflow-hidden">
        {parcelList
          .slice()
          .reverse()
          .map((parcel) => (
            <SingleParcelList key={parcel._id} parcel={parcel} />
          ))}
      </ul>
    </div>
  );
};

export default AllParcelList;
