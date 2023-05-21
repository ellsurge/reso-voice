import style from './style.module.css';
export default function getAllComplaints(){
    return(
        <div className={style.complaintsBoxes}>
            <div className={style.complaintsBox}>
                <p><span>Subject: </span> </p>
                <p><span>Category: </span> </p>
                <p><span>Description: </span> </p>
                <p><span>Desired Outcome: </span> </p>
            </div>
            <div className={style.complaintsBox}>
                <p><span>Subject: </span> </p>
                <p><span>Category: </span> </p>
                <p><span>Description: </span> </p>
                <p><span>Desired Outcome: </span> </p>
            </div>
            <div className={style.complaintsBox}>
                <p><span>Subject: </span> </p>
                <p><span>Category: </span> </p>
                <p><span>Description: </span> </p>
                <p><span>Desired Outcome: </span> </p>
            </div>
        </div>
    )
}
