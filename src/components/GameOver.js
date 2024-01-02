import GameState from "./GameState"

function GameOver({ gameState }) {
    switch(gameState){
        case GameState.inProgress:
            return <></>
        case GameState.playerOWins:
            return <div className="game-over">O wins</div>
        case GameState.playerXWins:
            return <div ClassName="game-over">X Wins</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>

    }
}

export default GameOver;