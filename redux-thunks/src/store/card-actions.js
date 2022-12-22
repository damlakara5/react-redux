import { uiActions } from "./ui-slice";
import { cardActions } from "./card-slice";

export const fetchCardData = ( ) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://redux-thunks-b2ee9-default-rtdb.firebaseio.com/card.json' )

            if(!response.ok){
                throw new Error("Couldn't fetch data")
            }

            const data = await response.json()

            return data
        }

        try{
           const cardData = await fetchData()
           dispatch(cardActions.replaceCard({
                items: cardData.items  || [],
                totalQuantity: cardData.totalQuantity
           }))

        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching cart data failed!',
                })
              );
        }
    }
}

export const sendCardData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          'https://redux-thunks-b2ee9-default-rtdb.firebaseio.com/card.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };
  };