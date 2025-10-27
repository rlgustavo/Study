using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour
{
    public float spawnDelay = 3f;

    public GameObject carPrefab;

    public float tempo = 3f;

    // RODA O TEMPO INTEIRO
    void Update()
    {

        tempo -= Time.deltaTime;
        if( tempo <= 0f)
        {
            CriaCarro();

            tempo = spawnDelay;
        }
    }

    void CriaCarro()
    {
        Instantiate(carPrefab, transform.position, transform.rotation);
    }
}
