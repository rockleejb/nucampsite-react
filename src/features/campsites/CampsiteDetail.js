import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
  const { id, name, image, elevation, featured, description } = campsite;
  console.log(image);
  return (
    <Col md="12" className="m-4" key={id}>
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
