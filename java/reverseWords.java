public class Kata
{
  public static String reverseWords(final String original)
  {
    String[] words = original.split(" ");
    String newMessage = "";
    for(int i=0; i<words.length; i++) {
      for(int j=words[i].length()-1; j>=0; j--) {
        newMessage+=words[i].charAt(j);
      }
      if(i!=words.length-1) {
        newMessage+=" ";
      }
    }
    while(newMessage.length()<original.length()){
      newMessage+=" ";
    }
    return newMessage;
  }
}
