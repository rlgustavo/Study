using UnityEngine;

public class Player : MonoBehaviour
{
    public Rigidbody2D myBody;
    public float speed;


    void Start()
    {
        myBody = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        Move();
        
    }// final UPDATE


    //MOVIMENTANDO O PLAYER
    void Move()
    {
        Vector2 vel = myBody.velocity;
        vel.x = Input.GetAxis("Horizontal") * speed;
        myBody.velocity = vel;

    } //final Move

} // class
