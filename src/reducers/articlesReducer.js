import articles from "../cards";

  // export default function appReducer(state = articles, action) {
  //  console.log(state, state);
  //     return {
  //       state, 
  //   }
  // }
  // fetch('.//https', ()=>{
  //   dispatch({type: 'getArticles', articles})
  // })


  export default function appReducer(state = {articles:[], isShowId: null}, action) {
  
     switch (action.type) {
      
       case 'getArticles': {
         return {
            ...state, 
            articles
         }
       }
       case 'selectArticles':
        return {
          ...state,
          isShowId: action.id === state.isShowId ? null: action.id
        }
       default:
         return state
     }
   }