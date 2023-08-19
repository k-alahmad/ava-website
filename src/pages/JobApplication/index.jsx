import React, { useEffect } from "react";
import GradientText from "../../components/UI/GradientText";
import JobForm from "./components/Job/JobForm";
import Header from "./components/Header";
import JobInfo from "./components/Job/JobInfo";
const JobApplicationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center w-full xl:w-[1270px] my-12 max-xl:px-4">
        <JobInfo />
        <JobForm />
      </div>
    </div>
  );
};

export default JobApplicationPage;
