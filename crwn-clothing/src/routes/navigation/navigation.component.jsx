 import { Link, Outlet } from "react-router-dom"
 import { Fragment, useContext } from "react";
 import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
 import "./navigation.styles.scss";
 import { UserContext } from "../../contexts/user.context.jsx";
 import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";

 const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
   

    // const signOutHandler = async() =>{
    //   await signOutUser();
    //   setCurrentUser(null);
    // }

    return (
      <Fragment>
       <div className = "navigation">
            <Link className = "logo-container" to = "/">
                <CrwnLogo className = "logo"/>
            </Link>
            <div className = "nav-links-container">
                <Link className = "nav-link" to = "/shop">
                SHOP
                </Link>
                 {currentUser ? (<span className = "nav-link" onClick = {signOutUser}>
                    SIGN OUT
                  </span>):(
                     <Link className = "nav-link" to = "/auth">
                SIGN IN
                </Link>
                  )
                 }
               <CartIcon />
            </div>
            { isCartOpen && <CartDropdown />}
       </div>
       <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;