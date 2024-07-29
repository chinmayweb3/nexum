import React from "react";
import UploadButton from "./uploadButton";

const Dashboard = () => {
  return (
    <div className="container mt-[60px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[64px] font-bold text-primary">My Files</h1>
        <UploadButton />
      </div>
    </div>
  );
};

export default Dashboard;
