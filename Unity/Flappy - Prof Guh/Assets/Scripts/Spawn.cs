using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawn : MonoBehaviour
{
    public BoxCollider2D col;
    public GameObject[] spawnPrefab;

    // Start is called before the first frame update
    void Start()
    {
        col = GetComponent<BoxCollider2D>();
    }

    IEnumerator SpawnBullet (float time)
    {
        yield return new WaitForSeconds (time);

        float y1 = transform.position.y - col.bounds.size.y / 2f;
        float y2 = transform.position.y + col.bounds.size.y / 2f;

        Vector3 temp = transform.position;
        temp.y = Random.Range(y1, y2);

        Instantiate(spawnPrefab[Random.Range(0, spawnPrefab.Length)], temp, Quaternion.identity  );

        StartCoroutine(SpawnBullet (Random.Range (1f, 2f) ));



    }

}
