"use strict";

let i = 1;
while ( i <= 16 ) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}