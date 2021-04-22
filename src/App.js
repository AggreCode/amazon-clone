import React, { Component,useEffect } from 'react';
import Header from './Header.js'
import Home from './Home.js'
import "./App.css";
import Checkout from './Checkout.js'
import Login from './Login'
import {useStateValue} from './StateProvider'
import {auth} from './Firebase.js'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
function App(){
  const [{basket,user}, dispatch] = useStateValue();
 useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged((user)=>{
         if(user){
           dispatch({
             type: 'SET_USER',
             user: user
           })
         }
         else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
         }
       })
       return ()=>{
         unsubscribe();
       }
 },[])
console.log(user);
    return (
      <Router>
       <div className="app">
         <Switch>
         <Route path="/checkout">
          <Header />
          <Checkout />
         </Route>
         <Route path="/login">
        <Login />
         </Route>
         <Route path="/">
         <Header />
         <Home/>
         </Route>
        

         </Switch>


       </div>
       </Router>
     
    );
  
}

export default App;
