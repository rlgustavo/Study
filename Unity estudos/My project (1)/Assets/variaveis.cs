using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class variaveis : MonoBehaviour
{
    public string nome = "Prof Gu";
    public int anoAtual = 2025;
    public int anoNasc = 2001;

    // Start is called before the first frame update
    void Start()
    {

        Debug.Log("Meu nome é " + nome + " " + "Eu nasci no ano de " + anoNasc);
        Debug.Log("Minha idade é: " + (anoAtual - anoNasc)); 

        //CONDICIONAIS
        if( 30 > 10) 
        {
            Debug.Log( " Esse valor é maior" );
        }
        else 
        {
            Debug.Log( " Ele é menor ");
        }   
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
