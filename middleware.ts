import { NextRequest, NextResponse } from 'next/server';

const whitelistedIps = ['210.8.33.22', '125.253.111.41']

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    
    if (
        pathname.startsWith('/_next') || 
        pathname.startsWith('/api') || 
        pathname.startsWith('/static') 
    ) {
        return NextResponse.next()
    }

    const isProduction = request.url.startsWith('https://www.mosafe.com.au') 
        || request.url.startsWith('http://www.mosafe.com.au');

    if (!isProduction && request.ip && (!whitelistedIps.includes(request.ip))){
        return NextResponse.redirect('https://google.com' )
    }

}

export const config = {};