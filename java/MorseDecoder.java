public class MorseCodeDecoder {
    public static String decode(String morseCode) {
      String[] morseWords = morseCode.split("   ");
      String[] morseLetters;
      String message = "";
      for(String word : morseWords) {
        morseLetters = word.split(" ");
        for(String letter: morseLetters) {
          message += MorseCode.get(letter);
        }
        message+=" ";
      }
      return message.substring(0, message.length()-1); //cut off extra space
    }
}
