import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from './style.module.css';
import { apiUrl } from './_app';


import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })
const fetcher  = (...args)=>fetch(...args).then(res=>res.json())

export default function Home() {
  console.log("API--------",apiUrl)
  const {data, error} = useSWR(`${apiUrl}/complaints`, fetcher);
    if (error) return <div>Failed to load</div>;
    if(!data) return <div>Loading...</div>;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex-col z-10 w-full max-w-5xl items-center justify-between font-mono ">


        <div className=" flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto   lg:w-auto lg:bg-none">
        <h1 className='text-xl justify-center font-thin'>Submit Your Complaint Now</h1>

        </div>
      </div>
      <div className={style.complaintsBoxes}>
            {data.map(({title,id, user, subject, category,description, priority, desiredOutcome})=>(
                <div className={[style.complaintsBox]} key={id}>
                    <p><span>{user.name}: </span> </p>
                    <p><span>{title}: </span> </p>
                    <p><span>{subject}: </span> </p>
                    <p><span>{category}: </span> </p>
                    <p><span>{description}: </span> </p>
                    <p><span>{desiredOutcome}: </span> </p>
                    <p><span>{priority}: </span> </p>
                </div>
            ))}
        </div>


    </main>
  )
}
