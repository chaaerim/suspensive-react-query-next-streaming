'use client'

import React, { Suspense } from 'react'
import { Wait, Wait2 } from './components/Wait'
import { useQueryClient } from '@tanstack/react-query'
import { wrap } from '@suspensive/react'
import { waitQuery } from '~/react-query'
import { SuspenseQuery } from '~/react-query/SuspenseQuery'

export default function HomePageContent() {
    return (
      <>
      <Suspense fallback={<div>loading 100</div>}>
        <Wait ms={100} />
        </Suspense>
        <Suspense fallback={<div>loading 200</div>}>
        <Wait ms={200} />
        </Suspense>
        <Suspense fallback={<div>loading 300</div>}>
        <Wait ms={300} />
        </Suspense>
        <Suspense fallback={<div>loading 400</div>}>
        <Wait2 ms={400} />
        </Suspense>
        <Suspense fallback={<div>loading 505</div>}>
        <Wait2 ms={505} />
        </Suspense>
        {/* <Wait ms={400} />
        <Wait ms={500} />
        <Wait ms={600} />
        <Wait ms={700} /> */}
        {/* <button onClick={() => queryClient.resetQueries()}>
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
        </button> */}

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
   
  }
