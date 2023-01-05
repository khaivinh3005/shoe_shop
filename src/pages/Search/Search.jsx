import React, { useRef, useState } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import "./style.scss";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import { getProduct } from "app/slice/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Select } from "antd";
const Search = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleSearch = () => {
    console.log(inputRef.current.value);
    dispatch(getProduct(inputRef.current.value))
      .then(unwrapResult)
      .then((originalResponse) => {
        console.log(originalResponse);
        setArrProduct(originalResponse);
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(rejectedValueOrSerializedError);
      });
  };
  const handleFilter = (value) => {
    const tmpArr = _.orderBy(arrProduct, ["price"], [value]);
    setArrProduct(tmpArr);
  };
  return (
    <div className="container">
      <div className="search-input-wrap">
        <h1>SEARCH</h1>
        <input ref={inputRef} type="text" className="text" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="content">
        <h3 className="product-feature text-white py-2 w-100 mt-5">
          SEARCH RESULT
        </h3>
        <div className="row mt-5">
          <div className="container">
            <Select
              placeholder="Chọn sắp xếp"
              onChange={handleFilter}
              options={[
                {
                  value: "desc",
                  label: "Giá giảm dần",
                },
                {
                  value: "asc",
                  label: "Giá tăng dần",
                },
              ]}
            />
            <div className="row">
              {arrProduct?.map((item, index) => {
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

export default Search;
