import "./GameOver.css"
import Button from "../../components/Button";

interface GameOverProps {
    word:string,
    setGameStage: ( gameStage:string ) => void,
}

const GameOver: React.FC<GameOverProps> = ({ setGameStage, word }) => {
    return(
        <div>
            <div className="loseTitle">
                <h1>YOU LOSE</h1>
                <h2>THE WORD WAS: <span>{word}</span></h2>
            </div>
            <Button text="PLAY AGAIN" functionOnClick={() => setGameStage("Home")}/>
        </div>
    );
}

export default GameOver;