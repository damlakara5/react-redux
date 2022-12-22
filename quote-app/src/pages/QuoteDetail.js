import React , {useEffect} from 'react'
import { useParams , Route, Link, useRouteMatch} from 'react-router-dom'
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'



const QuoteDetail = () => {
   const match = useRouteMatch()
   const params = useParams()
   const {sendRequest, status , data: loadedQuote , error} = useHttp(getSingleQuote, true)
   console.log(params)
   console.log(params.quoteId)
   const {quoteId} = params


   useEffect(() => {
    sendRequest(quoteId)
   } , [sendRequest, quoteId])

   if(status === 'pending'){
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )
   }

   if(error){
      return <p className='centered'>{error}</p>
   }

   if(!loadedQuote.text){
      return <p>No quote find</p>
   }


  return (
    <div>
        <HighlightedQuote  text={loadedQuote.text}   author={loadedQuote.author}/>
        <Route exact path={`${match.path}`}>
            <div className='centered'>
              <Link className='btn--flat' to={`${match.url}/comments`}>
                  Load Comments
              </Link>
            </div>
        </Route>
    
        <Route exact path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </div>
  )
}

export default QuoteDetail