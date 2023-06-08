import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from './style.module.css';
import { apiUrl } from './_app';


import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })
const fetcher  = (...args)=>fetch(...args).then(res=>res.json())

export default function Home() {
  console.log("API--------",apiUrl)
  const {data, error} = useSWR(`http://localhost:3001/complaints`, fetcher);
    if (error) return <div>Failed to load</div>;
    if(!data) return <div>Loading...</div>;
  return (
    <main>
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex-col z-10 w-full max-w-5xl items-center justify-between font-mono">
        <div className="flex w-full h-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className="text-4xl lg:text-6xl text-center font-bold text-gray-800 dark:text-white animate-fadeIn">
            Submit Your Complaint Now
          </h1>
        </div>
      </div>
      <div className="mt-8"> {/* Add margin top here */}
        <div className={`${style.complaintsContainer} flex flex-wrap justify-center`}>
          {data.map(({ title, id, user, subject, category, description, priority, desiredOutcome }) => (
            <div className={`${style.complaintsModal} bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mx-2 my-2 max-w-sm flex-grow`} key={id}>
              <p className="text-sm font-medium text-gray-800 dark:text-white mb-1">{user.name}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">{title}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Subject: {subject}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Category: {category}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Description: {description}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Desired Outcome: {desiredOutcome}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Priority: {priority}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    


    </main>
  )
}
