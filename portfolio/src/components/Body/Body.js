import "./Body.css";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const Body = () => {
  return (
    <div className="bodySection">
      <BodyLeft></BodyLeft>
      <BodyRight></BodyRight>
    </div>
  );
};

export default Body;
