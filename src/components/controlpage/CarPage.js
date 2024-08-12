import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as carPageActions from "../../redux/actions/carPageActions";
import { bindActionCreators } from 'redux';
import { Card, CardBody, CardText, CardTitle, CardImg, CardGroup,Button } from 'reactstrap';

class CarPage extends Component {




    removeFromCarPage(car) {
        this.props.actions.removeFromCarPage(car);
    }

    render() {
      
        




        return (
            <div>
                <h2>My Cars</h2>
                
                    <CardGroup className="card-group">
                        {this.props.carPage.map(pageItem => (
                            <Card key={pageItem.car.id} className="card">
                                <CardImg
                                    alt="Card image cap"
                                    src={pageItem.car.img}
                                    top
                                    width="100%"
                                />
                                <CardBody className="card-body">
                                    <CardTitle tag="h5">
                                        {pageItem.car.carName}
                                    </CardTitle>
                                    <CardText>
                                        Total Price: ₺{pageItem.car.price}
                                    </CardText>
                                    
                                </CardBody>
                                <Button color="danger" onClick={() => this.removeFromCarPage(pageItem.car)}>
                                        Delete
                                    </Button>
                                
                            </Card>
                        ))}
                        
                    </CardGroup>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carPage: state.carPageReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCarPage: bindActionCreators(carPageActions.removeFromCarPage, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarPage);
