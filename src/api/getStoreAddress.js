const getStoreAddress = async ({ latitude, longitude }) => {
  //   console.log("API Key--->", process.env.REACT_LOCATION_API_);

  const result = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=a63e12c8d5544c32ac659abbe7305a61&q=${latitude}+${longitude}&pretty=1&no_annotations=1`
  );

  const response = await result.json();

  return response;
};

export { getStoreAddress };
