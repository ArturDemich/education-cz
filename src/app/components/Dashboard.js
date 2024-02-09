'use client'
import ClientDataRow from "./ClientDataRow"
import { fetchClientsApi } from "../ui/data"
import { useEffect, useState } from "react"
import { ImSearch } from "react-icons/im"

export default function Dashboard({dataClient}) {   
    const [clients, setClients] = useState()
    const [activBtn, setActivBtn] = useState(3)
    const [searchInput, setSearchInput] = useState('')
     
    useEffect( () => {
        !clients && setClients(dataClient)
    }, [])

    const getData = async (btn, param) => {
        const data = await fetchClientsApi(param) 
        setActivBtn(btn)
        setClients(data)
    }

    const search = () => {
        let filterData = []
        clients.forEach(obj => {
            let equle
            for(let key in obj) {
                let item = String(obj[key])
                console.log('search11', item)
                if(item.toLowerCase().includes(searchInput.toLowerCase())) {
                    equle = true
                    filterData.push(obj)
                    return
                }
            }
        });
        setClients(filterData)
        console.log('search', filterData)
    }

    //console.log('DashboardFETCH', clients)
    return (
        <div className="board-container">            
            <section className="menu">
                <div>Заявки</div>
                <div>Користувачі</div>
            </section>
            <section className="data-boards">
            <div className="nav-bar">
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
                <section>
                    <input className="search-input" value={searchInput} placeholder="пошук" onChange={(event) => setSearchInput(event.target.value)} onBlur={() => search()} />
                    <ImSearch style={{left: 15}}/>
                </section>
                </div>
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