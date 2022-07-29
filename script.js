

const hasMoreVowels = word => {
    const vowels = Array.from(word).filter(letter => 'aeiou'.includes(letter)).length
    const nonVowels = Array.from(word).filter(letter => 'qwrtypsdfghjklzxcvbnm'.includes(letter)).length
    if (vowels > nonVowels) {
        return true;
    }
    else {
        return false
    }

}

console.log(hasMoreVowels('ddd'));