import './App.css';
import {useEffect, useRef, useState} from "react";
import CustomSlider from "../component/sliderComponent/CustomSlider";

function App() {

    const [cursorIndex, setCursorIndex] = useState(0)
    const [isIncrement, setIncrement] = useState(true)
    const [player, setPlayer] = useState([])
    const [selectedValue, setSelectedValue] = useState(0)
    const [totalScore, setTotalScore] = useState(0)

    let timer = useRef(null)

    useEffect(()=> {
        timer.current = setInterval(() => counter(), Math.floor(Math.random() * 10) + 1);
        return (() => clearInterval(timer.current))
    },[cursorIndex])


    /**
     * Increment and decrement of the the slider value
     */
    const counter = () => {

        if(cursorIndex === 100) {
            setIncrement(false)
        }
        if(cursorIndex === 0) {
            setIncrement(true)
        }
        if(isIncrement){
            setCursorIndex(prev => prev+1)

        }else {
            setCursorIndex(prev => prev-1)
        }
    }

    /**
     * Button click of function
     */
    const buttonClick = () => {
        setSelectedValue(cursorIndex)
        if(45 <= cursorIndex &&  cursorIndex <= 55){
            setTotalScore(prevState => prevState + cursorIndex)
            let playerValue = { score: cursorIndex}
            if(player.length === 9){
                setPlayer([playerValue])
            }else {
                setPlayer(prevState => [ ...prevState, playerValue])
            }
        }

    }

    /**
     * Reset game
     */
    const reset = () => {

        setPlayer([])
        setTotalScore(0)
        setSelectedValue(0)

    }

    /**
     * Player UI element
     *
     * @param index
     * @returns {JSX.Element}
     */
    const playerElement = (index) => {

        return(
            <div className="box">
                <h2>Player Name {index.toString()}</h2>
                <h3>Score is {
                    player.length < index
                        ? "N/A":
                        player[index-1].score}</h3>
            </div>
        )

    }

    return (
        <div className="App">
            <body className="body">
            <div className="split left">
                <div className="game-board">
                    {playerElement(1)}
                    {playerElement(2)}
                    {playerElement(3)}
                    {playerElement(6)}
                    {playerElement(5)}
                    {playerElement(4)}
                    {playerElement(7)}
                    {playerElement(8)}
                    {playerElement(9)}
                </div>
            </div>

            <div className="split right">
                <CustomSlider
                    cursorIndex={cursorIndex}
                    sliderStyle="slider"/>

                {player.length !== 9 ? (
                    <h1>Score is {totalScore}</h1>
                ):(
                    <h1>Total Score is {totalScore}</h1>
                )}

                {45 <= selectedValue && selectedValue <= 55 ?
                    <h1 className="correctVal">Congrats Selected Value is {selectedValue }</h1> :
                    <h1 className="wongVal">Oops !!! {selectedValue} not in the range</h1>}

                {player.length !== 9 ? (
                    <button onClick={() => buttonClick()}>Click me</button>
                ):(
                    <button onClick={() => reset()}>Reset Game</button>
                )}

            </div>

            </body>

        </div>
    );
}

export default App;
