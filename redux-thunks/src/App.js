import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notifications';
import {sendCardData, fetchCardData} from './store/card-actions';

let isInitial=true;

function App() {
  const dispatch = useDispatch()
  const showCard = useSelector(state => state.ui.cartIsVisible)
  const card= useSelector(state => state.card)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCardData())
  } ,[dispatch])

  useEffect(() => {

    /* 
      async functions with useEffect
      const sendCardData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending card data!'
      }))
      const response = await fetch('https://redux-async-800ac-default-rtdb.firebaseio.com/card.json', {
        method: 'PUT',
        body: JSON.stringify(card)
      })

      if(!response){
        throw new Error('Sending cart data failed')
      } 
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent card data successfully!'
      }))
    

      const responseData = await response.json()

    }

    if(isInitial){
      isInitial=false
      return
    }

    sendCardData().catch(e => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending card data failed !'
      }))
    }) 
      */
     if(isInitial){
      isInitial = false
      return
     }



     dispatch(sendCardData(card))


  } ,[card, dispatch] ) 


  return (
    <>
    {notification && <Notification  status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCard && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
