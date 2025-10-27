using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Killbox : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.tag == "Bomb")
        {
            Destroy(collision.gameObject);
        }
        if (collision.tag == "Fruit")
        {
            Destroy(collision.gameObject);
        }
    }
}
