import { useEffect, useState } from "react";

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    
    useEffect(() => {
        const imc = peso / (altura*altura);
        console.log(imc);
        
    }, [altura, peso]);
    
    const resultado = () => {


        return (
            <>
            <span></span>
            </>
        )
    }

    return (

        <div>
            <input className="me-5" type="number" placeholder="Digite sua Altura" onChange={({target}) => setAltura(parseInt(target.value))} />
            <input type="number" placeholder="Digite seu Peso" onChange={({target}) => setPeso(parseInt(target.value))} />
        </div>
    )
}

export default Formulario;