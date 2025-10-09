using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{
    [Header(" CENA INICIAL ")]
    [SerializeField] private string nomeDoLevel;

    public void Jogar()
    {
        SceneManager.LoadScene( nomeDoLevel );
    }
    


    public void Sair()
    {
        Application.Quit();
    }

    
}
