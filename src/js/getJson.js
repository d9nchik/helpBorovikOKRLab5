async function getJson(url) {
    const res = await fetch(url);
    return await res.json();
}

export const json1 = getJson('http://localhost:3000/pizzaJson1');
export const json2 = getJson('http://localhost:3000/pizzaJson2');
export const json3 = getJson('http://localhost:3000/pizzaJson3');
