import { Row, Col } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import DisplayCard from "./DisplayCard";

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];
  return (
    <Row>
      {items.map((item, idx) => (
        <Col className="m-1" md key={idx}>
          <DisplayCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default DisplayList;
