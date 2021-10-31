import React from "react";
import { useParcelContext } from "../contexts/ParcelProvider";
import ScrollToTop from "../utils/ScrollToTop";
import EmptyParcelList from "./EmptyParcelList";
import Loading from "./Loading";
import SingleParcelList from "./SingleParcelList";

const AllParcelList = () => {
  const {
    isLoading,
    allParcelList: parcelList,
    handleParcelDelete,
  } = useParcelContext();
  // const [control, setControl] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [parcelList, setParcelList] = useState([]);
  // const getList = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://polar-fjord-39630.herokuapp.com/parcels"
  //     );
  //     const data = await response.json();
  //     setParcelList(data);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getList();
  //   // eslint-disable-next-line
  // }, [control]);

  // const handleParcelDelete = (id) => {
  //   const confirmation = window.confirm("Are you sure you want to delete?");
  //   if (confirmation) {
  //     setIsLoading(true);
  //     fetch(`https://polar-fjord-39630.herokuapp.com/deleteParcel/${id}`, {
  //       method: "DELETE",
  //       headers: { "content-type": "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount) {
  //           setControl(!control);
  //           setIsLoading(false)
  //         } else {
  //           setControl(false);
  //         }
  //       });
  //   } else return;
  // };

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

export default AllParcelList;
