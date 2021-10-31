import React from "react";
import EmptyParcelList from "../components/EmptyParcelList";
import Loading from "../components/Loading";
import SingleParcelList from "../components/SingleParcelList";
import { useParcelContext } from "../contexts/ParcelProvider";
import ScrollToTop from "../utils/ScrollToTop";

const MyParcels = () => {
  const {
    isLoading,
    handleParcelDelete,
    myParcelList: parcelList,
  } = useParcelContext();

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
            <SingleParcelList
              handleParcelDelete={handleParcelDelete}
              key={parcel._id}
              parcel={parcel}
            />
          ))}
      </ul>
    </div>
  );
};

export default MyParcels;
