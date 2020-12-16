import { Button, Card, Col, Row } from "react-bootstrap";

const FBShare = () => {
  return (
    <Row>
      <Col
        sm={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <br />
        <Card>
          <Card.Header>Thank You</Card.Header>
          <Card.Body>
            <Card.Title>Share on Facebook</Card.Title>
            <Card.Text>
              Message.
            </Card.Text>
            <Button variant="primary">FB Share</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FBShare;
