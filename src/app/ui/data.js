

export async function fetchClientsApi(param) {
    const URL = 'http://localhost:3000/api/data'
    try {
        const res = await fetch(`${URL}?query=${encodeURIComponent(param)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        const reversClients = result.reverse()
        console.log('fetchData', result);
        return reversClients;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function postDataClientApi(formData) {
    const URL = 'http://localhost:3000/api/data';
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Конвертуємо об'єкт formData у JSON і передаємо його як тіло запиту
        });

        if (!response.ok) {
            throw new Error('Failed to send data to server');
        }

        const data = await response.json(); // Отримуємо дані з сервера (якщо потрібно)
        console.log('postDataClientApi data', data)
        return data; // Повертаємо дані, отримані від сервера (якщо потрібно)
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}