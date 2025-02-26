        using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public int TotalScore;

    public static GameController instance;

    public Text ScoreText;



    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        instance = this;
    }

    public void atualizarScore()
    {
        ScoreText.text = TotalScore.ToString();

    }
}
