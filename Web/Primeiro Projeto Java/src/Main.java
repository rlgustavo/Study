//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
void main() {
    Scanner sc = new Scanner(System.in);

    System.out.println("Digite seu nome: ");
    String nome = sc.nextLine();

    System.out.println("Digite sua idade: ");
    int idade = sc.nextInt();

    System.out.println("Digite sua altura: ");
    double altura = sc.nextDouble();

    System.out.println("Digite sua peso: ");
    double peso = sc.nextDouble();

    System.out.println("Digite sua " +
            "comida: ");
    String comida = sc.nextLine();

    System.out.println(peso);
    System.out.println(altura);
    System.out.println(nome);
    System.out.println(comida);
    System.out.println(idade);

}
