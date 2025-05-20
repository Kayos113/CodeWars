public class Accumul {
    public static String accum(String s) {
      String ret = "";
      for(int i=0; i<s.length(); i++){
        ret+=(s.charAt(i)+"").toUpperCase();
        for(int j=0; j<i; j++) {
          ret+=(s.charAt(i)+"").toLowerCase();
        }
        if(i<s.length()-1)
          ret+="-";
      }
      return ret;
    }
}
