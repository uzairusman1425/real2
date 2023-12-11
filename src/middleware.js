import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPrivate = path === '/admin/addcountry' || path === '/admin/addcity'

    const token = request.cookies.get('token')?.value || ''
    // console.log(`path : ${path} and isPrivate: ${isPrivate}`);
    if(isPrivate && !token)
    {
        // console.log("In IF");
        return NextResponse.redirect(new URL('/admin',request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}