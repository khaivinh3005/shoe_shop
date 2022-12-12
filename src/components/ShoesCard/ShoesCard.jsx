import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = ({prod}) => {
  return (
    <NavLink to="/detail">
      <div className="card">
        <img src={prod.image} alt="" height={250} style={{objectFit: 'cover'}}/>
        <h5 className="text-center">{prod.name}</h5>
        <div className="card-body d-flex text-center justify-content-center align-item-center p-0 detail">
            <div className="w-50 h-150 text-white py-3 buynow">
              Buy now
            </div>
            <div className="w-50 h-150 text-dark py-3 price">
                <h5>{prod.price}$</h5>
            </div>
        </div>
      </div>
    </NavLink>
  );
};

export default memo(ShoesCard);
