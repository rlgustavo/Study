using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Goal : MonoBehaviour
{
    public GameObject player;
    public Vector3 posInicial;

    
    void Start()
    {
        player = GameObject.FindWithTag("Player");
        posInicial = player.transform.position;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if( collision.tag == "Player")
        {
            collision.transform.position = posInicial;
        }
    }
}
