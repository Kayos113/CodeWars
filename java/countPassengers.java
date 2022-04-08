import java.util.ArrayList;

class Metro {

  private static int numPassengers=0;

  public static int countPassengers(ArrayList<int[]> stops) {
    for(int i=0; i<stops.size(); i++) {
      numPassengers += stops.get(i)[0];
      numPassengers -= stops.get(i)[1];
    }
    return getNumPassengers();
  }

  public static int getNumPassengers() {
    return numPassengers;
  }
}
