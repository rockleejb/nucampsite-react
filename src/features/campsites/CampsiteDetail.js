import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
  const { id, name, image, description } = campsite;
  return (
    <Col md="5" className="m-1" key={id}>
      <Card>
        <CardImg src={image} alt={name} />
      </Card>
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
    </Col>
  );
};

export default CampsiteDetail;
