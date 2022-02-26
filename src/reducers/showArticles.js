const articles = (state = {}, action) => {
    switch (action.type) {
    //   case 'ADD_TODO':
    //     return [
    //       ...state,
    //       {
    //         id: action.id,
    //         text: action.text,
    //         completed: false
    //       }
    //     ]
      case 'showArticles':
        return state.map(item =>
          (item.id === action.id)
            ? {...item, isShow: !item.isShow}
            : item
        )
      default:
        return state
    }
  }
  
  export default articles;