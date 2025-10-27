using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car : MonoBehaviour
{
    public Rigidbody2D rb;
    public float vel = 1f;

    public float minVel = 8f;
    public float maxVel = 12f;


    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        vel = Random.Range(minVel, maxVel);
    }

    // Update is called once per frame
    void Update()
    {
        Vector2 forward = new Vector2(transform.right.x, transform.right.y);
        rb.MovePosition(rb.position + forward * Time.deltaTime * vel);

    }


}























