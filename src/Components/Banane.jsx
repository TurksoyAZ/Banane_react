import { useState } from "react";
import "./Banane.scss";

function Banane() {

    const [einzahlen, setEinzahlen] = useState(0)
    const [input, setInput] = useState('')

    const pay = () => {
        if (input !== '') {
            setEinzahlen(input)
            setInput('')
        }
    }

    const payOff = () => {
        setEinzahlen(einzahlen - input)
    }

    return (
        <section className="bananeContainer">
            <article className="bananeArticle">
                <h1>🍌</h1>

                <h2>Banana Bank</h2>

                <div className="bananeGiroBox">
                    <h3>Dein Girokonto</h3>

                    <span>{einzahlen}€</span>

                    <div className="zahlBox">

                        <input type="number" value={input} onChange={e => setInput(e.target.value)} />

                        <div>
                            <button onClick={pay}>Einzahlen</button>
                            <button onClick={payOff}>Auszahlen</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Banane;
