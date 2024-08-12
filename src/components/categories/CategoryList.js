import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoriesActions from "../../redux/actions/categoriesActions"
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import * as carsActions from "../../redux/actions/carsActions"


class CategoryList extends Component {


  componentDidMount() {
    this.props.actions.getCategories()

  }


  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getCars(category.id)
  }

  render() {
    return (
      <div>
        <h2><Badge color='warning'>Categories</Badge></h2>
        <ListGroup>

          {
            this.props.categories.map(category => (
              <ListGroupItem active={category.id === this.props.currentCategory.id} type="button" onClick={() => this.selectCategory(category)} key={category.id}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }

        </ListGroup>
       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoriesActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoriesActions.changeCategory, dispatch),
      getCars: bindActionCreators(carsActions.getCars, dispatch)
    }

  }

}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

