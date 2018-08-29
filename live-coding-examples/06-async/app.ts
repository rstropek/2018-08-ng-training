// Gib alle 3 Sekunden "Hallo" aus
/*
function handler() {
  console.log('Hello');
  setTimeout(handler, 3000);
}

setTimeout(handler, 3000);
*/
function doComplexMath(x: number, callback: (x: number) => void) {
    // Simulate network call...
    setTimeout(() => {
        const resultFromDB = 42;
        callback(x * resultFromDB);
    }, 1000);
}

doComplexMath(5, (x: number) => console.log(x));

function doComplexMathAsync(x: number) : Promise<number> {
    return new Promise<number>((res, rej) => {
        // Simulate network call...
        setTimeout(() => {
            const resultFromDB = 42;
            const result = x * resultFromDB;
            res(result);
        }, 1000);

        if (false /*something bad happened*/) {
            rej('something bad happened');
        }
    });
}

async function run() {
    try {
        // Sequential execution
        const result = await doComplexMathAsync(21);
        const result2 = await doComplexMathAsync(42);
        console.log(`${result}, ${result2}`);

        // Parallel execution
        const allResults = await Promise.all([doComplexMathAsync(21), doComplexMathAsync(42)]);
        console.log(`${allResults[0]}, ${allResults[1]}`);
    } catch (ex) {
        console.error(ex);
    }
}

run();
