import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selector,
  setAllCategories,
  setAllProducts,
} from "../../Store/ProductSlice";
import IconButton from "../Button/IconButton";

function CategoriesSelection() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector(selector);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => dispatch(setAllCategories(json)));
  }, []);

  return (
    <div className="w-full h-auto">
      <h1 className="text-c1-a font-poppins font-semibold">Categories</h1>
      <div className="mt-3">
        <IconButton
          name={"All Categories"}
          className="hover:font-medium hover:underline"
          onClick={() => {
            fetch("https://fakestoreapi.com/products")
              .then((res) => res.json())
              .then((res) => {
                dispatch(setAllProducts(res));
              });
          }}
        />
      </div>
      {allCategories?.map((res: any) => (
        <div className="mt-3">
          <IconButton
            name={res}
            className="hover:font-medium hover:underline capitalize"
            onClick={() => {
              fetch(`https://fakestoreapi.com/products/category/${res}`)
                .then((res) => res.json())
                .then((json) => dispatch(setAllProducts(json)));
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoriesSelection;
