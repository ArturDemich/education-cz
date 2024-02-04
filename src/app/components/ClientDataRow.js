'use client'
import moment from "moment";
import { AiOutlineCopy } from "react-icons/ai"


export default function ClientDataRow({ item }) {
    //console.log('ClientDataRow', typeof item)
    const createdAt = moment(item.createdAt).format('YYYY.MM.DD - HH:mm')
  return (
    <>
      <div className="request-row">
        <div className="name">{item.name}</div>
        <div className="surname">{item.surname}</div>
        <div className="number">{item.number} <AiOutlineCopy /></div>
        <div className="email">{item.email}</div>
        <div className="birthday">{item.birthday}</div>
        <div className="create">{createdAt}</div>
        <button>Done</button>
      </div>      
    </>
  );
}
