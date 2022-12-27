import React from 'react'
import  './Main.css'
import {Product} from  '../common/index'
import {ProductSkeleton} from "../common/index";
import { useSelector } from 'react-redux';
import { selectStatus } from '../../redux/slices/productSlice';
import Categories from '../common/Categories/Categories'

const Main = (props) =>  {
  const status = useSelector(selectStatus)
    return (
      <div className="integrate">
        <div className="what-can-you"> 
            <div className="what-can-you__container _container-narrow">
                    <Categories></Categories>
                <div className="what-can-you__content">
                    {status
                    ?[...new Array(12)].map((_, index)=> <ProductSkeleton key={index}/>  )
                    :<Product onAdd={props.onAdd}></Product>
                    } 
                </div>
            </div>
        </div>
      </div>
    )
}


export default Main