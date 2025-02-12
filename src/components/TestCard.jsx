import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import bookData from "../assets/book.json"
export default function TestCard({setAudioData, audioPath, setCorrectTyped, setToggleAnalyze, notify}) {
  const handleCardSelect = ()=>{
    setAudioData(audioPath);
    const exNo = audioPath.substring(1,3)
    const exData = bookData[exNo]
    console.log(exData);
    setCorrectTyped(exData);
    notify();
    setToggleAnalyze(false);
  }
  return (
    // /e1.mp3
    <div className="border-2 p-4 w-fit rounded-xl">
      <h2 className="font-semibold text-xl ">Exercise {audioPath.substring(2,3)}</h2>
      <p>English</p>
      <p>800 Words</p>
      <p>All Speeds</p>
      <p className="text-red-500 font-semibold">Free</p>
      <button 
      onClick={handleCardSelect}
      className="btn bg-blue-500 mt-4 text-white gap-3 py-2 px-4 rounded-xl flex mx-auto">
        Take Test <FaArrowRight className="my-auto"/>
      </button>
    </div>
  );
}
