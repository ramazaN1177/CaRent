import React, { Component } from 'react'
import { Row,Col } from 'reactstrap'
import CategoryList from "../categories/CategoryList"

import CarsList from '../cars/CarsList'


export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col xs="3">
                <CategoryList></CategoryList>
            </Col>
            <Col xs="9">
             <CarsList></CarsList>
            </Col>
        </Row>
      </div>
    )
  }
}