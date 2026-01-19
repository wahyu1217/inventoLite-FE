import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_AUTH_URL}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        {
          message:
            data.message ?? 'Jika email terdaftar, kami akan mengirimkan link untuk reset password'
        },
        { status: res.status }
      )
    }

    const response = NextResponse.json(data)

    return response
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
