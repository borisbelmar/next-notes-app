// Importa las utilidades necesarias de Next.js
import { NextResponse, type NextRequest } from 'next/server'

// Importa una función personalizada para validar tokens JWT
// Esta función usa jose para validar el token, no necesita la librería crypto
import { jwtValidate } from './lib/jwt'

// Define las rutas que necesitan autenticación
const protectedRoutes = [
  '/notes',
  '/api/notes'
]

// Define las rutas que se pueden acceder sin autenticación
const nonLoggedRoutes = [
  '/register',
  '/login'
]

// Middleware para la autenticación y autorización
export async function middleware (req: NextRequest) {
  // Obtiene el token JWT de las cookies
  const token = req.cookies.get('token')?.value

  // Obtiene la ruta de la solicitud
  const pathname = req.nextUrl.pathname

  // Si la ruta está en las rutas protegidas
  if (protectedRoutes.includes(pathname)) {
    try {
      // Intenta validar el token JWT
      const payload = await jwtValidate(token ?? '')

      // Si la validación es exitosa, guarda los datos del usuario en las cookies
      req.cookies.set('user', JSON.stringify({
        id: payload.sub,
        username: payload.username,
        iat: payload.iat
      }))

      // Continúa con la solicitud
      return NextResponse.next({ request: req })
    } catch (error) {
      // Si hay un error en la validación del token
      console.error(error, pathname, token)

      // Responde con 401 Unauthorized para las rutas de API
      if (pathname.startsWith('/api')) {
        return new Response('Unauthorized', {
          status: 401
        })
      }

      // Redirige a la página de login para las otras rutas
      const res = NextResponse.redirect(new URL('/login', req.url))

      // Elimina las cookies de token y usuario
      res.cookies.delete('token')
      res.cookies.delete('user')

      return res
    }
  }

  // Si la ruta está en las rutas no protegidas y hay un token
  if (nonLoggedRoutes.includes(pathname) && token) {
    // Redirige a la página de notas
    return NextResponse.redirect(new URL('/notes', req.url))
  }
}

// Configuración de las rutas que utilizan este middleware
export const config = {
  matcher: [
    '/register',
    '/login',
    '/api/notes/:path*',
    '/notes'
  ]
}
