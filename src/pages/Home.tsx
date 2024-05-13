import "./Home.css"
import Button from "../components/Button";

interface HomeProps {
    setGameStage: ( gameStage: string ) => void;
    handleWord: () => void,
    setPoints: (points:number) => void,
}

const Home: React.FC<HomeProps> = ( { setGameStage, handleWord, setPoints }) => {
    const handleStart = () => {
        handleWord();
        setPoints(0);
        setGameStage("GameDiffilcuty");
    }

    return(
        <div className="presentation">
            <img src="./Title.png" alt="" />
            <div className="presentation_description">
                <p>Click on the button to start the game</p>
                <Button text="START" functionOnClick={handleStart}/>
            </div>
        </div>
    );
}

export default Home;