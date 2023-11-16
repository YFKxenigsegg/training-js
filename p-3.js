// 1
function customSleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('some work'));
        }, ms);
    });
}

//  customSleep(1000)
//      .then(console.log('----'));

// 2
function customSleep2(ms, callback) {
    setTimeout(callback, ms);
}

// customSleep2(1000, () => console.log('some work2'));

// 3
const urls = ['', '', ''];
// (1) with count
function downloadAll(urls) {
    let count  = urls.length;
    let results = [];
    return new Promise((resolve) => {
        urls.forEach((x, index) => {
            fetch(x).then((data) => {
                results[index] = data;
                --count;
                if(!count) {
                    resolve(results);
                }
            })
        });
    });
}

// (2) witout duplicating fetch()

// downloadAll(urls);

// 4

// console.log("Step 1: In global scope")

// setTimeout(() => console.log("Step 2: In setTimeout"));

// new Promise((resolve) => {
//   console.log('Step 3: In promise constructor');
// }).then(() => console.log('Step 4: In then'));

// setTimeout(() => console.log("Step 5: In another setTimeout"))


// 5

// console.log("Step 1: In global scope")

// setTimeout(() => console.log("Step 2: In setTimeout"));

// new Promise((resolve) => {
//   console.log('Step 3: In promise constructor');
//   resolve();
// }).then(() => console.log('Step 4: In then'))
//   .then(() => console.log('Step 5: In another then'));

// setTimeout(() => console.log("Step 6: In another setTimeout"))

// new Promise((resolve) => {
//   console.log('Step 7: In promise constructor');
//   resolve();
// }).then(() => console.log('Step 8: In then'))
//   .then(() => console.log('Step 9: In another then'));

// 1 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 -> 2 -> 6 (wrong)
// 1 3 7 4 8 5 9 2 6
