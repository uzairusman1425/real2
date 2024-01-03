import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPrivate = path === '/admin/addcountry' || path === '/admin/adddistrict'

    const token = request.cookies.get('token')?.value || ''
    if(isPrivate && !token)
    {
        return NextResponse.redirect(new URL('/admin',request.nextUrl))
    }

    if(!isPrivate && token)
    {
        return NextResponse.redirect(new URL('/admin/adddistrict',request.nextUrl))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}