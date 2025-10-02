import React from 'react';
import styled from 'styled-components';

const PlayerConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    margin-top: 50px;
`

const PlayerStyle = styled.iframe`
    border-radius: 16px;
    width: 340px;
    height: 80px;
    border: none;
`

function PlayerMusic (){
    return(
        <PlayerConteiner>

                <PlayerStyle 
                    src="https://open.spotify.com/embed/track/3XVBdLihbNbxUwZosxcGuJ?utm_source=generator"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                
                />


        </PlayerConteiner>
    )
}

export default PlayerMusic;