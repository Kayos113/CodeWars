/*
Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
*/

function keywordCipher(string, keyword){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let keyString = "";
  keyword.split('').forEach( l => {
    if(!keyString.includes(l)) {
      keyString+=l;
    }
  });
  alphabet.forEach( l => {
    if(!keyString.includes(l)) {
      keyString+=l;
    }
  });
  let key = keyString.split(''); // create the key array to compare against the alphabet array

  let newStr = "";
  string.toLowerCase().split('').forEach(c => {
    if(alphabet.includes(c))
      newStr += key[alphabet.indexOf(c)]; //swap letters based on index in array
    else
      newStr+=c; //put spaces, dashes, and punctuation in the correct spot
  });
  console.log(string);
  console.log(newStr);

  return newStr;
}
