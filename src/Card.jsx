


function Card(user) {
  return (
    <div className= 'Card'>
      <h3>Valores ingresados:</h3>
      <ul>

          <li className='card' key={user.id}>
            <p>Nombre: {user.data.nombre}</p> 
            <br /><br />
            <p>Animal favorito: {user.data.animal}</p>
          </li>

      </ul>
    </div>
  );
}

export default Card;
