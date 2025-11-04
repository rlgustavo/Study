using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public float velV = 5f; // Velocidade Vertical da bruxa
    public float movimentoVertical;
    public Rigidbody2D rb;
    

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        movimentoVertical = Input.GetAxis("Vertical");

        rb.velocity = new Vector2(0, movimentoVertical * velV);


    }
}
