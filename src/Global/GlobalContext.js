import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  taipeiData: [],
  loading: true,
  dataProcessing: true,
  selecting: true,
  combinedData: [],
  selectedData: [
    {
      statistic_yyy: "109",
      district_code: "63000010002",
      site_id: "臺北市松山區",
      village: "莊敬里",
      household_ordinary_total: "1349",
      household_business_total: "0",
      household_single_total: "702",
      household_ordinary_m: "2227",
      household_business_m: "0",
      household_single_m: "337",
      household_ordinary_f: "2355",
      household_business_f: "0",
      household_single_f: "365",
    },
  ],
  songshan: [],
  xinyi: [],
  daan: [],
  zhongshan: [],
  zhongzheng: [],
  datong: [],
  wanhua: [],
  wenshan: [],
  nangang: [],
  neihu: [],
  shilin: [],
  beitou: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const forTaipeiData = (fulldata) => {
    dispatch({ type: "TAIPEI_DATA", payload: fulldata });
  };

  const separateDistrict = (taipeiData) => {
    dispatch({ type: "SEPARATE_DISTRICT", payload: taipeiData });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const setNotLoading = () => {
    dispatch({ type: "SET_NOT_LOADING" });
  };

  const loadingData = () => {
    dispatch({ type: "DATA_PROCESSING" });
  };

  const finishLoadingData = () => {
    dispatch({ type: "DATA_NOT_PROCESSING" });
  };

  const selectingData = () => {
    dispatch({ type: "SELECTING_DATA" });
  };

  const finishSelectingData = () => {
    dispatch({ type: "NOT_SELECTING_DATA" });
  };

  const handleSelect = (select) => {
    dispatch({ type: "HANDLE_SELECT", payload: select });
  };

  const getData = async () => {
    const res = await fetch(
      "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109"
    );
    const data = await res.json();
    forTaipeiData(data); //Remain only taipei data
    setNotLoading();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        separateDistrict,
        loadingData,
        finishLoadingData,
        handleSelect,
        finishSelectingData,
        selectingData,
        setNotLoading,
        setLoading,
        forTaipeiData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
