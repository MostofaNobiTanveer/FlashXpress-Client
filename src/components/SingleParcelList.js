import React, { useState } from "react";
// import useDelete from "../hooks/useDelete";
import ParcelDetailsPopup from "./ParcelDetailsPopup";

const SingleParcelList = ({ parcel, handleParcelDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    _id,
    sender_name,
    sender_email,
    sender_district,
    recipient_name,
    recipient_email,
    recipient_district,
    status,
  } = parcel;

  const handleModalOpen = (status) => {
    setModalIsOpen(status);
  };

  // const { control } = useDelete();
  // const handleParcelDelete = (id) => {
  // fetch(`https://polar-fjord-39630.herokuapp.com/deleteParcel/${id}`, {
  //   method: "DELETE",
  //   headers: { "content-type": "application/json" },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.deletedCount) {
  //       alert("deleted");
  //     } else {
  //     }
  //   });
  // };

  return (
    <li className="hover:bg-white">
      {modalIsOpen && (
        <ParcelDetailsPopup parcel={parcel} handleModalOpen={handleModalOpen} />
      )}
      <div className="px-4 py-4 sm:px-6 hover:bg-bgBlack">
        <div className="flex items-center justify-between">
          {/* recipient */}
          <div>
            <div className="flex flex-col gap-0.5 text-sm">
              <p className="text-smalt-500 font-medium">{recipient_name}</p>
              <p className="text-xs text-gray-600">{recipient_email}</p>
              <p className="text-xs text-smalt-800 font-medium">
                {recipient_district}
              </p>
            </div>
          </div>

          {/* sender */}
          <div className="hidden sm:block">
            <div className="flex flex-col gap-0.5 text-sm">
              <p className="text-smalt-500 font-medium">{sender_name}</p>
              <p className="text-xs text-gray-600">{sender_email}</p>
              <p className="text-xs text-smalt-800 font-medium">
                {sender_district}
              </p>
            </div>
          </div>

          {/* action buttons */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleModalOpen(true)}
                className="inline-flex text-xs leading-5 font-semibold text-smalt-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
              <button className="inline-flex text-xs leading-5 font-semibold text-smalt-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleParcelDelete(_id)}
                className="inline-flex text-xs leading-5 font-semibold text-smalt-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            <div>
              <span className="uppercase inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-smalt-500 text-white">
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleParcelList;
