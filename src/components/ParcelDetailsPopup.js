import React from "react";

const ParcelDetailsPopup = ({ handleModalOpen, parcel }) => {
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
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <h1 className="text-base font-medium">
                        Your Parcel is on{" "}
                        <span className="uppercase ml-4 inline-flex items-center px-4 py-2 rounded-md text-xs font-medium bg-smalt-500 text-white">
                          {status}
                        </span>
                      </h1>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {/* buttons */}
          {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Deactivate
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ParcelDetailsPopup;
