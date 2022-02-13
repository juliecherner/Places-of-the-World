const LocationLine = ({ subregion }) => {
  return (
    <div>
      <div>
        {subregion[0].region} {" > "} {subregion[0].subregion} {" > "}
        {subregion[0].country}
      </div>
    </div>
  );
};

export default LocationLine;
