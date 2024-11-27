import React, { useEffect, useState } from 'react'
// import Category from './Category';
import Loading from './Loading';
import ShowProducts from './ShowProducts';

const Products = () => {
  const [data , setdata] = useState([]);
  const [filter , setfilter] = useState(data);
  const [loading , setloading] = useState(true);
  const [category , setcategory] = useState([]);
  let componentmount = true;

  useEffect(()=>{
    const getproducts = async () =>{
      setloading(true)
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentmount) {
        setdata(await response.clone().json())
        setfilter(await response.json())
        // make a unique category list
        setloading(false)
      }
      return () => {
        componentmount(false);
      }
    }
    getproducts();

  }, [])

  useEffect(() => {
    setcategory([...new Set(data.map(x => x.category))]);
  }, [filter])
  

  // filter products
  const tabFilter = (name) => {
    const updatelist = data.filter(single => single.category === name)
    setfilter(updatelist);
  }


  return (
    <div className='proucts container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='h2 text-center pt-5 pb-2'>Products</h2>
        </div>
      </div>
      {/* filter list */}
      <div className='row'>
        <ul className='d-flex align-items-center justify-content-center'>
          <li className='btn btn-outline-dark mx-2 text-capitalize' key={0} onClick={()=> setfilter(data.splice(0.8))}>All</li>
          {/* for remaining */}
          {/* {category.map((el , index) => <Category unique_category={{index: index,name:el}} onClick={() => tabFilter(el)}/>)} */}
          {category.map((el , index) => 
            <li className='btn btn-outline-dark mx-2 text-capitalize' key={index+1} onClick={()=> setfilter(data.filter(single => single.category == el))}>{el}</li>)}
        </ul>
      </div>
      {/* show products */}
      <div className='row mt-2'>
        {/* {loading ? <Loading /> : filter.slice(0, limit).map(el => <ShowProducts product={el} />)} */}
        {loading ? <Loading /> : filter.map(el => <ShowProducts product={el} />)}
      </div>
    </div>
  )
}

export default Products