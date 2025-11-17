using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public float movimentoVertical;
    public Rigidbody2D rb;

    // Tipos de Variaveis
    public string Nome = "Zezinho";
    public int Vida = 5;
    public bool estaVivo = false;
    public float velV = 8f;
    public float rot = 2;



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
