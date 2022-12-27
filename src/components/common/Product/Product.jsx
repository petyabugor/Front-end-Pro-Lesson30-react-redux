import React from 'react'
import  './Product.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Product = (props) => {
  const items = useSelector(state => state.products.items)
  const renderList = items.slice(0,12).map((item) =>{
  const {image, title, price, id} = item;
      return (
              <div  className="what-can-you__item" key={id}  onClick={() =>props.onAdd(item)} >
                <div className="what-can-you__img " >
                  <img  src={image} alt="картинка" />
                </div>
                <h4 className="what-can-you__item__text" >{title}</h4> 
                <Link to="what-can-you__link"  href="">{'Ціна: '+ price +  '$'} </Link>   
                </div>
      )
    })
    return <>{renderList}</>
  }

export default Product