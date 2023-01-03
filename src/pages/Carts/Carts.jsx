import { unwrapResult } from "@reduxjs/toolkit";
import { notification } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "redux/configStore";
import {
  addProductItem,
  clearCart,
  removeProductItem,
} from "redux/reducers/productReducer";
import { getUser, orderShoes } from "redux/user";

const Carts = () => {
  const { addToCart } = useSelector((state) => state.productReducer);
  const { userToken, user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleOrder = () => {
    console.log(addToCart);
    console.log(userToken);
    if (!userToken) {
      notification.error({ placement: "top", message: "Bạn chưa đăng nhập!" });
      return;
    }
    const order = addToCart.map((item) => {
      return { productId: item.id, quantity: item.quantityOrderd };
    });

    let orderDetail = {
      orderDetail: order,
      email: user.email,
    };

    console.log(orderDetail);
    dispatch(orderShoes(orderDetail))
      .then(unwrapResult)
      .then((originalResponse) => {
        dispatch(clearCart());
      });
  };
  return (
    <div className="container">
      <h1>Carts</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
              </div>
            </th>
            <th scope="col">id</th>
            <th scope="col">img</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">total</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {addToCart?.map((cartItem, index) => {
            return (
              <tr>
                <th scope="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <td>{cartItem.id}</td>
                <td style={{ width: "85px", height: "56px" }}>
                  <img
                    src={cartItem.image}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td>{cartItem.name}</td>
                <td>{cartItem.price}$</td>
                <td>
                  <div className="productItem-amount">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        const action = addProductItem(cartItem);
                        dispatch(action);
                      }}
                    >
                      +
                    </button>
                    <span className="mx-3 fs-5">
                      {cartItem?.quantityOrderd}
                    </span>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        const action = removeProductItem(cartItem);
                        dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>{cartItem.price * cartItem?.quantityOrderd}$</td>
                <td>
                  <button className="btn btn-success">EDIT</button>
                  <button className="btn btn-info">DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ textAlign: "right" }}>
        <button onClick={handleOrder} className="btn btn-warning">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Carts;
