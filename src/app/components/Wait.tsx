'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { waitQuery } from '~/react-query'
import { wrap } from '@suspensive/react'

export const Wait = wrap
  .Suspense({ fallback: <div>waiting 100....</div> })
  .on((props: { ms: number }) => (
    <div>result: {useSuspenseQuery(waitQuery(props.ms)).data}</div>
  ))
