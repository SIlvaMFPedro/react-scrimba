import React from "react";

function GameOver(props) {
    return (
        <div id='Gameboard' style={{width: props.width, height: props.height, borderWidth: props.width / 50}}>
            <div id='GameOver' style={{ fontSize: props.width / 15}}>
                <div id='GameOverText'>GAME OVER!</div>
                <div>Score: {props.score}</div>
                <div>
                    {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}{props.highScore}
                </div>
                <div id='PressSpaceText'>Press Space to restart</div>
            </div>
        </div>
    );
}

export default GameOver;