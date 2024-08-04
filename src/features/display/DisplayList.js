import { Row, Col } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);
  console.log('display items:', items);
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
