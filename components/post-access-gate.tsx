'use client'

import { useState } from 'react'

interface PostAccessGateProps {
  slug: string
  title: string
  description?: string
}

export default function PostAccessGate({ slug, title, description }: PostAccessGateProps) {
  const [code, setCode] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/post-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug, code }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message || 'Invalid access code.')
      }

      window.location.reload()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to verify access code.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-xl md:p-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-3 text-gray-100">
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          {description || 'This page is protected. Enter the access code to continue.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-2" htmlFor="post-access-code">
            Access code
          </label>
          <input
            id="post-access-code"
            type="password"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="form-input w-full bg-black/50 border border-white/10 text-gray-100 focus:border-sky-400/60 focus:ring-sky-400/30"
            placeholder="Enter passcode"
            autoComplete="current-password"
            required
          />
        </div>

        {error && <p className="text-sm text-red-300">{error}</p>}

        <button
          type="submit"
          className="btn btn-gradient w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Checking…' : 'Unlock page'}
        </button>
      </form>
    </div>
  )
}
