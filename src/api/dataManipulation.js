export function handleWeekData({ daily }) {
  const arrDataString = [];

  const dataSetDailyTempMorning = { name: "Temp Morning", arr: [] };
  const dataSetDailyTempDay = { name: "Temp Day", arr: [] };
  const dataSetDailyTempEvening = { name: "Temp Evening", arr: [] };
  const dataSetDailyTempNight = { name: "Temp Night", arr: [] };
  const dataSetDailyTempMin = { name: "Temp Min", arr: [] };
  const dataSetDailyTempMax = { name: "Temp Max", arr: [] };

  const dataSetDailyFeelsLikeTempDay = { name: "Feels Like Temp Day", arr: [] };
  const dataSetDailyTempFeelsLikeEvening = {
    name: "Feels Like Temp Evening",
    arr: [],
  };
  const dataSetDailyTempFeelsLikeMorning = {
    name: "Feels Like Temp Morning",
    arr: [],
  };
  const dataSetDailyTempFeelsLikeNight = {
    name: "Feels Like Temp Night",
    arr: [],
  };

  for (const day of daily) {
    const utcTime = day["dt"];
    const date = String(new Date(utcTime * 1000));
    const dayWeek = date.split(" ")[0];
    const dayNum = date.split(" ")[2];
    arrDataString.push(`${dayNum} ${dayWeek}`);
    const temp = day.temp;
    dataSetDailyTempMorning["arr"].push(temp["morn"]);
    dataSetDailyTempDay["arr"].push(temp["day"]);
    dataSetDailyTempEvening["arr"].push(temp["eve"]);
    dataSetDailyTempNight["arr"].push(temp["night"]);
    dataSetDailyTempMin["arr"].push(temp["min"]);
    dataSetDailyTempMax["arr"].push(temp["max"]);
    const feelsLike = day["feels_like"];
    dataSetDailyFeelsLikeTempDay["arr"].push(feelsLike["day"]);
    dataSetDailyTempFeelsLikeEvening["arr"].push(feelsLike["eve"]);
    dataSetDailyTempFeelsLikeMorning["arr"].push(feelsLike["morn"]);
    dataSetDailyTempFeelsLikeNight["arr"].push(feelsLike["night"]);
  }
  return {
    arrDataString,
    dataSetDailyTempMorning,
    dataSetDailyTempDay,
    dataSetDailyTempEvening,
    dataSetDailyTempNight,
    dataSetDailyTempMin,
    dataSetDailyTempMax,
    dataSetDailyFeelsLikeTempDay,
    dataSetDailyTempFeelsLikeEvening,
    dataSetDailyTempFeelsLikeMorning,
    dataSetDailyTempFeelsLikeNight,
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
    arrObj.push({});
    arrObj[count].label = dataSet[key]["name"];
    arrObj[count].data = dataSet[key]["arr"];
    arrObj[count].fill = false;
    const color = randomHex();
    arrObj[count].backgroundColor = color;
    arrObj[count].borderColor = color;
    count++;
  }
  return arrObj;
}

export function isDataserEqual(oldDataset, newDataset) {
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
