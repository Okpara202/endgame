import { useState } from "react";
import "./Assembly.css";
import { language } from "./Languages";
import { clsx } from "clsx";
import DeadLanguageFarewell, { Words } from "./LanguageFarewell";
import AssemblyConfetti from "./AssemblyConfetti";


function Assembly() {

    let deadLanguage: string = "";


    const keys: string = "qwertyuiopasdfghjklzxcv.bnm";

    const [currentWord, setCurrentWord] = useState<string>(() => Words());

    const [userGuess, setUserGuess] = useState<Array<string>>([]);

    let isGameOver: boolean = false;

    function NewGame() {
        isGameOver = false;
        setCurrentWord(() => Words());
        setUserGuess([])
    }

    const gameWon = currentWord.split("").every(word => userGuess.includes(word))


    const wrongGuessCount = userGuess.filter(guess => !currentWord.includes(guess)).length;

    const userLastguess = userGuess[userGuess.length - 1];
    const isUserLastGuessCorrect = userLastguess && !currentWord.includes(userLastguess);



    if (wrongGuessCount === language.length || gameWon) {
        isGameOver = true
        console.log(isGameOver)
    }


    const wordElement = currentWord.split("").map((word: string, index: number) => {

        let letter;
        if (isGameOver) {
            letter = word.toUpperCase()
        } else {
            letter = userGuess.includes(word) ?
                word.toUpperCase() : ""
        }



        return <span key={index}>{letter}</span>
    });

    const handleKeyboardClick = (guess: string) => {
        setUserGuess(prevState => {
            return prevState.includes(guess) ?
                prevState : [...prevState, guess]
        })
    }

    const keyboardElement = keys.split("").map((keys: string) => {
        const isGuessed = userGuess.includes(keys);
        const isCorrect = isGuessed && currentWord.includes(keys)
        const isWrong = isGuessed && !currentWord.includes(keys)

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button disabled={isGameOver} className={className} onClick={() => handleKeyboardClick(keys)} key={keys}>
                {keys.toUpperCase()}
            </button>)
    })

    const programmingLanguageElement = language.map(language => {
        // Mapping array to display hanging languages

        const styles = {
            background: language.backgroundColor,
            color: language.color
        }

        if (wrongGuessCount > language.id) {
            deadLanguage = language.name
            return <span key={language.id} style={styles} className="lang lost">
                {language.name}
            </span>
        } else {
            return <span key={language.id} style={styles} className="lang" >
                {language.name}
            </span >
        }

    })

    return (
        <>
            {gameWon && <AssemblyConfetti />}
            <header>
                <h2>Assembly: Endgame</h2>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly! </p>
            </header>

            {isGameOver ? <section
                className={wrongGuessCount === language.length ? "status wrong" : "status correct"}>
                {wrongGuessCount === language.length ?
                    (<>
                        <h2>Gamever</h2>
                        <p>You better start learning Assembly</p>
                    </>) :
                    (<>
                        <h2>You win!</h2>
                        <p>Well done! 🎈</p>
                    </>)}
            </section> :

                isUserLastGuessCorrect ? <section className={deadLanguage.length > 0 ? "status purpleStatus" : "status"}>
                    {deadLanguage.length > 0 && <h1>{DeadLanguageFarewell(deadLanguage)}</h1>}
                </section> : <section className={"status"}>

                </section>
            }

            <section className="language">
                {programmingLanguageElement}
            </section>

            <section className="word">
                {wordElement}
            </section>

            <section className="keyboard">
                {keyboardElement}
            </section>

            <footer>
               {isGameOver && <button onClick={NewGame}>New Game</button>}
            </footer>

            <p className="dev">Okpara Favour &copy; 2024</p>
        </>
    )
}

export default Assembly