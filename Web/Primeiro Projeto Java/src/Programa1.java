import java.util.Scanner;

public class Programa1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o primeiro Numero: ");
        int num1 = sc.nextInt();

        System.out.println("Digite o segundo Numero: ");
        int num2 = sc.nextInt();

        System.out.println("Digite o terceiro Numero: ");
        int num3 = sc.nextInt();


        int soma = num1 + num2 + num3;

        System.out.println("a soma dos numeros: " + num1 + num2 + num3 + " é igual a " + soma);

    }
}
