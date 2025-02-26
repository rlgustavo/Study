using UnityEngine;

public class fallingPlat : MonoBehaviour
{
    public float fallingTime;
    private TargetJoint2D target;
    private BoxCollider2D boxCollider;

    private void Start()
    {
        target = GetComponent<TargetJoint2D>();
        boxCollider = GetComponent<BoxCollider2D>();

    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            Invoke("Falling", fallingTime);

        }
    }

    void Falling()
    {
        target.enabled = false;
        boxCollider.isTrigger = true;
    }

}
