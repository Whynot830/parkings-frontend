import { createApiClient } from './base-fetch'

import { env } from '$env/dynamic/public'

export const backendApiClient = createApiClient(env.PUBLIC_API_URL)
