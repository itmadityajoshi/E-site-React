import React from "react";
import {
  FaShippingFast,
  FaGift,
  FaAngleLeft,
  FaAngleRight,
  FaRegHeart,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { MdPayment } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="grid grid-cols-2 mx-auto ">
          <div className="mx-auto m-4">
            <div className="carousel  mx-2 rounded-2xl">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn ">
                    ❮
                  </a>
                  <a href="#slide2" className="btn ">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn ">
                    ❮
                  </a>
                  <a href="#slide3" className="btn">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://images.pexels.com/photos/454699/pexels-photo-454699.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn ">
                    ❮
                  </a>
                  <a href="#slide4" className="btn ">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="grid grid-cols-2 gap-4 m-4">
            <div className="main-banner relative">
              <div className="card w-auto bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-01.jpg?v=1655701506"
                    alt="pic"
                    className="hover:scale-125 duration-1000"
                  />
                </figure>
                <div className="card-body text-xs absolute -left-3.5 top-9">
                  <p className="text-yellow-700">BEST SALE</p>
                  <h2 className="card-title">Laptops Max</h2>
                  <p>From $1699.00 or $64.62/mo.</p>
                </div>
              </div>
            </div>

            <div className="main-banner relative">
              <div className="card w-auto bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-03.jpg?v=1654859212"
                    alt="pic"
                    className="hover:scale-125 duration-1000"
                  />
                </figure>
                <div className="card-body text-xs absolute -left-3.5 top-9">
                  <p className="text-yellow-700">NEW ARRIVAL</p>
                  <h2 className="card-title">BUY IPAD AIR</h2>
                  <p>
                    From $699.00 or $49.62 mo.
                    <br /> for 12 mo.*
                  </p>
                </div>
              </div>
            </div>

            <div className="main-banner relative">
              <div className="card w-auto bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-02.jpg?v=1654859195"
                    alt="pic"
                    className="hover:scale-125 duration-1000"
                  />
                </figure>
                <div className="card-body text-xs absolute -left-3.5 top-9">
                  <p className="text-yellow-700">15% OFF</p>
                  <h2 className="card-title">Smartwatch 7</h2>
                  <p>
                    Shop the latest band <br /> styles and colors.
                  </p>
                </div>
              </div>
            </div>

            <div className="main-banner relative">
              <div className="card w-auto bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-04.jpg?v=1654859228"
                    alt="pic"
                    className="hover:scale-125 duration-1000"
                  />
                </figure>
                <div className="card-body text-xs absolute -left-3.5 top-9">
                  <p className="text-yellow-700">FREE ENGRAVING</p>
                  <h2 className="card-title">Beats Headphone</h2>
                  <p>
                    High-Fidelity playback & <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Support section */}

      <section>
        <div className="grid grid-cols-1 w-full  text-black ">
          <div className="flex justify-between gap-10 px-5 h-24 items-center cursor-pointer  bg-slate-400  mx-2 mb-4  ">
            <div className="flex items-center gap-3 hover:scale-y-110 ">
              <FaShippingFast className="text-3xl" />
              <div>
                <a href="">Free Shipping </a>
                <p>From all orders over $100</p>
              </div>
            </div>

            <div className="flex items-center gap-3 hover:scale-y-110 ">
              <FaGift className="text-3xl" />
              <div>
                <a href="">Daily Surprise Offers</a>
                <p>Saves up to 25% off</p>
              </div>
            </div>

            <div className="flex items-center gap-3 hover:scale-y-110 ">
              <BiSupport className="text-3xl" />

              <div>
                <a href="">Support 24/7</a>
                <p>Shop with an expert</p>
              </div>
            </div>

            <div className="flex items-center gap-3 hover:scale-y-110 ">
              <HiCheckCircle className="text-3xl" />

              <div>
                <a href="">Affordable Prices</a>
                <p>Get Factory Direct price</p>
              </div>
            </div>

            <div className="flex items-center gap-2 hover:scale-y-110 ">
              <MdPayment className="text-3xl" />

              <div>
                <a href="">Secure Payment</a>
                <p>100% Protected payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products links*/}

      <div className="product-categories">
        <div className="grid grid-cols-4 shadow-lg mb-3 rounded-lg mx-4  ">
          <div className="camera-section flex justify-center items-center gap-14 my-4">
            <div className="text font-semibold">
              <h2> Camera & Videos </h2>
              <p className="font-normal text-center pt-2">10 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/03_110x110.jpg?v=1654929931"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-16 my-4">
            <div className="text font-semibold">
              <h2> Television </h2>
              <p className="font-normal text-center pt-2">10 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/04_110x110.jpg?v=1654929951"
                alt=""
              />
            </div>
          </div>

          <div className=" flex justify-center items-center gap-16 my-4">
            <div className="text font-semibold">
              <h2> Watches </h2>
              <p className="font-normal text-center pt-2">80 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/05_110x110.jpg?v=1654930000"
                alt=""
              />
            </div>
          </div>

          <div className="camera-section flex justify-center items-center gap-16 my-4">
            <div className="text font-semibold">
              <h2> Gaming </h2>
              <p className="font-normal text-center pt-2">9 Items</p>
            </div>

            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/06_110x110.jpg?v=1654930029"
                alt=""
              />
            </div>
          </div>

          <div className="camera-section flex justify-center items-center gap-16 my-4">
            <div className="text font-semibold">
              <h2> Headphones</h2>
              <p className="font-normal text-center pt-2">11 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/07_110x110.jpg?v=1654930055"
                alt=""
              />
            </div>
          </div>

          <div className="camera-section flex justify-center items-center gap-16 my-4">
            <div className="text font-semibold">
              <h2> Accessories</h2>
              <p className="font-normal text-center pt-2">50 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/08_110x110.jpg?v=1654930082"
                alt=""
              />
            </div>
          </div>

          <div className="camera-section flex justify-center items-center gap-10 my-4">
            <div className="text font-semibold">
              <h2> Portable Speakers </h2>
              <p className="font-normal text-center pt-2">4 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/09_110x110.jpg?v=1654930102"
                alt=""
              />
            </div>
          </div>

          <div className="camera-section flex justify-center items-center gap-10 my-4">
            <div className="text font-semibold">
              <h2> Home Appliances </h2>
              <p className="font-normal text-center pt-2"> 6 Items</p>
            </div>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/10_110x110.jpg?v=1654930129"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*  Featured Collectionns */}

      <div className="featured-coll relative">
        <div className="top flex  justify-between mx-4">
          <h2 className="text-2xl font-semibold">Featured Collectons</h2>
          <div className="flex ">
            <FaAngleLeft className="text-xl" />
            <FaAngleRight className="text-xl" />
          </div>
        </div>

        <div className="ft-prod grid grid-cols-5 gap-4 m-4">
          <div className="card w-64 bg-base-100 shadow-xl relative">
            <div className="absolute right-9 top-4 text-xl">
              <FaRegHeart className=" hover:text-red-600" />
            </div>

            <figure className="px-10 pt-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl">
            <div className="absolute right-9 top-4 text-xl">
              <FaRegHeart className=" hover:text-red-600" />
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl">
            <div className="absolute right-9 top-4 text-xl">
              <FaRegHeart className=" hover:text-red-600" />
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl">
            <div className="absolute right-9 top-4 text-xl">
              <FaRegHeart className=" hover:text-red-600" />
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-64 bg-base-100 shadow-xl">
            <div className="absolute right-9 top-4 text-xl">
              <FaRegHeart className=" hover:text-red-600" />
            </div>
            <figure className="px-10 pt-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
