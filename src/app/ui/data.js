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
        console.log('fetchData', result);
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
