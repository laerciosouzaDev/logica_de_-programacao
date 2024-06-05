
package exe.pkg05;

import java.util.Scanner;


public class Exe05 {


    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.println("digite graus celsius: ");
        double celsius = leia.nextDouble();
        
        double fahrenhait = (1.8 * celsius)+32;
        double kelvin = celsius + 273.15;
        
        System.out.println("CELSIUS: " + celsius + "°C");
         System.out.println("FAHRENHAIT: " + fahrenhait + "°F");
          System.out.println("KELVIN: " + kelvin + "°K");
          
    }
    
}
