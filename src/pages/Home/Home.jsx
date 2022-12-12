import React from "react";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoesCard from "../../components/ShoesCard/ShoesCard"
import { useEffect } from "react";
import axios from 'axios'

const contentStyle = {
  margin: 0,
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch()
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const getAllProduct = async () => {
    const result = await axios ({
      url: 'https://shop.cyberlearn.vn/api/product',
      method: 'GET'
    })
    //dispatch action lên reducer
    const action = {
      type: 'productReducer/getAllProductApi',
      payload: result.data.content
    }
    dispatch(action)
  }
  useEffect(()=>{
    //Call API
    getAllProduct()
  }, [])

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse navbar-home"
            id="collapsibleNavId"
          >
            <ul className="menu navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/"
                  aria-current="page"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kid">
                  Kid
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sport">
                  Sport
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="row mt-5">
          <div className="col-md-7">
            <Carousel afterChange={onChange}>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./../../img/shoes.png"
                    alt=""
                    width={"700px"}
                    height={"383px"}
                    style={{ objectFit: "cover" }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./../../img/shoes.png"
                    alt=""
                    width={"700px"}
                    height={"383px"}
                    style={{ objectFit: "cover" }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./../../img/shoes.png"
                    alt=""
                    width={"700px"}
                    height={"383px"}
                    style={{ objectFit: "cover" }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./../../img/shoes.png"
                    alt=""
                    width={"700px"}
                    height={"383px"}
                    style={{ objectFit: "cover" }}
                  />
                </h3>
              </div>
            </Carousel>
          </div>
          <div className="col-md-5 mt-5">
            <h4
              className="product-name"
              style={{ fontSize: "40px", fontWeight: "300" }}
            >
              Product Name
            </h4>
            <p style={{ fontSize: "20px", fontWeight: "300" }}>
              Product Description
            </p>
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="container">
            <h3 className="product-feature text-white py-2">Product Feature</h3>
            <div className="row">
              {arrProduct.map((item, index) => {
                return (
                  <div key={index} className="col-md-4 product-item">
                    <ShoesCard prod={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
