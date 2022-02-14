import "./Body.css";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const Body = () => {
  return (
    <div className="bodySection">
      <div className="content">
        <BodyLeft className="itemsLeft"></BodyLeft>
        <BodyRight className="itemsRight"> </BodyRight>
      </div>
    </div>
  );
};

export default Body;
