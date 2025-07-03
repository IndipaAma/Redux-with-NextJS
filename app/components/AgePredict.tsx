"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../lib/store";
import {
  agePredictAsync,
  countryPredictAsync,
  sexPredictAsync,
} from "@/lib/personal-info/AgeSlice";

const AgePredict = () => {
  const [name, setName] = useState("");
  const gender = useSelector((state: RootState) => state.agepredict.gender);
  const age = useSelector((state: RootState) => state.agepredict.age);
  const country = useSelector((state: RootState) => state.agepredict.country);
  const dispatch = useDispatch<AppDispatch>();

  const handlePrediction = () => {
    if (name.trim()) {
      dispatch(agePredictAsync(name));
      dispatch(sexPredictAsync(name));
      dispatch(countryPredictAsync(name));
    }
  };

  return (
    <div className="">
      <div className="flex justify-center my-5 ">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(String(e.target.value))}
          className="border-1 rounded-md mx-3 p-1"
        />
        <button
          onClick={handlePrediction}
          className="bg-emerald-300 py-3 px-10 rounded-md"
        >
          Predict
        </button>
      </div>
      <div className="flex flex-col text-center py-5 gap-2">
        <h1 className="text-2xl font-semibold">
          Age: <span className="text-lg">{age}</span>
        </h1>
        <h1 className="text-2xl font-semibold">
          Gender:
          <span className="text-lg">{gender}</span>
        </h1>
        <h1 className="text-2xl font-semibold">
          Country:
          <span className="text-lg">{country}</span>
        </h1>
      </div>
    </div>
  );
};

export default AgePredict;
