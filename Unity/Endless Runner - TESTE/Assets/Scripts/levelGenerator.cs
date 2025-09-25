using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class levelGenerator : MonoBehaviour
{
    public Transform[] levelPart;
    public Vector3 nextPartPosition;


    public float distanceToSpawn;
    public float distanceToDelete;
    public Transform player;

    // Update is called once per frame
    void Update()
    {
        DeletePlatform();
        GeneratePlatform();
    }


    void GeneratePlatform()
    {
        while (Vector2.Distance(player.transform.position, nextPartPosition) < distanceToSpawn)
        {
            int randNum = Random.Range(0, levelPart.Length);
            Transform part = levelPart[randNum];

            Vector2 newPosition = new Vector2( nextPartPosition.x - part.Find("StartPoint").position.x, 0);

            Transform newPart = Instantiate(part, newPosition, transform.rotation, transform);

            nextPartPosition = newPart.Find("EndPoint").position;
        }
    }

    void DeletePlatform()
    {
        if( transform.childCount > 0 )
        {
            Transform partToDelete = transform.GetChild(0);

            if(Vector2.Distance(player.transform.position, partToDelete.transform.position) > distanceToDelete)
            {
                Destroy(partToDelete.gameObject);
            }
        }
    }
}
