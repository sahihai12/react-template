import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { addCart } from '../redux/actions/CartAction';


const ProductSingle = ({data}) => {
  const { id } = useParams()
  const [singleData , setsingleData] = useState([]);
  useEffect(()=>{
    const getproducts = async () =>{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setsingleData(await response.json())
      }
      getproducts();
      // return (
        // setrealted(data.filter(el => el.category === singleData.category))
      // ) 
    
  }, [id])
  
  // const RelatedProduct = ({realtedData}) => {
  //     return(
  //       <>

  //       </>
  //     )
  // }

  const dispatch = useDispatch();
  const addProduct = (singleData) => {
    dispatch(addCart(singleData))
  } 


  return (
    <>
      <div className='container my-3 singleProduct'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='card-img-top p-5 shadow-sm text-center'>

            <img src={singleData.image} className="w-100 w-md-75" alt={singleData.title}/>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center flex-column h-100'>
              <p className='category text-uppercase h3 lead'>{singleData.category}</p>
              <h2 className='title text-capitalize fw-bold h2'>{singleData.title}</h2>
              {/* <div className='rating'>Rating {singleData.rating.rate} <i className='fas fa-star'></i></div> */}
              <h2 className='price fw-bold h4'>$ {singleData.price}</h2>
              <p className='description lead'>{singleData.description}</p>
              <div className='action_button'>
                <button className='cart btn btn-outline-dark' onClick={() => addProduct(singleData)}><i className="fa-solid fa-cart-shopping"></i>Add To Cart</button>
              </div>
            
            </div>  
          </div>
        </div>
      </div>
      <div className='container pb-3'>
        {/* {realted.map( el => <RelatedProduct realtedData={el}/>)} */}
      </div>

      
    </>
  )
}

export default ProductSingle