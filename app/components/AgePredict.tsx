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
    <div className="@container">
      <div className="flex justify-center  @sm:@max-md:flex-col">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(String(e.target.value))}
          className=""
        />
        <button onClick={handlePrediction} className="">
          Predict
        </button>
      </div>
      <div>
        <h1>Age: {age}</h1>
        <h1>Gender:{gender}</h1>
        <h1>Country:{country}</h1>
      </div>
    </div>
  );
};

export default AgePredict;
