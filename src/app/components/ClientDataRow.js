'use client'
import React, { useState } from "react"
import moment from "moment";
import { AiOutlineCopy } from "react-icons/ai"


export default function ClientDataRow({ item }) {
    //console.log('ClientDataRow', typeof item)
    const createdAt = moment(item.createdAt).format('YYYY.MM.DD - HH:mm')
    const [expanded, setExpanded] = useState(false)
    const [inputText, setInputText] = useState(item.clientText)
   

    const handleButtonClick = (event) => {        
        event.stopPropagation()    
        console.log('Button clicked')
      }

      const handleContentClick = (event) => {
        event.stopPropagation()  
        console.log('Content clicked')
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
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
            <div className="add-content" onClick={handleContentClick}>
                {item.clientText && (
                <div className="coment">
                    <div className="head-content">Повідомлення:</div>
                    <div className="content-text">{item.clientText}</div>
                </div>)}
                <div className="coment">
                    <div className="head-content">Коментар: </div>
                    <input className="input-coment" value={inputText} onChange={handleInputChange} />
                </div>
            </div>)} 
        </div> 
            
    </>
  );
}
