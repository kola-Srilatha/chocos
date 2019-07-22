import React from 'react';
import './App.css';
import {Switch,Route}from "react-router-dom";
import {connect}from "react-redux";
import * as ActionCreators from "./ActionCreators/ChocoAc";
import Footer from './Footer';
import ChocoList from './components/ChocoList';
import ListBrands from './components/ListBrands';
import LoginPage from './components/LoginPage';
import ChocoDetails from './components/ChocoDetails';
import BrandDetails from './components/BrandDetails';
import SignUp from './components/SignUp';
import home from './home';
//import Header from './Header';

function App() {
  return (
    <div>
    {/* <Header/> */}
    <Switch>
    <Route path="/home" exact component={home} />
    <Route path="/brands" exact component={ListBrands} />
    <Route path="/chocolates" exact component={ChocoList} />
    <Route path="/chocolates/:id"exact component={ChocoDetails}/>
    <Route path="/brands/:id" exact component={BrandDetails}/>
    <Route path="/login" exact component={LoginPage}/>
    <Route path="/signup" exact component={SignUp}/>
    <Route path = "/"exact component = {LoginPage}></Route>
     </Switch>
    <Footer/>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return state;

}
export default connect(mapStateToProps,ActionCreators)(App);
