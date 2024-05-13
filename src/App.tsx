import React from 'react';
import './App.css';
import { useState } from "react";
import Home from './pages/Home';
import Game from './pages/Game/Game';
import { words } from './assets/words';
import GameDificulty from './pages/GameDifficulty/GameDificulty';
import GameWin from "./pages/GameWin/GameWin";
import GameOver from "./pages/GameOver/GameOver";

// Fazer agora o que acontece se:
// Acertar ou Errar

function App() {
    const [gameStage, setGameStage] = useState<string>("Home");
    const [gameDifficulty, setGameDifficulty] = useState<number>(0);

    const [kindOfWord, setKindOfWord] = useState<string>("none"); 
    const [currentWord, setCurrentWord] = useState<string>("none");
    
    const [points, setPoints] = useState<number>(0);
    
    const getRandomNumber = (maxLimit: number) => {
      return Math.floor(Math.random() * maxLimit);
    }

    const handleWord = () => {  
      const wordsKeys = Object.keys(words);

      const randomKindOfWord = wordsKeys[getRandomNumber(wordsKeys.length)]; 
      const randomArrayOfWords = words[randomKindOfWord as keyof typeof words];
      setKindOfWord(randomKindOfWord);

      const randomWord = randomArrayOfWords[getRandomNumber(randomArrayOfWords.length)];
      setCurrentWord(randomWord);
    }
    

    return (
      <div className="app">
        {gameStage === "Home" && <Home setGameStage={setGameStage} handleWord={handleWord} setPoints={setPoints}/>}
        {gameStage === "GameDiffilcuty" && <GameDificulty setGameDifficulty={setGameDifficulty} setGameStage={setGameStage}/>}
        {gameStage === "Game" && <Game word={currentWord.toUpperCase()} kindOfWord={kindOfWord.toUpperCase()} 
          tries={gameDifficulty} setTries={setGameDifficulty} setGameStage={setGameStage} points={points} setPoints={setPoints}/>}
        {gameStage === "GameWin" && <GameWin setGameStage={setGameStage}/>}
        {gameStage === "GameOver" && <GameOver setGameStage={setGameStage} word={currentWord}/>}
        {/*gameStage === "GameOver" && <Home />} */}
      </div>
    );
}

export default App;
