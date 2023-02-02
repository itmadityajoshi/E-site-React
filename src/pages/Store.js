import React, { useState, useEffect } from "react";
import axios from "axios";

const Store = () => {
  const [loading, setLoading] = useState(false);
  const [data, SetData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        SetData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="mx-auto text-center font-bold text-4xl m-4 ">
        <h2>Products </h2>
      </div>
      <div>
        {loading && (
          <div className=" mx-auto text-center ">
            <div className="radial-progress" style={{ "--value": 70 }}>
              100%
            </div>
          </div>
        )}
      </div>

      <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 m-5 ">
        {data.map((product) => (
          <div className="card card-compact w-[100%] bg-base-100 shadow-xl p-4">
            <figure>
              <img className="h-52 hover:scale-125 duration-1000 " src={product.image} alt="images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-36">{product.title}</h2>
              <p className="">{product.category}</p>
              <p className="font-semibold">{`Price: $${product.price}`}</p>

              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        ))}

        <div className="">
          <div className="btn-group">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn btn-disabled">...</button>
            <button className="btn">99</button>
            <button className="btn">100</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
