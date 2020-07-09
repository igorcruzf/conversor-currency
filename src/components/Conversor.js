import React, {useState} from 'react'

function Conversor(props){
    
    const [moedaA_valor, setMoedaA_valor] = useState(0)
    const [moedaB_valor, setMoedaB_valor] = useState(0)

    function converter(){
        let de_para = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y&apiKey=caa52ec03e5f021e1cc9`

        fetch(url).then(res => {
            return res.json();
        })
        .then(json => {
            let cotacao = json[de_para].val;
            setMoedaB_valor((parseFloat(moedaA_valor) * cotacao).toFixed(2))
        })    
    }

    function changeHandler(evt){
        setMoedaA_valor(evt.target.value)
    }

    return <div style={{
        padding:'20px',
        maxWidth:"350px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        }}>
        <h2>{props.moedaA} para {props.moedaB}</h2>
        <input type="text" onChange={changeHandler}/>
        <input type="button" value="Converter" onClick={converter}/>
        <h2>{moedaB_valor}</h2>
    </div>
}

export default Conversor;