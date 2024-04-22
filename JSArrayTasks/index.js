const a = [1, 9, 3, 6, 4, 3, 2, 21, 1, 6];
const r = [];

// Getting Repeating Elements
for(let i=0; i < a.length; i++) {
    for(let j=i+1; j < a.length; j++) {
        if(a[i] == a[j]) {
            r.push(a[j]);
        }
    }
}

console.log('Array is: ' + a.toString());
console.log('Repeating Elements are: ' + r.toString());

// Removing Duplicates
let matchedElements = 0;
let lastIndex = 0;
let x = 0;
for(let i=0; i < r.length; i++){
    matchedElements = 0;
    for(let j=0; j < a.length; j++){
        if(r[i] == a[j]){
            matchedElements += 1;
            if(matchedElements > 1) {
                lastIndex = a.length - 1;
                x = j;
                while(x < lastIndex){
                    a[x] = a[x+1];
                    x++;
                }
                a[lastIndex] = null;
                a.length--;
            }
        }
    }
}

console.log('After removing duplicates array is: ' + a.toString());