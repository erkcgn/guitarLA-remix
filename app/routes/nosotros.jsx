import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return [
    {title: ' GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras - blog de música'}
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Nam pretium neque libero, et auctor ante mattis ultricies. In ornare
            aliquet sem et porttitor. Ut pretium suscipit ex quis sagittis. 
            Pellentesque placerat orci vitae imperdiet rutrum. Integer facilisis
            nunc lacinia, dictum dolor vel, porta diam. Nullam sed metus eu quam
            tristique condimentum. Vestibulum vehicula nisl sollicitudin felis sodales,
            vel tempor orci aliquam.
          </p>

          <p>Nam pretium neque libero, et auctor ante mattis ultricies. In ornare
            aliquet sem et porttitor. Ut pretium suscipit ex quis sagittis. 
            Pellentesque placerat orci vitae imperdiet rutrum. Integer facilisis
            nunc lacinia, dictum dolor vel, porta diam. Nullam sed metus eu quam
            tristique condimentum. Vestibulum vehicula nisl sollicitudin felis sodales,
            vel tempor orci aliquam.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
