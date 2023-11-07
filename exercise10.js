// 1. a function to convert Excel sheet column title to its corresponding column number.

const toNumber = (n) =>{
    let result = 0;
    for (i = 0; i < n.length; i++){
        result *= 26;
        result += n[i].charCodeAt(0) - "A".charCodeAt(0) + 1
    }
    return result;

}

console.log(toNumber("AB"));

//2. Given a non-empty array of integers nums, every element appears twice except for one.

const array = (x = []) =>{
    const newArray = []
    x.sort()
    for(j = 0; j < x.length; j++){

        x[j] != x[j+1] && x[j] != x[j-1] ? newArray.push(x[j]) : null

    }
    return newArray

}

console.log(array(x = [4,1,2,1,2])); 

// 3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const anagram = (string1 = "", string2 = "") =>{
    if(string1.length != string2.length) return false
    string1 = string1.split("").sort().join("")
    string2 = string1.split("").sort().join("")
    return string1 === string2
    
}

console.log(anagram(string1 = "anagram", string2 = "nagaram"));

//4. 
