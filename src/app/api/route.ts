import { NextResponse } from 'next/server'

const ping = () => {
  return NextResponse.json({ message: 'pong' })
}

export { ping as GET, ping as POST, ping as PUT, ping as DELETE, ping as OPTIONS }
