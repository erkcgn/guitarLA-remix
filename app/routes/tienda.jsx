

export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json()

  return {}
}

function Tienda() {
  return (
    <div>
      Tienda
    </div>
  )
}

export default Tienda
