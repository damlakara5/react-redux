import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cardQuantity = useSelector(state => state.card.totalQuantity)
  const toggleCardHandle = ( ) => {
      dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button}  onClick={toggleCardHandle}  >
      <span>My Cart</span>
      <span className={classes.badge}>{cardQuantity}  </span>
    </button>
  );
};

export default CartButton;
