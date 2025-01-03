import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function TestCard() {
  return (
    <div className="border-2 p-4 w-fit rounded-xl">
      <h2>Dictation 1</h2>
      <p>English</p>
      <p>800 Words</p>
      <p>All Speeds</p>
      <p>Free</p>
      <button className="btn bg-blue-500 text-white gap-3 py-2 px-4 rounded-xl flex mx-auto">
        Take Test <FaArrowRight className="my-auto"/>
      </button>
    </div>
  );
}
