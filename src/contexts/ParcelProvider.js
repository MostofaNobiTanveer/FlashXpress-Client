import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "./AppProvider";

const ParcelContext = createContext();
export const ParcelProvider = ({ children }) => {
  const { user } = useAppContext();
  const [control, setControl] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [allParcelList, setAllParcelList] = useState([]);
  const [myParcelList, setMyParcelList] = useState([]);
  const getAllList = async () => {
    try {
      const response = await fetch(
        "https://polar-fjord-39630.herokuapp.com/parcels"
      );
      const data = await response.json();
      setAllParcelList(data);
    } finally {
      setIsLoading(false);
    }
  };
  const getMyList = async () => {
    try {
      const response = await fetch(
        `https://polar-fjord-39630.herokuapp.com/myParcels/${user?.email}`
      );
      const data = await response.json();
      setMyParcelList(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllList();
    getMyList();
    // eslint-disable-next-line
  }, [control, allParcelList]);

  const handleParcelDelete = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      setIsLoading(true);
      fetch(`https://polar-fjord-39630.herokuapp.com/deleteParcel/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast("Parcel Deleted Successfully!");
            setControl(!control);
            setIsLoading(false);
          } else {
            setControl(false);
          }
        });
    } else return;
  };
  return (
    <ParcelContext.Provider
      value={{ handleParcelDelete, isLoading, allParcelList, myParcelList }}
    >
      {children}
    </ParcelContext.Provider>
  );
};

export const useParcelContext = () => useContext(ParcelContext);
