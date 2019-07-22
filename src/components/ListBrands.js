import React, { Component } from "react";
import { connect } from "react-redux";
import {getBrands } from "../ActionCreators/ChocoAc";
import BrandListItem from "./BrandListItem";
import NavBar from "./NavBar";
import Header from "../Header";
class ListBrands extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.dispatch(getBrands());
  }
  render() {
    return (
      <>
      <div>
        <NavBar/>
        <Header/>
      </div>
        {this.props.brands.map(b => (
          <BrandListItem 
          id={b.id}
          name={b.name}
          desc={b.desc}
         logo={b.logo}
         handleBrands= {this.handleBrandDetails}
        />
        ))}
      </>
    );
  }
}
function mapStateToProps(appState) {
  return {
    brands: appState.brandReducer.brands
  };
}

export default connect(mapStateToProps)(ListBrands);
