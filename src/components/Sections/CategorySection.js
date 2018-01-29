import React from 'react';

import 'whatwg-fetch';
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
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('http://localhost:8888/api/classifiers/', {method: 'GET'}).then((response) => {
        if (response.status === 200) {
          response.json().then(
            (json) => {this.setState({data: json})})}})
  }

  render() {
    const classifiers = this.state.data.map((item, i) => {
      return (
        <Col md={4} key={i}>
          <Card>
            <CardBody>
              <CardText>{item.title}</CardText>
              <Button>Subscribe</Button>
            </CardBody>
          </Card>
        </Col>
      )
    });
    return (
      <Row>
        {classifiers}
      </Row>
    );
  }
}

export default CategotySection;
