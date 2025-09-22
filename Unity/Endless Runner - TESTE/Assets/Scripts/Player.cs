using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public Rigidbody2D rb;
    public Animator anim;

    [Header("Move Player")]
    [SerializeField] private bool runBegun;
    [SerializeField] private float moveSpeed;
    [SerializeField] private int jumpForce;
    


    [Header("Collision Info")]
    public float groundCheckDistance;
    public LayerMask whatIsGround;
    [SerializeField] private bool isGrounded;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();

    }

    // Update is called once per frame
    void Update()
    {
        if (runBegun == true)
        {
            rb.velocity = new Vector2(moveSpeed, rb.velocity.y);
            
        }

        AnimationControllers();
        CheckGround();
        CheckInput();

    }


    void AnimationControllers()
    {
        anim.SetBool("isGrounded", isGrounded);
        anim.SetFloat("xVelocity", rb.velocity.x);
        anim.SetFloat("yVelocity", rb.velocity.y);
    }

    void CheckGround()
    {
        isGrounded = Physics2D.Raycast(transform.position, Vector2.down, groundCheckDistance, whatIsGround);

    }

    void CheckInput()
    {
        if (Input.GetKeyDown(KeyCode.Z))
        {
            runBegun = true;
        }

        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            Debug.Log("Estou Pulando");
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
        }
    }


    private void OnDrawGizmos()
    {
        Gizmos.DrawLine(transform.position, new Vector2(transform.position.x, transform.position.y - groundCheckDistance));
    }

}
