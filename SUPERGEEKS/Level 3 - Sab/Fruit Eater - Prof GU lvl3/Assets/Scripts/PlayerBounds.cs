using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerBounds : MonoBehaviour
{
    public float minX, maxX;

    void Update()
    {
        Vector3 posPlayer = transform.position;

        if( posPlayer.x > maxX)
        {
            posPlayer.x = maxX;
        }

        if( posPlayer.x < minX)
        {
            posPlayer.x = minX;
        }

        transform.position = posPlayer;
        
    }
}
