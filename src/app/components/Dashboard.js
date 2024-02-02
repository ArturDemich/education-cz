


export default function Dashboard() {

    return (
        <div className="board-container">            
            <section className="menu">
                <div>Заявки</div>
                <div>Користувачі</div>
            </section>
            <section className="data-boards">
                <section className="request-bar">
                    <div>
                        Нові заявки
                    </div>
                    <div>
                        Оброблені заявки
                    </div>
                    <div>
                        Всі заявки
                    </div>
                </section>
                <section className="requests">
                    <div className="request-row">
                        <div>
                            Ivan
                        </div>
                        <div>
                            Popovych
                        </div>
                        <div>
                            +380992354123
                        </div>
                        <div>
                            testovich@gmai.com
                        </div>
                        <div>
                            Date: 2024/03/02 - 1:30
                        </div>
                        <div className="request-btn">
                            Done
                        </div>                        
                    </div>
                    
                </section>
            </section>
        </div>
    )
}