public class Sum
{
   public int GetSum(int a, int b)
   {
     if(a==b) {
       return a;
     }
    System.out.println("A: " + a + "  B: " + b);
    int delta = (b-a)/(Math.abs(b-a)); // this will always be either +1 or -1, allowing us to always move from a to b
    System.out.println("Delta: " + delta);
    int sum = 0;
    for(int i=a; i!=b; i+=delta) {
      sum+=i;
    }
    return sum+b;
   }
}
