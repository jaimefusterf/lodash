/*
Lodash library re-creation
Jaime Fúster de la Fuente
20/01/21
*/

const _ = {
    clamp(number, lower, upper){

        return Math.min(Math.max(number, lower), upper)
    },
    inRange(number, start, end){
        let st = start;
        let en = end;      
        
        if(en === undefined){
            en = st;
            st = 0;
        }else if (st > en){
            let aux = en;
            en = st;
            st = aux;
        }
        return number  >= st && number < en;
    },
    words(string){
        let str = string;
        let spaceRegex = /\b\w+\b/g;

        return str.match(spaceRegex);

    },
    pad(string, length){
        let str = string;
        let strLen = str.length; //get string length
        // check if string length < length
        if (strLen < length){
            //is length even? add evenly : compensate at the end
            /* if(length % 2 != 0) str = str.concat(' ');
            
            while(str.length < length){
                str = ' '.concat(str).concat(' ');
            } */
            let startPaddingLength = Math.floor((length - strLen)/2);
            let endPaddingLength = length - strLen - startPaddingLength;

            str = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
        }
        return str;
    },
    has(object, key){
        /* let obj = object;
         let keys = Object.keys(obj);
        return keys.includes(key);  */
        return object[key] != undefined ? true : false;
    },
    invert(object){
        let inverted = {};
        for (let key in object){
            let value = object[key];
            inverted[value] = key;
        }
        return inverted;
    },
    findKey(object, predicate){
        for (let key in object){
            if(predicate(object[key])){
                return key;
            }
        }
        return undefined;
    },
    drop(array, n = 1){
        return array.slice(n);
    },
    dropWhile(array, predicate){
        let falsyIndex = array.findIndex((e, index) => !predicate(e, index));

        return this.drop(array, falsyIndex);
    },
    chunk(array, size = 1){
        let chunked = [];

        for (let i = 0; i< array.length; i += size){
            let chunk = array.slice(i, i + size);
            chunked.push(chunk);
        }
        return chunked;
    }
};


// Do not write or modify code below this line.
module.exports = _;