import { Row, Col } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";

const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeaturedPromotion(),
    selectFeaturedPartner(),
  ];
  return (
    <Row>
      {items.map(
        (item, idx) =>
          item && (
            <Col className="m-1" md key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
      )}
    </Row>
  );
};

export default DisplayList;
