import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Global/GlobalContext";
import BarChart from "./component/BarChart";
import SelectTag from "./component/SelectTag";
import { Chart as ChartJS } from "chart.js/auto";
import Header from "./component/Header";
import BarChartM from "./component/BarChartM";

function App() {
  const {
    separateDistrict,
    loading,
    taipeiData,
    finishLoadingData,
    finishSelectingData,
    selecting,
  } = useGlobalContext();

  const handleData = () => {
    return new Promise((res, rej) => {
      if (!loading) {
        res();
      }
      rej("Loading...");
    });
  };

  useEffect(() => {
    if (loading) return;
    if (!loading) {
      handleData()
        .then(() => separateDistrict(taipeiData)) //Separate taipei data according to district
        .then(() => finishLoadingData())
        .then(() => finishSelectingData()) //To show the select and barchart
        .catch((err) => console.log(err));
    }
  }, [loading]);

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="h-screen flex sm:flex-row justify-between flex-col ">
      <div className="sm:min-w-[25%] mt-2 min-h-[27%]">
        <Header />
      </div>

      <SelectTag />
      <div className="sm:min-w-[75%] bg-gray-100 min-h-[73%]">
        {!selecting && (!isMobile ? <BarChart /> : <BarChartM />)}
      </div>
    </div>
  );
}

export default App;
