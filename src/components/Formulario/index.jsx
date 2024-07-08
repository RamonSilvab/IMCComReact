import { useEffect, useState } from "react";

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultadoIMC, setResultadoIMC] = useState('');

    const resultado = () => {

        if (altura === 0 || peso === 0) {
            setResultadoIMC(`Os dois campos precisam ser preenchidos`);
        } else {
            const imc = peso / (altura * altura);
            if (imc < 18.5) {
                setResultadoIMC(`Seu IMC é ${imc.toFixed(1)}, você está abaixo do peso.`);
            } else if (imc < 24.9) {
                setResultadoIMC(`Seu IMC é ${imc.toFixed(1)}, seu peso está normal.`);
            } else {
                setResultadoIMC(`Seu IMC é ${imc.toFixed(1)}, você está acima do peso.`);
            }
        }
    }

    return (
        <>
            <div>
                <input type="number" placeholder="Digite sua Altura (m)" required onChange={({ target }) => setAltura(parseFloat(target.value))} />
                <input type="number" placeholder="Digite seu Peso (kg)" required onChange={({ target }) => setPeso(parseFloat(target.value))} />
                <button onClick={resultado}>Calcular</button>
            </div>
            <div>
                {resultadoIMC && <span> {resultadoIMC} </span>}
            </div>
        </>
    )
}

export default Formulario;