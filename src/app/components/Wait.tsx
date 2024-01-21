'use client'

import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { waitQuery } from '~/react-query'

// export const Wait = wrap
//   .Suspense({ fallback: <div>waiting 100....</div> })
//   .on((props: { ms: number }) => (
//     <div>result: {useSuspenseQuery(waitQuery(props.ms)).data}</div>
//   ))

export const Wait=(props: {ms:number})=>{
  const {data}=useSuspenseQuery(waitQuery(props.ms))
  return <div>result: {data}</div>

}

export const Wait2=(props: {ms:number})=>{
  const {data}=useQuery(waitQuery(props.ms))
  return <div>result: {data}</div>
}