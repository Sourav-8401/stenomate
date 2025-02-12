import React, { useState } from 'react'
import TestCard from '../../components/TestCard';
import TakeTest from '../../components/TakeTest';
import Analysis from '../DashboardPages/Analysis';
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
  const [correctTyped, setCorrectTyped] = useState("");
  const audioArr = ["/e1.mp3", "/e3.mp3", "/e4.mp3", "/e5.mp3"];
  const [audioData, setAudioData] = useState("/e1.mp3");
  const [toggleAnalyze, setToggleAnalyze] = useState(false);
  const notify = () => toast.success(`Test changed`);
  return (
    <div>
      <h1 className='text-4xl text-center font-semibold mb-8'>StenoMate</h1>
      <hr  />
      <h1 className='text-2xl font-medium my-4'>All Exercises</h1>
      <div className='flex text-center gap-10 my-4'>
        {
          audioArr.map((ele)=>(
            <TestCard notify={notify} setAudioData={setAudioData} audioPath = {ele} setCorrectTyped={setCorrectTyped} setToggleAnalyze={setToggleAnalyze}/>
          ))
        }
      </div>

      <h1 className='text-2xl font-medium my-4 mt-10'>Take Test</h1>
      <div className='text-center'>
        <TakeTest audioData= {audioData}></TakeTest>
        <h1 className='text-2xl font-medium text-left my-4 mt-10'>Analyze Test</h1>
        <Analysis correctTyped={correctTyped} toggleAnalyze={toggleAnalyze} setToggleAnalyze={setToggleAnalyze}></Analysis>
      </div>
      <ToastContainer theme='colored' hideProgressBar/>
    </div>
  )
}
