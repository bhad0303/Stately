import React, { useState } from 'react'
import actualData from '../data/text';
import AddOrder from './AddOrder';
import OrderList from './OrderList';

function OrderPage({children}) {
    
  const [order,setOrder] = useState(actualData);

   
  const addOrder = (newOrder)=>{
    setOrder((prevOrder)=>[...prevOrder,newOrder]);
  }


  return (
    <div>
       <AddOrder addOrder={addOrder} />
       
    </div>
  )
}

export default OrderPage;
