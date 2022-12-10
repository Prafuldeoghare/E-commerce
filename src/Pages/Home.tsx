import { iteratorSymbol } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../Components/Aside/Aside";
import Card from "../Components/Card/Card";
import { setAllProducts } from "../Store/ProductSlice";

function Home() {
  const dispatch = useDispatch();
  const { allProducts, ...rest } = useSelector(
    (state) => state?.productReducer
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAllProducts(res));
      });
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Aside />
      </div>
      <div className="col-span-10 grid grid-cols-5 gap-5">
        {allProducts?.map((res) => (
          <div className="col-span-1">
            <Card {...res} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
