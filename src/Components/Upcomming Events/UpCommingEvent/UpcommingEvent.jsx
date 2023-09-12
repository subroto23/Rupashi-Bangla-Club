import PropTypes from "prop-types";
const UpcommingEvent = ({ upCommingData }) => {
  return (
    <div>
      <h1 className="font-bold">এই মাসের জন্মদিনঃ-</h1>
      {upCommingData.map((data) => (
        <h1
          key={Math.random()}
        >{`${data.birthday} তারিখে ${data.name} এর জন্মদিন`}</h1>
      ))}
    </div>
  );
};

UpcommingEvent.propTypes = {
  upCommingData: PropTypes.array,
};

export default UpcommingEvent;
