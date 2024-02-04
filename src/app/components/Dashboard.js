'use client'
import ClientDataRow from "./ClientDataRow"
import { fetchClientsApi } from "../ui/data"
import { useEffect, useState } from "react"

export default function Dashboard({dataClient}) {   
    const [clients, setClients] = useState()
    const [activBtn, setActivBtn] = useState(3)
     
    useEffect( () => {
        !clients && setClients(dataClient)
    }, [])

    const getData = async (btn, param) => {
        const data = await fetchClientsApi(param) 
        setActivBtn(btn)
        setClients(data)
    }

    //console.log('DashboardFETCH', clients)
    return (
        <div className="board-container">            
            <section className="menu">
                <div>Заявки</div>
                <div>Користувачі</div>
            </section>
            <section className="data-boards">
                <section className="request-bar">
                    <div className={activBtn === 1 ? "requests-btn" + ' ' + "active-btn" : "requests-btn"} onClick={() => getData(1, 'new')}>
                        <span>Нові заявки</span> 
                    </div>
                    <div className={activBtn === 2 ? "requests-btn" + ' ' + "active-btn" : "requests-btn"} onClick={() => getData(2, 'work')}>
                        <span>Оброблені заявки</span>                        
                    </div>
                    <div className={activBtn === 3 ? "requests-btn" + ' ' + "active-btn" : "requests-btn"} onClick={() => getData(3, '')}>
                        <span>Всі заявки</span>                        
                    </div>
                </section>
                <section className="requests">
                <div className="request-row head-requests">
                    <div className="name">Ім'я</div>
                    <div className="surname">Прізвище</div>
                    <div className="number">Моб. телефон</div>
                    <div className="email">Ел. пошта</div>
                    <div className="birthday">Народження</div>
                    <div className="created">Дата заявки</div>                               
                </div>
                {clients && clients.map((elem) => (<ClientDataRow key={elem._id} item={elem} />))}                    
                </section>
            </section>
        </div>
    )
}