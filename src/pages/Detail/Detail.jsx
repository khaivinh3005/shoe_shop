import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProductApi } from 'redux/reducers/productReducer'

const Detail = () => {

const {productDetail} = useSelector(state =>state.productReducer)

const dispatch = useDispatch()

const params = useParams()

useEffect(()=>{
  const actionAsync = getDetailProductApi(params.id)
  dispatch(actionAsync)
},[params.id])
  
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-5">
          <img className='prodDetail' src={productDetail.image} alt="..." height={400} style={{objectFit: 'cover'}} />
        </div>
        <div className="col-md-7 mt-5">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail