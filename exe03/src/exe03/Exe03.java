/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exe03;

import java.util.Scanner;
public class Exe03 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Digite sua idade:");
        
        int anos = leia.nextInt();
        int meses = leia.nextInt();
        int dias = leia.nextInt();
        
        int totalDias = (anos*365) + (meses * 30) + dias;
        
        System.out.println("idade em dias: " + totalDias);
        
                
        
    }
    
}
