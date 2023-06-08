
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Inter } from 'next/font/google';
import style from './style.module.css';
import { apiUrl } from '../_app';
// import {CreateDto} from ''

const inter = Inter({ subsets: ['latin'] });
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Add() {
  const [title, setTitle] = useState()
  const [subject, setSubject] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [priority, setPriority] = useState()
  const [desiredOutcome, setDesiredOutcome] = useState()
    const [uid, setUid] = useState();
    const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const uid_ = localStorage.getItem('accessToken');
    if (!uid_) {
      router.push('/login');
    }else[
        setUid(uid_),
        setUser(useSWR(`${apiUrl}/user/fetch?id=${uid}`, fetcher)),
    ]
  }, []);

  const { data, error } = useSWR(`${apiUrl}/complaints`, fetcher);

  const hanler = async (event)=>{
    event.preventDefault();
    const data = {user, title, subject,category,description,priority,desiredOutcome}
    try{
        const response = await fetch(`${apiUrl}/complaints/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // data = CreateDto.parse(data)
            body: JSON.stringify(data),
        });

        if(response.ok){
            const res = await response.json();
            console.log(res);

            router.push('/complain');
        }else{
            console.error('Error:', response.statusText);
        }
    }catch(error){
        console.error('Error', error)
    }

}

  if (error) {
    return <div>Failed to load</div>;
  }
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>

        <form onSubmit={hanler} method="post" className={style.container}>
          <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900 " >user</label>
                  <div className="mt-2">
                    <input value={uid}  type="text" onChange={(e) => setMat(e.target.value)} id="user" autoComplete="family-name" className="cursor-not-allowed opacity-50 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled/>
                  </div>
                </div>
                </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                  <div className="mt-2">
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" id="title" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                  <div className="mt-2">
                    <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" id="subject" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                  <div className="mt-2">
                    <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} name="category" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>personal</option>
                      <option>departmental</option>
                      <option>management</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6 sm:col-start-1">
                  <label htmlFor="desired-outcome" className="block text-sm font-medium leading-6 text-gray-900">Desired Outcome</label>
                  <div className="mt-2">
                    <input type="text" value={desiredOutcome} onChange={(e)=>setDesiredOutcome(e.target.value)} name="desiredOutcome" id="desired-outcome" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900">Priority</label>
                  <div className="mt-2">
                    <input type="text" value={priority} onChange={(e)=>setPriority(e.target.value)} name="priority" id="priority" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <div className="mt-2">
                    <textarea id="about" value={description} onChange={(e)=>setDescription(e.target.value)} name="description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button> */}
              <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>

          </div>
        </form>
      </main>
    )
}
