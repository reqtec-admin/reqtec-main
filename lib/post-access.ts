import { createHmac, timingSafeEqual } from 'crypto'

// Only POST_ACCESS_CODE_<SLUG>. process.env[slug] would let the request name any variable.
function accessCodeEnvName(slug: string) {
  const normalized = slug.replace(/[^a-z0-9]/gi, '_').toUpperCase()
  return `POST_ACCESS_CODE_${normalized}`
}

// HMAC of the slug keyed by the access code. "true" does not verify, and one post's cookie does not unlock another.
function signAccess(slug: string, accessCode: string) {
  return createHmac('sha256', accessCode).update(slug).digest('base64url')
}

function safeEqual(actual: string, expected: string) {
  const left = Buffer.from(actual)
  const right = Buffer.from(expected)
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

export function getAccessCodeForSlug(slug: string) {
  return process.env[accessCodeEnvName(slug)] || undefined
}

export function getAccessCookieName(slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9_-]/gi, '')
  return `post-access-${safeSlug}`
}

export function accessCookieValue(slug: string, accessCode: string) {
  return signAccess(slug, accessCode)
}

export function accessCodesMatch(submitted: string, expected: string) {
  return safeEqual(submitted, expected)
}

export function hasValidAccessCookie(cookieValue: string | undefined, slug: string, accessCode: string) {
  if (!cookieValue) return false
  return safeEqual(cookieValue, signAccess(slug, accessCode))
}
