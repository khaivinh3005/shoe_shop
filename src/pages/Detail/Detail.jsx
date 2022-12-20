import ShoesCard from "components/ShoesCard/ShoesCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCartAction,
  getDetailProductApi,
} from "redux/reducers/productReducer";

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const [orderItem, setOrderItem] = useState(1);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    const actionAsync = getDetailProductApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);

  const handleAddToCart = (item) => {
    const productItem = { ...item, quantityOrderd: orderItem };
    const action = addToCartAction(productItem);
    dispatch(action);
  };

  return (
    <div className="container productDetail">
      <div className="row mt-5">
        <div className="col-md-5">
          <img
            className="prodDetail"
            src={productDetail.image}
            alt="..."
            height={200}
            width={200}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h3 style={{fontSize: '30px', fontWeight: '300'}}>{productDetail.name}</h3>
          <p style={{fontSize: '16px', fontWeight: '400'}}>{productDetail.description}</p>
          <h5>Available Size</h5>
          <div className="row">
            {productDetail?.size.map((item) => {
              return (
                <div key={item.id} className="col-1 product-item-size">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="text-danger mt-3 fw-bold">{productDetail.price}$</div>
          <div className="productItem-amount d-flex align-items-center">
            <button
              className="btn btn-success"
              onClick={() => setOrderItem((pre) => (pre += 1))}
            >
              +
            </button>
            <span className="mx-3 fs-5">{orderItem}</span>
            <button
              className="btn btn-success"
              onClick={() => {
                if (orderItem > 0) {
                  setOrderItem((pre) => (pre -= 1));
                }
              }}
            >
              -
            </button>
          </div>
          <button
            className="btn btn-addtocart mt-3"
            onClick={() => handleAddToCart(productDetail)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center mt-5">-Related Product-</h2>
        <div className="row mx-4">
          {productDetail?.relatedProducts.map((item, index) => {
            return (
              <div key={index} className="col-md-4 product-item">
                <ShoesCard prod={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
