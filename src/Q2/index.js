// @input : Promises[],
// @desc : Executes promises in sequence
// @output : promise

function seqPromises(arr){
    let acc = Promise.resolve();
    if(!Array.isArray(arr)){
        throw new Error('Passed in argument is not an array');
    }
    const reducer =  (acc,curr) => {
        return acc.then(() => Promise.resolve(curr));
    }
    arr.reduce(reducer,acc);
    return acc;
}

function parallePromises(arr){
    if(!Array.isArray(arr)){
        throw new Error('Passed in argument is not an array');
    }
    const ans = Promise.all(arr);
    return ans;
}