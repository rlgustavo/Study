using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject Obstacle;
    public GameObject[] SpawnPoints;
    public float Timer;
    public float timerBetweenSpawn;

    // Update is called once per frame
    void Update()
    {
        Timer += Time.deltaTime;

        if(Timer > timerBetweenSpawn)
        {
            Timer = 0;
            int randNum = Random.Range(0, 3);
            Instantiate(Obstacle, SpawnPoints[randNum].transform.position , Quaternion.identity);
        }
    }
}
