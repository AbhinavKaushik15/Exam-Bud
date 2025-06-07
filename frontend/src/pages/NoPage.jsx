import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#C6D5FF] flex-col md:flex md:flex-row items-center justify-center text-[#142D6F] px-10 py-5">
      <div className="left h-1/2 w-full md:w-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-[10vh] md:text-[21vh] font-[Arial] font-[900]">
          404
        </h1>
        <h3 className="text-[5vh] md:text-[9vh] font-[500] md:-mt-[3vw] md:-mb-[1vw] tracking-tight whitespace-nowrap">
          PAGE NOT FOUND
        </h3>
        <p className="text-[1.8vh] md:text-[3.2vh] font-[600] tracking-tight">
          The page you are looking for dosen't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#142D6F] hover:bg-[#C6D5FF] text-[#C6D5FF] hover:text-[#142D6F] border-[1.5px] hover:border-[#142D6F] rounded-[1.2vw] mt-2 md:mt-[1.5vw] px-5 md:px-[3vw] text-[2vh] md:text-[4vh] py-1 md:py-[.3vw] tracking-tight"
        >
          Back to Home
        </button>
      </div>

      <div className="right w-full h-1/2 md:w-[80vh] flex items-center justify-center lg:justify-start">
        <img className="w-[65vh] md:w-[100vh]" src="image/nopage.png" alt="" />
      </div>
    </div>
  );
};

export default NoPage;
