import PropTypes from "prop-types";
const TodayEvent = ({ villeger }) => {
  return (
    <div>
      {villeger.villeger.isAlive ? (
        <h1>{`আজ ${villeger.villeger.name} এর জন্মদিন`}</h1>
      ) : (
        <h1>{`আজ ${villeger.villeger.name} এর মৃত্যু বার্ষিকী`}</h1>
      )}
    </div>
  );
};
TodayEvent.propTypes = {
  villeger: PropTypes.object.isRequired,
};
export default TodayEvent;
