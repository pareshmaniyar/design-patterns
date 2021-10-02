// go through each elements in a group irrespective of how it is placed - could be arrays, sets, hashmap

function* counter(n: number) {
    let count = 0;
    for(let i = 0; i < n; i++) {
        yield count;
    }
}

let value = counter(5);
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());
