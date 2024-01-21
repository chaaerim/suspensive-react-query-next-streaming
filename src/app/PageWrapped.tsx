'use client'

import React, { Suspense } from 'react'
import { Wait } from './components/Wait'
import { useQueryClient } from '@tanstack/react-query'
import { wrap } from '@suspensive/react'
import { waitQuery } from '~/react-query'
import { SuspenseQuery } from '~/react-query/SuspenseQuery'

export default wrap
  .ErrorBoundary({
    fallback: ({ error }) => 'error!!' + error.message,
  })
  .Suspense({
    fallback: 'loading...',
  })
  .on(function Page() {
    const queryClient = useQueryClient()

    return (
      <>
        <Wait ms={100} />
        <Wait ms={200} />
        <Wait ms={300} />
        <Wait ms={400} />
        <Wait ms={500} />
        <Wait ms={600} />
        <Wait ms={700} />
        <Suspense fallback="loading...">
          <SuspenseQuery options={waitQuery(100)}>
            {({ data }) => <li>{data}</li>}
          </SuspenseQuery>
        </Suspense>
        <Suspense fallback="loading...">
          <SuspenseQuery options={waitQuery(100)}>
            {({ data }) => <>{data}</>}
          </SuspenseQuery>
        </Suspense>

        <button onClick={() => queryClient.resetQueries()}>
          resetQueries all
        </button>

        <button
          onClick={() => {
            console.log('500')
            queryClient.invalidateQueries({ queryKey: ['wait', 500] })
          }}
        >
          invalidate 500
        </button>

        <button
          onClick={() => {
            console.log('200')
            queryClient.invalidateQueries({ queryKey: ['wait', 200] })
          }}
        >
          invalidate 200
        </button>

        <fieldset>
          <legend>
            combined <code>Suspense</code>-container
          </legend>
          <Suspense
            fallback={
              <>
                <div>waiting 800....</div>
                <div>waiting 900....</div>
                <div>waiting 1000....</div>
              </>
            }
          >
            <Wait ms={800} />
            <Wait ms={900} />
            <Wait ms={1000} />
          </Suspense>
        </fieldset>
      </>
    )
  })
