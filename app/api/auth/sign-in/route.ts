import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_FIRST_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ message: data.message ?? 'Login gagal' }, { status: res.status })
    }

    const response = NextResponse.json(data)

    response.cookies.set({
      name: 'userToken',
      value: data.access_token,
      httpOnly: true,
      maxAge: 60 * 60 * 12,
      path: '/',
      sameSite: 'lax'
    })

    return response
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
