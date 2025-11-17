using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuCrontroller : MonoBehaviour
{
    // FUNÇÃO
    public void Play()
    {
        SceneManager.LoadScene("GAME");
    }

    public void Quit()
    {
        Application.Quit();
    }



}
