import { apiUrl } from '../_app';
import style from './style.module.css';
import useSWR from 'swr';

const fetcher  = (...args)=>fetch(...args).then(res=>res.json())
export default function getAllComplaints(){

    const {data, error} = useSWR(`${apiUrl}/complaints`, fetcher);
    if (error) return <div>Failed to load</div>;
    if(!data) return <div>Loading...</div>;

    return(
        <div className={style.complaintsBoxes}>
            {data.map(({title,id, user, subject, category,description, priority, desiredOutcome})=>(
                <div className={style.complaintsBox} key={id}>
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
    )
}

