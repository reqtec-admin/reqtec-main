import { NextResponse } from 'next/server'

function getAccessCookieName(slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9_-]/gi, '')
  return `page-access-${safeSlug}`
}

function getAccessCodeForSlug(slug: string) {
  const directMatch = process.env[slug]
  if (directMatch) {
    return directMatch
  }

  const normalized = slug.replace(/[^a-z0-9]/gi, '_').toUpperCase()
  return process.env[`PAGE_ACCESS_CODE_${normalized}`]
}

export async function POST(request: Request) {
  const { slug, code } = await request.json().catch(() => ({}))

  if (!slug || !code) {
    return NextResponse.json({ message: 'Missing access code.' }, { status: 400 })
  }

  const accessCode = getAccessCodeForSlug(slug)

  if (!accessCode) {
    return NextResponse.json({ message: 'Access code is not configured for this page.' }, { status: 500 })
  }

  if (code !== accessCode) {
    return NextResponse.json({ message: 'Invalid access code.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: getAccessCookieName(slug),
    value: 'true',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: `/pages/${slug}`,
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
