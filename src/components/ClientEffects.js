"use client"

import { useEffect, useState } from "react"
import Loader from "./Loader"
import Cursor from "./Cursor"

export default function ClientEffects() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)

  }, [])

  return (
    <>
      <Cursor />
      {loading && <Loader />}
    </>
  )
}