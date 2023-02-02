import React from "react";
import {  NavLink } from "react-router-dom";
import { BsFillPersonFill, BsCartCheckFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import {BiCategory} from "react-icons/bi"


const Header = () => {
  return (
    <>
      <header className="header-top bg-[#131921] text-white border-b-[1px] ">
        <div className="container flex justify-between items-center h-5 text-sm py-3">
          <div className="">
            <p>Free Shipping Over $100 & Free Returns</p>
          </div>
          <div className=" flex items-center gap-4">
            {/* <Link> </Link> */}
            <a href="" className="">
              Hotline: +977 4344 6000-(88){" "}
            </a>

            <div className="dropdown  text-black">
              <label tabIndex={0} className="text-white btn bg-transparent border-none">
                English
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2  bg-base-200"
              >
                <li>
                  <a>Nepali</a>
                </li>
                <li>
                  <a>Hindi</a>
                </li>
              </ul>
            </div>

            <p>USD $</p>
          </div>
        </div>
      </header>

      <header className="header-middle bg-[#131921]">
        <div className="container">
          <div className="text-white flex justify-around">
            <div className="grid grid-cols-3  items-center">
              
              <div className="text-3xl font-bold">
                <a href="">Digitic.</a>{" "}
              </div>

              <div className="search">
               
                  <div className="input-group text-black ">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input border-none w-10/12"
                    />
                    <button className="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                 
                </div>
              </div>

              <div className="flex items-center justify-between text-sm p-3 mx-4">
                <a className="flex items-center gap-2">
                  <AiOutlineHeart className="text-3xl " />
                  <p>
                    {" "}
                    Favourite <br /> Wishlists{" "}
                  </p>
                </a>
                <a className="flex items-center gap-3">
                  <BsFillPersonFill className="text-3xl" />
                  <p>
                    {" "}
                    Log In <br /> My Account{" "}
                  </p>
                </a>
                <a className="flex items-center gap-4">
                  <BsCartCheckFill className="text-3xl" />
                  <p> cart </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom bg-[#232f3e] text-white flex  items-center h-12">
        <div className="categories inline-block w-80">
          <div className="dropdown dropdown-bottom ">
            <label tabIndex={0} className="btn m-1 gap-2 bg-transparent border-none " >
               <BiCategory className="text-2xl "/>SHOP CATEGORIES
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2  ml-2  w-[310px] bg-[#131921] rounded-md "
            >
              <li className="border-b-[1px]">
                <a>Food</a>
              </li>
              <li className="border-b-[1px]">
                <a>Clothes</a>
              </li>
              <li className="border-b-[1px]">
                <a>Computer</a>
              </li>
              <li className="border-b-[1px]">
                <a>Men's Fashion</a>
              </li>
              <li className="border-b-[1px]">
                <a>Women's Fashion</a>
              </li>
              <li className="border-b-[1px]">
                <a>Gadgets</a>
              </li>
              <li className="">
                <a>Beauty</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-12 ">
          <NavLink className='' to='/'> HOME</NavLink>
          <NavLink className='' to='/'> OUR STORE</NavLink>
          <NavLink className='' to='/'> BLOGS</NavLink>
          <NavLink className='' to='/'> CONTACT</NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
