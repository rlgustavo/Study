using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour
{
    [SerializeField]
    private GameObject[] fruits;

    private BoxCollider2D col;

    // Start is called before the first frame update
    void Start()
    {
        col = GetComponent<BoxCollider2D>();
        StartCoroutine(SpawnFruit(1f));
        
    }

    IEnumerator SpawnFruit (float time)
    {
        yield return new WaitForSecondsRealtime(time);

        float x1 = transform.position.x - col.bounds.size.x / 2f;
        float x2 = transform.position.x + col.bounds.size.x / 2f;

        Vector3 posFruit = transform.position;
        posFruit.x = Random.Range(x1, x2);

        Instantiate(fruits[Random.Range(0, fruits.Length)], posFruit, Quaternion.identity); 

        StartCoroutine(SpawnFruit( Random.Range( 0.3f, 1f   )));
    }


}


























