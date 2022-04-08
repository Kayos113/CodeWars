function spinWords(string){
  let words = string.split(" ");
  words.forEach( (word, index) => {
    if(word.length>=5) {
      words[index] = word.split("").reverse().join("");
    }
  })
  return words.join(" ");
}
