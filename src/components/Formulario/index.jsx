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
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <input className=" form-control mb-2" type="number" placeholder="Digite sua Altura (m)" required onChange={({ target }) => setAltura(parseFloat(target.value))} />
                    <input className=" form-control " type="number" placeholder="Digite seu Peso (kg)" required onChange={({ target }) => setPeso(parseFloat(target.value))} />
                    <button className="btn btn-dark mt-2 w-100" onClick={resultado}>Calcular</button>
                </div>
            </div>
            <div className="text-center mt-4">
                {resultadoIMC && <span className="fs-3 text-light fw-bold"> {resultadoIMC} </span>}
            </div>
        </>
    )
}

export default Formulario;