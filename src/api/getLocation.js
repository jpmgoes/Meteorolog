/* eslint-disable no-useless-escape */
export async function getLocation(country) {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=91d86012a6104389a11064827998472a`
  );
  return response.json();
}

export function formatLocation(location, char) {
  const regex = /\'\'./g;
  const locationFormat = location.split(" ").join("").replace(regex, "");
  const arrLocation = locationFormat.split("'");
  const secToMin = +arrLocation[1] / 60;
  const secToGrau = secToMin / 60;
  const minToGrau = +arrLocation[0].split("°")[1] / 60;
  const grau = +arrLocation[0].split("°")[0];
  const numGeral = secToGrau + minToGrau + grau;

  const string = location.split("")[location.length - 1];

  const locationNum = string === char ? +numGeral * -1 : +numGeral;
  return locationNum;
}

export function getLocationTrated(values) {
  const latitude = values.latitude;
  const longitude = values.longitude;
  const region = values.region;
  const label = values.label;
  return [latitude, longitude, region, label];
}
