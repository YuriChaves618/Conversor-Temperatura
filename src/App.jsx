import { useState } from 'react'
import './App.css'

function App() {

  const [temperatura, setTemperatura] = useState("");
  const [resultado, setResultado] = useState();
  const [escalaOrigem, setEscalaOrigem] = useState("");
  const [escalaTrans, setEscalaTrans] = useState("");

  function Converter(escalaDestino){

    let temp = parseFloat(temperatura)
    let calculo 

    if(escalaOrigem == "kelvin"){
      if(escalaDestino == "celsius"){
        calculo = temp - 273.15
        setResultado(calculo)
      }else{
        calculo = (temp - 273.15) * 1.8 + 32
        setResultado(calculo)
      }
    }

    if(escalaOrigem == "celsius"){
       if(escalaDestino == "kelvin"){
        calculo = temp + 273.15
        setResultado(calculo)
      }else{
        calculo = (temp * 1.8) + 32
        setResultado(calculo)
      }
    }

    if(escalaOrigem == "fahrenheit"){
       if(escalaDestino == "celsius"){
        calculo = (temp - 32) / 1.8
        setResultado(calculo)
      }else{
        calculo = (temp + 459.67) * (5/9)
        setResultado(calculo)
      }
    }

  }

    return(
      <div>
          <div className = "header">
        <h1 className = "titulo "> Conversor de Temperatura </h1>
        <p> Bem vindo prezado cliente ao nosso conversor de temperatura</p>
        </div>


        <div className = "coletaTemperatura">
        <form>
          <label>
              <h2> Informe a temperatura </h2>

            <input
            type = "number"
            value = {temperatura}
            id = "temp"
            onChange = {(evento) => setTemperatura(evento.target.value)}
            />

          </label>
        </form>
        </div>

        <div className = "escolhaOrigem">

        <form>
        <label>

        <h2> Escolha a sua escala de origem  </h2>

        <button
         type = "button"
         className = "celsius"
         onClick = {() => setEscalaOrigem("celsius")}
         >
           Graus Celsius 
        </button>

        <button 
        type = "button" 
        className = "fahrenheit"
        onClick = {() => setEscalaOrigem("fahrenheit")}
        > Fahrenheit  
        </button>

        <button 
        type = "button" 
        className = "kelvin"
        onClick = {() => setEscalaOrigem("kelvin")}
        > Kelvin </button>
        </label>
         </form>

          </div>

          <div className = "escolhaConversor">

           {escalaOrigem == "kelvin" && (

              <div>
              <h2> Converter kelvin para: </h2>

              <button 
              type = "button"
              className = "celsius"
              onClick = {() => {
                Converter("celsius")
                setEscalaTrans("celsius")
              }}
              > Celsius</button>

              <button 
              type = "button"
              className = "fahrenheit"
              onClick = { () => {
                Converter("fahrenheit")
                setEscalaTrans("fahrenheit")
              }}
               > Fahrenheit </button>

               {resultado != undefined &&(

                  <section>
                    <h3> Resultado </h3>
                    <p><strong>Escala de Origem: </strong>{escalaOrigem}</p>
                    <p><strong>Escala Destino: </strong>{escalaTrans}</p>
                    <p><strong>Temperatura convertida: </strong>{resultado.toFixed(2)}</p>
                  </section>

               )}

              </div>
           )}


           {escalaOrigem == "celsius" && (
             <div>
               <h2> Converter Celsius para: </h2> 
               <button type="button" 
               className="kelvin" 
               onClick={() => { 
                Converter("kelvin") 
                setEscalaTrans("kelvin") 
              }} > Kelvin </button> 
              
              <button 
              type="button" 
              className= "fahrenheit" 
              onClick={() => { 
                Converter("fahrenheit") 
                setEscalaTrans("fahrenheit") 
              }} > Fahrenheit </button> 
              
              {resultado != undefined && ( 
                <section> 
                  <h3> Resultado </h3> 
                  <p> <strong>Escala de Origem: </strong> {escalaOrigem} </p>
                  <p> <strong>Escala Destino: </strong> {escalaTrans} </p> 
                  <p> <strong>Temperatura convertida: </strong> {resultado.toFixed(2)} </p>
                   </section>
                  )}

                   </div> 
                )}


                {escalaOrigem == "fahrenheit" && ( 
                  <div> 
                    <h2> Converter Fahrenheit para: </h2> 
                    <button 
                    type="button" 
                    className="celsius" 
                    onClick={() => { 
                      Converter("celsius") 
                      setEscalaTrans("celsius") 
                      }} > Celsius </button> 
                      
                      <button 
                      type="button" 
                      className="kelvin"
                      onClick={() => { 
                        Converter("kelvin") 
                        setEscalaTrans("kelvin") 
                      }} > Kelvin </button> 
                      
                      {resultado != undefined && ( 
                        <section> <h3> Resultado </h3> 
                        <p> <strong>Escala de Origem: </strong> {escalaOrigem} </p>
                         <p> <strong>Escala Destino: </strong> {escalaTrans} </p> 
                         <p> <strong>Temperatura convertida: </strong> {resultado.toFixed(2)} </p>
                          </section> 
                        )} 
                        
                        </div> 
                      )}
          </div>
         
      </div>

    );
}

export default App
