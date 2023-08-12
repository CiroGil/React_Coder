import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore';  
import ItemList from './ItemList/ItemList';


const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

useEffect(()=>{
  const querydb = getFirestore();
  const queryCollection= collection(querydb, 'item');
  getDocs(queryCollection)
  .then(res=> setItem(res.docs.map(p=>({id: p.id, ...p.data()}))))
  }, [id])
    

  return (
    <div className='container'>
      <div className='row'>
       <ItemList item={item}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer
