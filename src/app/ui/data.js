'use client'

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
