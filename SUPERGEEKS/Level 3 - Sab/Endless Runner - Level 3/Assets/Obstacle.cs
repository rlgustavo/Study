using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstacle : MonoBehaviour
{

    public Rigidbody2D rb;
    public float speed;
    public GameManager gm;


    // Start is called before the first frame update
    void Start()
    {
        gm = GameObject.FindGameObjectWithTag("GameManager").GetComponent<GameManager>();

        rb = GetComponent<Rigidbody2D>();    

    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = Vector2.left * ( speed + gm.speedMultiplicador );
    }
}
