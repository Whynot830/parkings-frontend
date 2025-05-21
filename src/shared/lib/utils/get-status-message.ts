import { HTTP_STATUS_MESSAGES } from '@/shared/const'

export const getStatusMessage = (code: string | number) => {
  const index = typeof code === 'string' ? parseInt(code) : code

  return HTTP_STATUS_MESSAGES[index] || 'Unknown error'
}
