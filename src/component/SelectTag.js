import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Global/GlobalContext";

const SelectTag = () => {
  const {
    songshan,
    xinyi,
    daan,
    zhongshan,
    zhongzheng,
    datong,
    wanhua,
    wenshan,
    nangang,
    neihu,
    shilin,
    beitou,
    handleSelect,
    finishSelectingData,
    selecting,
    selectingData,
  } = useGlobalContext();

  const [selectState, setSelectState] = useState([]);

  const handleSelecting = () => {
    return new Promise((res, rej) => {
      if (!selecting) {
        res();
      }
      rej("Loading...");
    });
  };

  const chgSelectValue = () => {
    if (!selecting) {
      handleSelecting()
        .then(() => selectingData())
        .then(() => handleSelect(JSON.parse(selectState)))
        .then(() => finishSelectingData())
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    //Change global selected state while selected value changed
    chgSelectValue();
  }, [selectState]);

  return (
    <div className="absolute left-[5%] top-[21%] sm:top-20 sm:left-[28%] sm:w-80 w-11/12 flex justify-center items-center ">
      {!selecting && (
        <>
          <p className="text-2xl font-bold">地區</p>
          <select
            className="dropdown-arrow"
            value={selectState}
            onChange={(e) => setSelectState(e.target.value)}
          >
            <option value="" disabled selected hidden>
              松山區--莊敬里
            </option>
            <option value={JSON.stringify(songshan)}>松山區</option>
            <option value={JSON.stringify(xinyi)}>信義區</option>
            <option value={JSON.stringify(daan)}>大安區</option>
            <option value={JSON.stringify(zhongshan)}>中山區</option>
            <option value={JSON.stringify(zhongzheng)}>中正區</option>
            <option value={JSON.stringify(datong)}>大同區</option>
            <option value={JSON.stringify(wanhua)}>萬華區</option>
            <option value={JSON.stringify(wenshan)}>文山區</option>
            <option value={JSON.stringify(nangang)}>南港區</option>
            <option value={JSON.stringify(neihu)}>內湖區</option>
            <option value={JSON.stringify(shilin)}>士林區</option>
            <option value={JSON.stringify(beitou)}>北投區</option>
          </select>
        </>
      )}
    </div>
  );
};

export default SelectTag;
