import React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from 'reactstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class CategotySection extends React.Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <Card>
            <CardBody>
              <CardText>CardText</CardText>
              <Button>Subscribe</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <CardText>CardText</CardText>
              <Button>Subscribe</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <CardText>CardText</CardText>
              <Button>Subscribe</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CategotySection;
