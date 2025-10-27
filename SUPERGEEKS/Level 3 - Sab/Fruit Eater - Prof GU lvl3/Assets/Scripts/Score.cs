using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Score : MonoBehaviour
{
    public Text scoreText;
    public int score = 0;

    private void Awake()
    {
        scoreText = GameObject.Find("Pontuação").GetComponent<Text>();
        scoreText.text = "0";
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if( collision.tag == "Bomb")
        {
            transform.position = new Vector2(0, 100);
            Destroy(collision.gameObject);
            StartCoroutine( RestartGame() );
        }

        if( collision.tag == "Fruit")
        {
            score++;
            scoreText.text = score.ToString();
            Destroy(collision.gameObject);
        }

    }

    IEnumerator RestartGame()
    {
        yield return new WaitForSeconds(2f);
        SceneManager.LoadScene(0);
    }


}// Final da Classe

