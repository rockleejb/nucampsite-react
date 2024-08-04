import { selectAllCampsites } from "./campsitesSlice";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const CampsitesList = ({ setCampsiteId }) => {
  const campsites = useSelector(selectAllCampsites);
  console.log("campsites:", campsites);
  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => (
        <Col
          md="5"
          className="m-4"
          key={campsite.id}
        >
          <CampsiteCard campsite={campsite} />
        </Col>
      ))}
    </Row>
  );
};

export default CampsitesList;
