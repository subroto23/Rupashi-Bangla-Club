import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>I am Home Component</h1>
      <Outlet />
    </div>
  );
};

export default About;
