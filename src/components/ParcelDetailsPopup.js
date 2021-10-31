import React, { useState } from "react";
import Loading from "./Loading";

const ParcelDetailsPopup = ({ handleModalOpen, parcel }) => {
  const [parcelStatus, setParcelStatus] = useState({ status: "" });
  const [loading, setLoading] = useState(false);
  const {
    _id,
    sender_name,
    sender_email,
    sender_mobile,
    sender_district,
    sender_address,
    recipient_name,
    recipient_email,
    recipient_mobile,
    recipient_district,
    recipient_address,
    parcel_type,
    parcel_count,
    parcel_type_suit,
    parcel_weight,
    parcel_contains,
    status,
    total_payable,
  } = parcel;

  const handleSubmit = (e, id) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://polar-fjord-39630.herokuapp.com/updateParcel/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parcelStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLoading(false);
        }
      });
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto no-scrollbar max-w-5xl w-full mx-auto">
      <div className="min-h-screen pt-4 px-2 sm:px-4 pb-10 ">
        <div
          onClick={() => handleModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        {/* <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span> */}

        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl">
          <div className="relative">
            <div className="block absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={() => handleModalOpen(false)}
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* content */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Parcel Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 truncate">
                  Parcel id: {_id}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-smalt-500">
                      Sender Information
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <p>{sender_name}</p>
                      <p>{sender_email}</p>
                      <p>{sender_mobile}</p>
                      <p>{sender_address}</p>
                      <p>{sender_district}</p>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-smalt-500">
                      Recipient Information
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <p>{recipient_name}</p>
                      <p>{recipient_email}</p>
                      <p>{recipient_mobile}</p>
                      <p>{recipient_address}</p>
                      <p>{recipient_district}</p>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-smalt-500">
                      Parcel Information
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <p>
                        <span className="font-medium mr-1">Sending:</span>{" "}
                        {parcel_type}
                      </p>
                      <p>
                        <span className="font-medium mr-1">Count:</span>{" "}
                        {parcel_count}
                      </p>
                      <p className="capitalize">
                        <span className="font-medium mr-1">
                          Fragile/Liquid:
                        </span>{" "}
                        {parcel_type_suit}
                      </p>
                      <p>
                        <span className="font-medium mr-1">Parcel Weight:</span>{" "}
                        {parcel_weight}Kg
                      </p>
                      <p>
                        <span className="font-medium mr-1">
                          Parcel Contains:
                        </span>{" "}
                        {parcel_contains}
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-smalt-500">
                      Total Payable
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <h1 className="text-base font-medium">{total_payable}</h1>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base font-medium text-smalt-500">
                      Current Status
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col gap-2 items-start justify-between">
                      <span className="uppercase inline-flex items-center px-4 py-2 rounded-md text-xs font-medium bg-smalt-500 text-white">
                        {status}
                      </span>
                      {loading ? (
                        <div className="flex items-center mt-1 justify-center">
                          <div className="w-8 h-8 border-t-4 border-b-4 border-smalt-600 rounded-full animate-spin"></div>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => handleSubmit(e, _id)}
                          className="flex-1 w-full flex gap-4 items-center justify-between"
                        >
                          <select
                            required
                            id="parcel_status"
                            value={parcelStatus.status}
                            onChange={(e) =>
                              setParcelStatus({ status: e.target.value })
                            }
                            name="parcel_status"
                            className="bg-gray-50 flex-1 text-sm text-smalt-900 py-2 block px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="">Select Status</option>
                            <option value="picked">Picked</option>
                            <option value="processing">Processing</option>
                            <option value="completed">Completed</option>
                            <option value="cancles">Cancled</option>
                          </select>
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-smalt-500 text-xm font-normal text-white hover:bg-smalt-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smalt-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Update Status
                          </button>
                        </form>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetailsPopup;
