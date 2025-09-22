using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    //Mover o Player
    public float moveSpeed;
    public int jumpForce;
    public bool runBegun; // verdadeiro ou falso

    //COLISOES
    public bool isGrounded;
    public float groundDistance;
    public LayerMask ground;

    public Rigidbody2D rb;
    public Animator anim;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if(runBegun == true)
        {
            //ir para frente
            rb.velocity = new Vector2(moveSpeed, rb.velocity.y);

        }

        BotaoDoTeclado();
        AnimationControllers();
        CheckGround();


    }

    // CRIANDO UMA Função
    void BotaoDoTeclado()
    {
        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            Debug.Log("Estou Pulando");
        }

        if (Input.GetKeyDown(KeyCode.Z))
        {
            runBegun = true;
        }
    }

    void AnimationControllers()
    {
        //Fazendo a Animação de Andar
        anim.SetFloat("xVelocity", rb.velocity.x);
        anim.SetFloat("yVelocity", rb.velocity.y);
        anim.SetBool("isGrounded", isGrounded);
    }

    //TOCANDO NO CHAO 
    void CheckGround()
    {
        isGrounded = Physics2D.Raycast(transform.position, Vector2.down, groundDistance, ground);
    }

    private void OnDrawGizmos()
    {
        Gizmos.DrawLine(transform.position, new Vector2(transform.position.x, transform.position.y - groundDistance));
    }

}
