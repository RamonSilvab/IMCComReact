import { useEffect, useState } from "react";

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultadoIMC, setResultadoIMC] = useState('');

    const resultado = () => {
        const imc = peso / (altura*altura);
        setResultadoIMC(`Seu IMC é ${imc.toFixed(2)}`);
    }

    return (

        <div>
            <input type="number" placeholder="Digite sua Altura" onChange={({target}) => setAltura(parseFloat(target.value))} />
            <input type="number" placeholder="Digite seu Peso" onChange={({target}) => setPeso(parseFloat(target.value))} />
            <button onClick={ resultado }>Calcular</button>
            <div>
                { resultadoIMC && <span> { resultadoIMC } </span>}
            </div>
        </div>
    )
}

export default Formulario;