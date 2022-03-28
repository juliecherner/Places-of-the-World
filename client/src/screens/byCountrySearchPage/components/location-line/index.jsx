const LocationLine = ({ subregion }) => {
  return (
    <div>
      {subregion[0].region} {" > "} {subregion[0].subregion} {" > "}
      {subregion[0].country}
    </div>
  );
};

export default LocationLine;
