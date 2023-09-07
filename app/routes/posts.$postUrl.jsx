import { 
  useRouteError,
  isRouteErrorResponse,
  Link
} from '@remix-run/react'
import { getPost } from '~/models/posts.server'

export async function loader({params}){
    const { postUrl } = params
    const post = await getPost(postUrl)

    if(post.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Entrada no encontrada'
      })
    }
    return post
}

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

export default function Post() {
  return (
    <div>
      $postUrl
    </div>
  )
}
