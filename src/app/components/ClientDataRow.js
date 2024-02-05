'use client'
import moment from "moment";
import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai"


export default function ClientDataRow({ item }) {
    //console.log('ClientDataRow', typeof item)
    const createdAt = moment(item.createdAt).format('YYYY.MM.DD - HH:mm')
    const [expanded, setExpanded] = useState(false);
   

    const handleButtonClick = (event) => {        
        event.stopPropagation()    
        console.log('Button clicked')
      }

      const handleContentClick = (event) => {
        event.stopPropagation()  
        console.log('Content clicked')
    }
  return (
    <>
        <div className="request-row" onClick={() => setExpanded(!expanded)}>
            <div className="req-row">
                <div className="name">{item.name}</div>
                <div className="surname">{item.surname}</div>
                <div className="number">{item.number} <AiOutlineCopy /></div>
                <div className="email">{item.email}</div>
                <div className="birthday">{item.birthday}</div>
                <div className="create">{createdAt}</div>
                <button onClick={handleButtonClick}>Done</button>
            </div>
            {expanded && (
            <div className="req-row add-content" onClick={handleContentClick}>
                <div className="coment">
                    <div>Повідомлення заявника:</div>
                    <div>{item.clientText}</div>
                </div>
                <div className="coment">
                    <div>Коментар: </div>
                    <div>testovnia</div>
                    
                </div>
            </div>)} 
        </div> 
            
    </>
  );
}
