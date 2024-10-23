function sumSequence(n) {
    if (n === 0) return '0.00'; // Return '0.00' for n = 0

    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += 1 / Math.pow(2, i); // Add 1/(2^i) to the sum for each step
    }
  
    return sum.toFixed(2); // Return the result rounded to two decimal places
}

function mergeArrays(...arrays) {
    let newArray = [];

    for(let arr of arrays){
        newArray = newArray.concat(arr);
    }

    return newArray;
}

function isPalindrome(str){
    const charCount = {};
    
    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Count how many characters have an odd count
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    
    // A string can be rearranged into a palindrome if there's at most one odd character count
    return oddCount <= 1;
}

function countLetters(str) {
    // Check if the input is empty or not a string
    if (!str || typeof str !== 'string') {
        return {};
    }
    
    const letterCount = {};

    // Iterate through each character in the string
    for (let char of str) {
        // Ignore spaces
        if (char !== ' ') {
            // Increment the count for the character
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    return letterCount;
}

function divideArrays(arr, size) {
    // Check for invalid size
    if (size <= 0) {
        return [];
    }
    
    // If the original array length is less than or equal to size, return the original array
    if (arr.length <= size) {
        return [arr];
    }

    const result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        // Slice the array into smaller chunks
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;
}

function encrypt(str, n) {
    // Return the original string if n is 0 or negative
    if (n <= 0) {
        return str;
    }
    
    let encrypted = '';

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Check if the character is an uppercase letter
        if (char >= 'A' && char <= 'Z') {
            // Calculate the new character with the left shift
            const newChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - n + 26) % 26) + 'A'.charCodeAt(0));
            encrypted += newChar;
        } else {
            // If it's not a letter, just add it as is (though this shouldn't happen based on the problem statement)
            encrypted += char;
        }
    }

    return encrypted;
}


