export async function sendData(data) {
    await fetch(' http://localhost:3000/completedOrders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
