import React,{useEffect}  from 'react'; 
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {connect} from "react-redux";
//import {getArticleAction} from "../../ac"
import {toggleNews} from "../../ac";


function Cards({articles}) {
  
console.log(articles, 'articles1111');
  const dispatch = useDispatch();
    // useEffect(() =>{
  //    setTimeout(() =>{
  //      dispatch({
  //       type: 'getArticles'
  //   })
  //    }, 3000)
  // },[])

 

  return (
  <div> 
    {articles.map((item, index) => { 
    console.log(item.title, 'title');

      return (
        <CardGroup key={index}>
        <Card> 
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text> 
            {item.date}
          </Card.Text>
          <Card.Text> 
            {item.content}
          </Card.Text>
          <div onClick={() => dispatch(toggleNews(item.id))}>Стрелка  </div>
          {item.isShow && 
            <Card.Text> 
              {item.text}
            </Card.Text>
          }
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
        </CardGroup>
    )}
     
    )} 
  </div>
  )
};

const MapStateToProps = (state) => { 
  return {
    articles: state.articles.state
  }
} 

export default  connect(MapStateToProps)(Cards);
