import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './Firebase'
function Header() {
const [{basket, user}] = useStateValue();
const logout =()=>{
   
    if(user)
    auth.signOut()
}
    return (
      
        <div>
             <nav className="header">
                 <Link to ="/">
                 <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" /> </Link>
                 <div className="header_searchdiv">
                     
                 <input type="text" className="header_search"/>    
                  <SearchIcon className= "header_searchicon" />

                 </div>
                 <div className="header_nav">
              <Link to={!user&&"/login"} className="header_link">
                     <div className="header_option">
                     <span className="header_option1">Hello {user?.email}</span>
                     <span  className="header_option2" onClick={logout}>{user ?"Sign Out": "Sign In"}</span>
                     </div>
                </Link>

                <Link to="/login" className="header_link">
                     <div className="header_option">
                     <span   className="header_option1">Returns</span>
                     <span  className="header_option2">&Orders</span>
                     </div>
                </Link>

                <Link to="/login" className="header_link">
                     <div className="header_option">
                     <span  className="header_option1">Your </span>
                     <span  className="header_option2">prime</span>
                     </div>
                </Link>
                 <Link to="/checkout" className="header_link">
                     <div className="basket">
                    <ShoppingBasketIcon />
                     <span className="header_option2_Basket">{basket.length}</span>
                     </div>

                 </Link>
                 </div>
                                </nav>
        </div>
    )
}

export default Header
