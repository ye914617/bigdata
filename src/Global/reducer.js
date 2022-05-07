const reducer = (state, action) => {
  switch (action.type) {
    case "TAIPEI_DATA":
      const taipeiData = action.payload.responseData.filter((item) => {
        const site = item.site_id;
        if (site.includes("臺北")) {
          return item;
        }
      });
      return {
        ...state,
        taipeiData: taipeiData,
      };
    case "SEPARATE_DISTRICT":
      const sshan = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("松山")) {
          return item;
        }
      });

      const xyi = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("信義")) {
          return item;
        }
      });

      const dan = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("大安")) {
          return item;
        }
      });

      const zshan = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("中山")) {
          return item;
        }
      });

      const zzheng = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("中正")) {
          return item;
        }
      });
      const dtong = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("大同")) {
          return item;
        }
      });
      const whua = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("萬華")) {
          return item;
        }
      });
      const wshan = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("文山")) {
          return item;
        }
      });
      const ngang = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("南港")) {
          return item;
        }
      });
      const nhu = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("內湖")) {
          return item;
        }
      });
      const slin = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("士林")) {
          return item;
        }
      });
      const btou = action.payload.filter((item) => {
        const site = item.site_id;
        if (site.includes("北投")) {
          return item;
        }
      });
      return {
        ...state,
        combinedData: [
          sshan,
          xyi,
          dan,
          zshan,
          zzheng,
          dtong,
          whua,
          wshan,
          ngang,
          nhu,
          slin,
          btou,
        ],
        songshan: sshan,
        xinyi: xyi,
        daan: dan,
        zhongshan: zshan,
        zhongzheng: zzheng,
        datong: dtong,
        wanhua: whua,
        wenshan: wshan,
        nangang: ngang,
        neihu: nhu,
        shilin: slin,
        beitou: btou,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_NOT_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "DATA_PROCESSING":
      return {
        ...state,
        dataProcessing: true,
      };

    case "DATA_NOT_PROCESSING":
      return {
        ...state,
        dataProcessing: false,
      };

    case "SELECTING_DATA":
      return {
        ...state,
        selecting: true,
      };

    case "NOT_SELECTING_DATA":
      return {
        ...state,
        selecting: false,
      };

    case "HANDLE_SELECT":
      return {
        ...state,
        selectedData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
