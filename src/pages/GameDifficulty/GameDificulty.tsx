import "../Home.css";
import Button from "../../components/Button";
import "./GameDifficulty.css";

interface GameDifficulty {
    setGameDifficulty: ( gameDifficulty:number ) => void,
    setGameStage: ( gameStage: string ) => void
}

const GameDificulty: React.FC<GameDifficulty> = ( { setGameDifficulty, setGameStage } ) => {
    const handleClick = (difficulty:string, stage: string) => {
        switch(difficulty) {
            case "EASY":
                setGameDifficulty(8);
                break;
            case "MEDIUM":
                setGameDifficulty(4);
                break;
            case "HARD":
                setGameDifficulty(2);
                break;
                
        }
        setGameStage(stage);
        
    }

    return(
        <div className="GameDifficulty">
            <h1>SELECIONE A DIFICULDADE</h1>
            <div className="button_trio">
                <Button text="FÁCIL" functionOnClick={() => handleClick("EASY", "Game")} />
                <Button text="MÉDIO" functionOnClick={() => handleClick("MEDIUM", "Game")}/>
                <Button text="DIFICL" functionOnClick={() => handleClick("HARD", "Game")} />
            </div>
        </div>
    );
}

export default GameDificulty;