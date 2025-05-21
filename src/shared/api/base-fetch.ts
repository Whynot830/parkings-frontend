import { ApiError, type Resource } from './types'

import { getStatusMessage } from '@/shared/lib'

export function createApiClient(baseUrl: string) {
  async function baseFetch<TResponse>(
    resource: Resource,
    options: RequestInit = {}
  ): Promise<TResponse> {
    const url =
      typeof resource === 'string'
        ? resource.startsWith('http')
          ? resource
          : `${baseUrl}${resource.startsWith('/') ? '' : '/'}${resource}`
        : resource

    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json'
    }

    const res = await fetch(url, {
      ...options,
      headers: { ...defaultHeaders, ...(options.headers ?? {}) }
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new ApiError(`${body.message ?? getStatusMessage(res.status)}`, res.status, body)
    }

    return await res.json()
  }

  return {
    get: <T>(resource: Resource, options?: RequestInit) => baseFetch<T>(resource, options),

    post: <T, U>(resource: Resource, data: U, options?: RequestInit) =>
      baseFetch<T>(resource, { ...options, method: 'POST', body: JSON.stringify(data) }),

    put: <T, U>(resource: Resource, data: U, options?: RequestInit) =>
      baseFetch<T>(resource, { ...options, method: 'PUT', body: JSON.stringify(data) }),

    patch: <T, U>(resource: Resource, data: U, options?: RequestInit) =>
      baseFetch<T>(resource, { ...options, method: 'PATCH', body: JSON.stringify(data) }),

    delete: <T>(resource: Resource, options?: RequestInit) =>
      baseFetch<T>(resource, { ...options, method: 'DELETE' })
  }
}
