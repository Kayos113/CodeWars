public class Printer {

    public static String printerError(String s) {
      int lowerBound = (int) 'a';
      int upperBound = (int) 'm';
      int currCode;
      int errorCount = 0;
      for( char c : s.toCharArray() ) {
        currCode = (int) c;
          if( currCode < lowerBound || currCode > upperBound ) {
            errorCount++;
          }
      }
      return errorCount+"/"+s.length();
    }
}
