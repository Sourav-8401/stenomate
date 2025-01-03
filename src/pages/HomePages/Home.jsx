import React from 'react'
import TestCard from '../../components/TestCard';
import TakeTest from '../../components/TakeTest';
import Analysis from '../DashboardPages/Analysis';
export default function Home() {
  return (
    <div>
      <div className='flex gap-10 my-4'>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </div>
        <TakeTest></TakeTest>
        <Analysis></Analysis>
    </div>
  )
}
