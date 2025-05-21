import { createApiClient } from './base-fetch'

import { PUBLIC_API_URL } from '$env/static/public'

export const backendApiClient = createApiClient(PUBLIC_API_URL)
