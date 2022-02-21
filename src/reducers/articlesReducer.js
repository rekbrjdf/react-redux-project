import articles from "../cards"

  export default function appReducer(state = {}, action) {
   
    switch (action.type) {
     
      case 'getArticles': {
        return {
           ...state,
           articles: articles
        }
      }
      default:
        return state
    }
  }