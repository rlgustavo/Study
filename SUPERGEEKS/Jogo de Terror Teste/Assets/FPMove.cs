using UnityEngine;
using UnityEngine.SceneManagement;

public class FPMove : MonoBehaviour
{
    public float distanciaInteração;
    public Transform Player;
    public LayerMask layerItem;


    [Header("MOVIMENTO")]
    public float speed = 10f;       // For�a aplicada ao player
    public float maxSpeed = 5f;     // Velocidade m�xima horizontal
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        rb.freezeRotation = true;   // Evita que o player tombe
    }

    void FixedUpdate()
    {
        MovePlayer();
    }

    void MovePlayer()
    {
        // Input do teclado
        float horizontal = Input.GetAxis("Horizo0ntal"); // A/D
        float vertical = Input.GetAxis("Vertical");     // W/S

        // Dire��o de movimento relativa ao player
        Vector3 moveDir = transform.right * horizontal + transform.forward * vertical;
        moveDir = moveDir.normalized;

        // Aplica for�a ao Rigidbody
        rb.AddForce(moveDir * speed, ForceMode.Force);

        // Limita velocidade horizontal
        Vector3 horizontalVel = new Vector3(rb.linearVelocity.x, 0f, rb.linearVelocity.z);
        if (horizontalVel.magnitude > maxSpeed)
        {
            horizontalVel = horizontalVel.normalized * maxSpeed;
            rb.linearVelocity = new Vector3(horizontalVel.x, rb.linearVelocity.y, horizontalVel.z);
        }
    }

    void InteragindoComItem()
    {
        // pega a tecla
        if(Input.GetKeyDown(KeyCode.E))
        {
            RaycastHit hit;

            bool Ray = Physics.Raycast(Player.position, Player.forward, out hit, distanciaInteração, layerItem);

            if (Ray)
            {
                if (hit.collider.CompareTag("Item"))
                {
                    Debug.Log("Pegou o Item");
                    Destroy(hit.collider.gameObject);

                }
            }
        }
        // criar o Raycast
    }

}
