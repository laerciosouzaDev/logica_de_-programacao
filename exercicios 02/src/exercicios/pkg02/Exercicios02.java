/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicios.pkg02;

import java.util.Scanner;

public class Exercicios02 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
      
        System.out.println("Digite a base");
        double base = leia.nextDouble();
        System.out.println("Digite a altura");
        double altura = leia.nextDouble();
        
        double result = (base * altura)/2;
        
        System.out.println("Area do triangulo é igual: " + result);
    }
    
}
