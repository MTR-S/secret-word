import "./GameWin.css";
import Button from "../../components/Button";

interface GameWinProps {
    setGameStage: ( gameStage:string ) => void,
}

const GameWin: React.FC<GameWinProps> = ({ setGameStage }) => {
    return(
        <div className="gameWin">
            <div className="winTitle">
                <h1>CONGRATULATIONS, YOU WON!</h1>
            </div>
            <Button text="PLAY AGAIN" functionOnClick={() => setGameStage("Home")}/>
        </div>
    );
}

export default GameWin;