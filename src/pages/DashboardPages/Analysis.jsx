import React, { useState } from "react";
export default function Analysis({ correctTyped, toggleAnalyze, setToggleAnalyze }) {
  const [userTyped, setUserTyped] = useState("");
  const [analysis, setAnalysis] = useState([]);
  function countWords(paragraph) {
    if (!paragraph || typeof paragraph !== "string") {
      return 0;
    }
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  }

  function handleType(event) {
    let word = event.target.value;
    setUserTyped(word);
  }

  function analyze() {
    const correctWords = correctTyped.split(/(\s+|\b)/); // Keeps spaces and punctuation
    const userWords = userTyped.split(/(\s+|\b)/);

    const results = userWords.map((word, index) => {
      if (correctWords[index] === undefined) {
        return { text: word, bgColor: "bg-red-500" }; // Addition
      } else if (word === correctWords[index]) {
        return { text: word, bgColor: "bg-green-400" }; // Correct
      } else if (
        word.toLowerCase() === correctWords[index]?.toLowerCase() &&
        word !== correctWords[index]
      ) {
        return { text: word, bgColor: "bg-orange-500" }; // Capitalization mistake
      } else if (
        word.replace(/[.,!?]/g, "") ===
        correctWords[index]?.replace(/[.,!?]/g, "")
      ) {
        return { text: word, bgColor: "bg-indigo-500" }; // Punctuation mistake
      } else {
        return { text: word, bgColor: "bg-pink-500" }; // Spelling mistake
      }
    });

    setAnalysis(results);
    setToggleAnalyze(true);
  }

  return (
    <div className="my-4">
      <textarea
        className="w-full h-[300px] resize-none border border-gray-300 rounded p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Start typing..."
        onChange={handleType}
      ></textarea>
      <button
        onClick={analyze}
        className="py-2 px-4 bg-blue-500 rounded-lg text-white mt-2"
      >
        Submit
      </button>
    { toggleAnalyze && <div>
      <p className="bg-indigo-500 text-white w-fit p-2 rounded-lg">
        Typed words: {countWords(userTyped)}
      </p>
      <div className="flex gap-1 my-4">
        <p className="bg-yellow-500 text-white w-fit p-2 rounded-lg">
          Omission
        </p>
        <p className="bg-green-400 text-white w-fit p-2 rounded-lg">Correct</p>
        <p className="bg-orange-500 text-white w-fit p-2 rounded-lg">
          Capitalization mistake
        </p>
        <p className="bg-indigo-500 text-white w-fit p-2 rounded-lg">
          Punctuation mistake
        </p>
        <p className="bg-red-500 text-white w-fit p-2 rounded-lg">Addition</p>
        <p className="bg-pink-500 text-white w-fit p-2 rounded-lg">
          Spelling mistake
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-between text-white border-2 border-black py-4 px-2">
        <div className="text-black flex flex-col  p-2 rounded w-1/2">
          Yours Words
          <div className="ps-1 mt-2 text-white  ">
            {analysis.map((item, index) => (
              <span
                key={index}
                className={`px-1 py-1  ${item.bgColor}`}
                style={{ display: "inline-block" }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <div className="text-black flex flex-col  p-2 rounded w-1/2  ">
          Orignal Words{" "}
          <div className="bg-green-300 mt-2 flex ps-1">{correctTyped}</div>
        </div>
      </div>
      </div>}

    </div>

  );
}
