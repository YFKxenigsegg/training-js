let count = 0;

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
const getData = async () => {
    await sleep(5000);
    return Promise.resolve(++count);
};

const getJsonMemoize = memoize(getData, 1000);

(async function() {
    await sleep(3000);
    console.log(await getJsonMemoize()); // 1  
    console.log(await getJsonMemoize()); // 1  
    await sleep(3000);
    console.log(await getJsonMemoize()); // 2  
    console.log(await getJsonMemoize()); // 2  
}())

function memoize(makeRequest, ms) {
    const cache = {};
    return async () => {
        if (!cache[count]) {
            current = makeRequest();
            cache[await current] = current;
        } else {
            setTimeout(() => {
                delete cache[count];
            }, ms);
        }
        return cache[count];
    }
}
