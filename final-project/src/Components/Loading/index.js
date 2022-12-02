import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = ({ loading }) => {
  return (
    <ClipLoader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      color="#d81111"
      loading={loading}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
