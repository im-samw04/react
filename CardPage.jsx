import React, { Fragment, useState , useEffect} from "react";
import "./Card.css";
import "./App.css";
import AddCard from "./AddCard";
import CardDetail from "./cardDetail";
import CardWrapper from "./CardWrapper";
import HeaderStage from "./headerStage";
import axios from "axios";


const CardPage = () => {
  
  // const handleDelete = (title) => {
  //   const filteredData =  (cardList.filter((c) => c.title !== title));
  //   setCardList(filteredData)
  // };

  const onSubmit = (values) => {
    console.log("Form submited!!!", values);
    setCardList([...cardList, values]);
  };

const [cardList,setCardList] = useState([])

const fetchData = async () => {
  const res = await axios.get('https://66e7eab8b17821a9d9da85dd.mockapi.io/cardItem')
  setCardList(res.data)
}


useEffect(() => {
  fetchData()
}, [])



  return (
    <>
      <Fragment>
        {/* <HeaderStage/> */}
        <AddCard onSubmit={onSubmit}/>

        {/* <CardWrapper handleDelete={handleDelete} cardList={cardList}/> */}
      </Fragment>
    </>
  );
};

export default CardPage;
