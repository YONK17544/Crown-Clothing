import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return(
        <div className = "cart-dropdown-container">
            <div className = "cart-items"/>
            <Button >CHECKOUT</Button>    
        </div>
    )
}

export default CartDropdown;