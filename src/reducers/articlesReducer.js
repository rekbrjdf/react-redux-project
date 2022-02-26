import articles from "../cards";

  export default function appReducer(state = articles, action) {
   console.log(state, state);
      return {
        state, 
    }
  }


  // export default function appReducer(state = articles, action) {
  //   console.log(state, state);
  //    switch (action.type) {
      
  //      case 'getArticles': {
  //        return {
  //           ...state, 
  //        }
  //      }
  //      default:
  //        return state
  //    }
  //  }