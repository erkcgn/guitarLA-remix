import { 
    useLoaderData,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({params}) {
    
  const {guitarraUrl} = params

  const guitarra = await getGuitarra(guitarraUrl)

  //Si no encuentra la guitarra lanzamos un error
  if(guitarra.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })
  }

  return guitarra
}

/** Manejo de errores */
export function ErrorBoundary(){
  const error = useRouteError()
  
  if(isRouteErrorResponse(error)){
      return (
        <p className="error">
          {error.status} {error.statusText}
          <br></br>
          <Link className='error-enlace' to="/">Tal vez quieras volver a la pagina principal</Link>
        </p>        
      );
  }
}

export function meta({data}){

    if(!data){
      return [
        {title: 'GuitarLA - Guitarra No Encontrada'},
        {descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada'}
      ]
    } 
    return [      
      {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
      {description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`}
    ]  
}

function Guitarra() {

    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
  return (
    <div className='guitarra'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
        <div className='contenido'>
            <h3>{nombre}</h3>
            <p className='texto'>{descripcion}</p>
            <p className='precio'>${precio}</p>

            <form className='formulario'>

              <label htmlFor='cantidad'>Cantidad</label>

              <select id='cantidad'>
                <option value="">-- Seleccione --</option>
                <option value="1">1</option>  
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input 
                type="submit"
                value="Agregar al carrito"
              />
              
            </form>
        </div>
    </div>
  )
}

export default Guitarra
