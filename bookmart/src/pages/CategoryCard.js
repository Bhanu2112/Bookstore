import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  console.log(category.id);
  return (
    <>
      <div className="md:w-52 w-28">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          {/* image div */}
          <div>
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              // src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              src={category.category_img}
              alt={category.name}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          {/* content div */}
          <div className="absolute flex flex-col items-center justify-center px-9 text-center inset-0 translate-y-[60%] transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-serif mb-3 text-[12px]  md:text-[20px] font-bold text-white">
              {category.name}
            </h1>
            <p className="mb-3 text-[0px] md:text-[8px] lg:text-[10px] italic opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
              {category.description}
            </p>
            <Link to={`/category/${category.name}`}>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-[10px] sm:text-sm capitalize text-white shadow shadow-black/60">
                Explore
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
