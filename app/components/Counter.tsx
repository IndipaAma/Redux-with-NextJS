"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/lib/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="text-center py-10">
        <h1>{counter}</h1>
      </div>
      <div className="flex justify-center gap-x-20">
        <button className="bg-amber-500" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="bg-amber-500" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="flex justify-center py-10">
        <input
          type="text"
          placeholder="Increment Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="flex justify-center gap-10">
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          IncrementBY{}
        </button>
        <button onClick={() => dispatch(decrementByAmount(amount))}>
          DecreamentBy{}
        </button>
      </div>
    </div>
  );
};

export default Counter;
