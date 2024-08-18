export const getRandomItems = (arr, numItems) => {
    let result = [];

    for (let i = 0; i < numItems; i++) {
        if (arr.length === 0) break; // Exit loop if there are no more items to pick
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomItem = arr.splice(randomIndex, 1)[0]; // Remove item from copy
        result.push(randomItem);
    }

    return result;
}