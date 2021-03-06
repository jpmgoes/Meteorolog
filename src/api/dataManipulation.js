export function handleWeekData(params) {
  if (!params) return;
  const { daily } = params;

  const arrDataString = [];
  const dataSetDailyTemp = {
    Day: { name: "Temp Day", arr: [], key: "day" },
    Evening: { name: "Temp Evening", arr: [], key: "eve" },
    Max: { name: "Temp Max", arr: [], key: "max" },
    Min: { name: "Temp Min", arr: [], key: "min" },
    Morning: { name: "Temp Morning", arr: [], key: "morn" },
    Night: { name: "Temp Night", arr: [], key: "night" },
  };

  const dataSetDailyTempFeelsLike = {
    Day: { name: "Feels Like Temp Day", arr: [], key: "day" },
    Evening: {
      name: "Feels Like Temp Evening",
      arr: [],
      key: "eve",
    },
    Morning: {
      name: "Feels Like Temp Morning",
      arr: [],
      key: "morn",
    },
    Night: {
      name: "Feels Like Temp Night",
      arr: [],
      key: "night",
    },
  };

  for (const day of daily) {
    const utcTime = day["dt"];
    const date = String(new Date(utcTime * 1000));
    const dayWeek = date.split(" ")[0];
    const dayNum = date.split(" ")[2];
    arrDataString.push(`${dayNum} ${dayWeek}`);

    const temp = day.temp;
    for (const value in dataSetDailyTemp) {
      const key = dataSetDailyTemp[value]["key"];
      dataSetDailyTemp[value]["arr"].push(temp[key]);
    }

    const feelsLike = day["feels_like"];
    for (const value in dataSetDailyTempFeelsLike) {
      const key = dataSetDailyTempFeelsLike[value]["key"];
      dataSetDailyTempFeelsLike[value]["arr"].push(feelsLike[key]);
    }
  }
  return {
    arrDataString,
    dataSetDailyTemp,
    dataSetDailyTempFeelsLike,
  };
}
function randomHex() {
  const hex = ((Math.random() * 0xffffff) << 0).toString(16);
  return `#${hex}`;
}

export function handleDataSet(dataSet) {
  const arrObj = [];

  let count = 0;
  for (const key in dataSet) {
    if (key === "arrDataString") continue;
    for (const dailyKey in dataSet[key]) {
      arrObj.push({});
      arrObj[count].label = dataSet[key][dailyKey]["name"];
      arrObj[count].data = dataSet[key][dailyKey]["arr"];
      arrObj[count].fill = false;
      const color = randomHex();
      arrObj[count].backgroundColor = color;
      arrObj[count].borderColor = color;
      count++;
    }
  }

  return arrObj;
}

export function isDatasetEqual(oldDataset, newDataset) {
  for (const i in oldDataset) {
    const numI = +i;
    const oldObj = oldDataset[numI];
    const newObj = newDataset[numI];
    for (const key in oldObj) {
      if (typeof oldObj[key] !== "string") {
        const length = oldObj[key]?.length;
        if (length > 0) {
          const oldArr = oldObj[key];
          const newArr = newObj[key];
          for (const j in oldArr) {
            const numJ = +j;
            if (oldArr[numJ] === newArr[numJ]) return true;
          }
        }
      }
    }
  }

  return false;
}
