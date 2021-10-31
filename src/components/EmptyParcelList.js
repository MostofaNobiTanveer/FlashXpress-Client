import React from 'react'
import { Link } from 'react-router-dom';

const EmptyParcelList = () => {
    return (
      <Link
        to="/create-parcel"
        className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none"
      >
        <svg
          className="mx-auto h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <span className="mt-2 block text-sm font-medium text-white">
          <h3 className="mt-2 text-sm font-medium">No Parcels</h3>
          <p className="mt-1 text-sm">Get started by creating a new parcel.</p>
        </span>
      </Link>
    );
}

export default EmptyParcelList
