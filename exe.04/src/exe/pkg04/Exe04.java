
package exe.pkg04;

import java.util.Scanner;

public class Exe04 {

    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.println("Digite total eleitores do municipio: ");
        int eleitores = leia.nextInt();
        
        System.out.println("Digite votos em branco: ");
        int votosBranco = leia.nextInt();
        
        System.out.println("Digite votos nulos: ");
        int votosNulos = leia.nextInt();
        
        System.out.println("Digite votos validos: ");
        int votosValidos = leia.nextInt();
        
        double result1 = (votosBranco * 100)/eleitores;
        System.out.println("votos Brancos: " +result1 + "%");
        double result2 = (votosNulos * 100)/eleitores;
        System.out.println("votos Nulos: " + result2 + "%");       
        double result3 = (votosValidos * 100)/eleitores;
        System.out.println("votos validos: " +result3 + "%");
        
        
        
        
        
        
        
        
    }
    
}
