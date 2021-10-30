import React from "react";
import ScrollToTop from "../utils/ScrollToTop";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <ScrollToTop />
      <div className="w-32 h-32 border-t-4 border-b-4 border-gray-50 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
