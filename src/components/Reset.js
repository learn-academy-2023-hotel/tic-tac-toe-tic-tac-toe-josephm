import GameState from "./GameState";

function Reset({ gameState, onReset }) {
    if(gameState === GameState.inProgress) {
        return;
    }
    return <button onClick={onReset} className="button">Reset</button>
}

export default Reset;