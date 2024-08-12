import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardImg,
    CardGroup,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button
} from 'reactstrap';
import './CarsList.css'; // Import the CSS file for styling
import { bindActionCreators } from 'redux';
import * as carsActions from "../../redux/actions/carsActions";
import { connect } from 'react-redux';
import * as carPageAction from "../../redux/actions/carPageActions";

class CarsList extends Component {
    componentDidMount() {
        this.props.actions.getCars();
    }

    addToCarPage = (car) => {
        this.props.actions.addToCarPage({ car });
    }

    chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    }

    render() {
        const { cars } = this.props;
        const chunkedCars = this.chunkArray(cars, 4);
        const options = Array.from({ length: 10 }, (_, i) => i + 1);

        return (
            <div>
                {chunkedCars.map((carChunk, index) => (
                    <CardGroup key={index} className="card-group">
                        {carChunk.map(car => (
                            <Card key={car.id} className="card">
                                <CardImg
                                    alt={`${car.carName} image`}
                                    src={car.img}
                                    top
                                    width="100%"
                                />
                                <CardBody className="card-body">
                                    <CardTitle tag="h5">
                                        {car.carName}
                                    </CardTitle>
                                    <CardText>
                                        Daily Price: {car.dailyPrice} ₺
                                    </CardText>
                                    <div className="dropdown-button-container">
                                        <UncontrolledDropdown>
                                            <DropdownToggle caret>
                                                Day
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {options.map(option => (
                                                    <DropdownItem key={option} value={option}>
                                                        {option}
                                                    </DropdownItem>
                                                ))}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <Button
                                            type='button'
                                            color='success'
                                            onClick={() => this.addToCarPage(car)}
                                            className='custom-button'
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </CardGroup>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentCategory: state.changeCategoryReducer,
    cars: state.carsListReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getCars: bindActionCreators(carsActions.getCars, dispatch),
        addToCarPage: bindActionCreators(carPageAction.addToCarPage, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
