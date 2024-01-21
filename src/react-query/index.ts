import { QueryClient, queryOptions } from '@tanstack/react-query'
import { cache } from 'react'

export const getQueryClient = cache(() => new QueryClient())

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return ''
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}
const baseUrl = getBaseURL()

export const waitQuery = (ms: number) =>
  queryOptions({
    queryKey: ['wait', ms],
    queryFn: () =>
      fetch(`${baseUrl}/api/wait?wait=${ms}`, { cache: 'no-store' }).then(
        (res) => {
          console.log('현재 짱', ms)

          return res.json() as unknown as string
        }
      ),
  })
