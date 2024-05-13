import { useState } from "react";
import "./Game.css"
import userEvent from "@testing-library/user-event";
import Button from "../../components/Button";


interface GameProps {
    word: string,
    kindOfWord: string,
    tries: number,
    points: number,
    setPoints: (points:number) => void,
    setTries: (tries:number) => void,
    setGameStage: (gameStage:string) => void,
}

const Game: React.FC<GameProps> = ({ word, kindOfWord, tries, setTries, setGameStage, points, setPoints }) => {
    const [lettersVisibility, setLettersVisibility] = useState<boolean[]>(
        Array.from({ length: Array.from(word).length }).fill(false) as boolean[]);
    const [wordLetters, setWordLetters] = useState<string[]>(Array.from(word));
    const [userLetter, setUserLetter] = useState<string>("");
    const [usedLetter, setUsedLetter] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const showEmptyWord = () => {
        return(
            <div className="word">
                {Array.from(word).map((letters, lettersIndex) => {
                    return lettersVisibility[lettersIndex]? 
                    <div className="letter" key={lettersIndex}><h1>{letters}</h1></div>
                     : <div className="letter" key={lettersIndex}><h1>{}</h1></div>;
                })}
            </div>
        );
    }

    const handleInput = ( userLetter:string ) => {
        let flag = 0;
        const arrayAux = lettersVisibility;

        wordLetters.forEach((letter, letterIndex) => {
            if(letter === userLetter) {
                flag++;
                if(!arrayAux[letterIndex]) {
                    setPoints(points + 150);
                }
                arrayAux[letterIndex] = true;
            }
        });
        
        if(flag === 0) {
            setTries(tries - 1);
            setLettersVisibility(arrayAux);
            if(userLetter)
            setPoints(points - 75);
        }

         if(tries === 0) {
             setGameStage("GameOver")
         }
        
        if(!arrayAux.includes(false)) {
            setGameStage("GameWin");
        }

        setInputValue("");
        setUsedLetter(() => {
            if(!usedLetter.includes(userLetter)) {
                return [...usedLetter, userLetter];
            }
            return usedLetter;
        });
    }

    const showUsedLetters = () => {
        return (
            <div className="usedLetters">
                Letras já utilizadas:
                {usedLetter.map((usedLetter, usedLetterIndex) => {
                    return(
                        <p key={usedLetterIndex}>{usedLetter}</p>
                    );
                })}
            </div>
        );
    }

    const handleChange = ( event:any ) => {
        setUserLetter(event.target.value);
        setInputValue(event.target.value);
    }

    const handleKey = (event:any) => {
        if(event.key === "Enter") {
            handleInput(inputValue.toUpperCase());
            setInputValue("");
        }
    } 

    return(
        <div className="Game">
            <h2>Pontuação: <span className="points">{points}</span></h2>
            <h1 className="onGameTitle">ADVINHE A PALAVRA:</h1>
            <h3 className="wordHint">DICA: <span className="hint">{kindOfWord}</span></h3>
            <p className="wordTries">Você ainda tem <span>{tries} tentativa(s)</span></p>
            {showEmptyWord()}
            <div className="userInteraction">
                <input 
                    type="text" 
                    onChange={(event) => {handleChange(event)}}
                    onKeyDown={(event) => {handleKey(event)}}
                    value =  {inputValue}  
                />
                <div className="buttonDiv">
                    <Button text="CHUTAR LETRA" functionOnClick={() => handleInput(userLetter.toUpperCase())}/>
                </div>
            </div>
            {showUsedLetters()}

        </div>
    );
}

export default Game;