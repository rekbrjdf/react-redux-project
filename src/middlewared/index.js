// const readyStatePromise = store => next => action => {
//   if(action.type === "getArticles"){
//       const articles =  await fetch('../articles')//запрашивает с сервера статьи
//       action = {
//           ...action,
//           articles = articles
//       }
//   }
//   next(action)
// }
// else{
//   next(action)
// }

// export default readyStatePromise