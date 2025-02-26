using UnityEngine;

public class Coletavel : MonoBehaviour
{
    private SpriteRenderer sr;
    private CircleCollider2D circ;

    public GameObject Collected;

    public int Score;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        sr = GetComponent<SpriteRenderer>();
        circ = GetComponent<CircleCollider2D>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Player")
        {
            sr.enabled = false;
            circ.enabled = false;
            Collected.SetActive(true);

            GameController.instance.TotalScore += Score;
            GameController.instance.atualizarScore();


            Destroy(gameObject, .5f);
        }
    }
}
