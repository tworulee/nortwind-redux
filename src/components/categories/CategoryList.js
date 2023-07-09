import React, { Component } from 'react';
import { connect } from 'react-redux';
// import data from '../../redux/reducers/initialState';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import { ListGroupItem, ListGroup, Badge } from 'reactstrap';

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Categories</Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.props.actions.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Secili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
