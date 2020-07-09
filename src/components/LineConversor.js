import React from 'react'

import Conversor from "./Conversor"

export default function ConversorLine(props){
    return(
        <div style={{
            display:"flex",
            marginTop: "40px",
            justifyContent: "space-around"}}>
            <Conversor moedaA={props.moedaA} moedaB={props.moedaB}></Conversor>
            <Conversor moedaA={props.moedaB} moedaB={props.moedaA}></Conversor>
        </div>
    )
}