
package exe.pkg06;

import java.util.Scanner;


public class Exe06 {

    public static void main(String[] args) {
         Scanner leia = new Scanner(System.in);
         
         int A = 10;
         
         int B = 20;
         
         int aux = A;
         
         A = B;
         
         B = aux;
         
         System.out.println("VALOR de A: " + A);
         System.out.println("VALOR de B: " + B);
    }
    
}
