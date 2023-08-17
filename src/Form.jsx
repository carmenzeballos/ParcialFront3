import { useState } from "react";


const Form = (props) => {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState('')
  const [animal, setAnimal] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 3) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else if (animal.length < 6) {
      setMensajeError('Por favor chequea que la informacion sea correcta')
    } else {
      props.onSubmit({ nombre, animal })
      setNombre('')
      setAnimal('')
      setMensajeError('')
    }
  }
          return (
            <div class="estilo1">
              <h1>Elige tu animal favorito</h1>
              <br /><br />
              <form onSubmit={handleSubmit}>
                <label>
                  Nombre:
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <br /><br /><br /><br />
                <label>
                  Animal favorito:
                  <input
                    type='text'
                    value={animal}
                    onChange={(event) => setAnimal(event.target.value)}
                  />
                </label>
                <br /><br /><br /><br />
                <button  type='submit' class="custom-button">Submit</button>
              </form>
              {mensajeError && <p>{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;