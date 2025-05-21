/* eslint-disable @typescript-eslint/no-explicit-any */
export type Resource = string | URL

export class ApiError extends Error {
  status: number
  responseData?: any
  constructor(message: string, status: number, responseData?: any) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.responseData = responseData
  }

  isNotFound(): boolean {
    return this.status === 404
  }

  isUnauthorized(): boolean {
    return this.status === 401
  }

  isForbidden(): boolean {
    return this.status === 403
  }

  isServerError(): boolean {
    return this.status >= 500
  }
}
