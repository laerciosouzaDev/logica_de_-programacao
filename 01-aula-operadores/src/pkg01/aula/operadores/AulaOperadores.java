package pkg01.aula.operadores;

public class AulaOperadores {

    public static void main(String[] args) {
        // op-aritméticos
        
        int a = 10 + 1;
        
        int b = a + 10;
        
        int c = b * 3;
        
        int d = c / 2;
        
        double e = 4.5 + 1.7;
        
        System.out.println("o valor de A :" + a);
        
        a += 10;
        
        System.out.println("O valor de A: " + a);
        System.out.println("O valor de B: " + b);
        System.out.println("O valor de C: " + c);
        System.out.println("O valor de D: " + d);
        System.out.println("O valor de E: " + e);
        System.out.println(10 + 10);
        
        //------------------------------------------
        // operadores logicos
        
        boolean ehMaior = 10 > 20;
        boolean ehMenor = 10 < 20;
        boolean ehMaiorIgual = 10 >= 20;
        boolean ehMenorIgual = 10 <= 20;
        boolean ehIgual = 10 == 10;
        boolean ehDiferente = 10 != 20;
        
        
        System.out.println(ehMaior);
        System.out.println(ehMenor);
        System.out.println(ehMaiorIgual);
        System.out.println(ehMenorIgual);
        System.out.println(ehIgual);
        System.out.println(ehDiferente);
        
        // lógicos
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = 10 > 9 || 5 > 1;
        boolean valor6 = (10 > 9) && (5 > 1);
        
        // negação
        
        boolean negacao = !true;
        boolean negacao2 = !valor6;
        
        
    }
}
