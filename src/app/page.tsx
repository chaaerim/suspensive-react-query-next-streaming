import PageWrapped from './PageWrapped'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient, waitQuery } from '~/react-query'

export default async function MyPage() {
  const queryClient = getQueryClient()
  await Promise.all([
    queryClient.prefetchQuery(waitQuery(100)),
    queryClient.prefetchQuery(waitQuery(200)),
    queryClient.prefetchQuery(waitQuery(300)),
    queryClient.prefetchQuery(waitQuery(400)),
  ])

  const data = queryClient.getQueryData(waitQuery(100).queryKey)

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageWrapped />
      </HydrationBoundary>
    </>
  )
}

class UnauthorizedError extends Error {}
