using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public GameObject Obstacle;
    public GameObject[] SpawnPoints;
    public float Timer;
    public float timerBetweenSpawn;

    public float speedMultiplicador;

    public Text distanceUI;
    public float distance;

    // Update is called once per frame
    void Update()
    {
        distanceUI.text = "Distance: " + distance.ToString();

        speedMultiplicador += Time.deltaTime * 0.1f;
        Timer += Time.deltaTime;
        distance += Time.deltaTime * 0.8f;

        if(Timer > timerBetweenSpawn)
        {
            Timer = 0;
            int randNum = Random.Range(0, 2);
            Instantiate(Obstacle, SpawnPoints[randNum].transform.position , Quaternion.identity);
        }
    }
}
