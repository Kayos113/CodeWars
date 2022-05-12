public class StringSplit {
    public static String[] solution(String s) {
      String splitter = s;
      if(s.length() % 2 == 1) {
          splitter+= "_" ;
      }
      String[] charGroups = new String[splitter.length()/2];
      for(int i=0; i<splitter.length(); i+=2) {
        charGroups[i/2] = splitter.substring(i, i+2);
      }
      return charGroups;
    }
}
