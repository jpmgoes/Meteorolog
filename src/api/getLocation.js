export async function getLocation(country) {
  const response = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=3d3768cc35f0cd7476f71a572e7f60ca&query=${country}`
  );
  return response.json();
}
export function getLocationTrated(values) {
  const latitude = values.latitude;
  const longitude = values.longitude;
  const region = values.region;
  const label = values.label;
  return [latitude, longitude, region, label];
}
