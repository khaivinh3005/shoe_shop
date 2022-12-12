import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";
import { getProduct } from "../../app/slice/productSlice";
import { useNavigate } from "react-router-dom";

export function Counter() {
  const { counter, productSlice } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [incrementAmount, setIncrementAmount] = useState("2");
  console.log(useSelector((state) => state));
  const incrementValue = Number(incrementAmount) || 0;

  function handleTest() {
    dispatch(getProduct())
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult);
        navigate("/detail");
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(rejectedValueOrSerializedError);
      });
  }
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => handleTest()}
        >
          -
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
