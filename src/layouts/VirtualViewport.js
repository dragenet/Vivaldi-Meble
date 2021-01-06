import React, { useRef, useEffect } from 'react'

const VirtualViewport = ({ children }) => {
  const virtualVp = useRef(null)

  const getVw = () => document.documentElement.clientWidth

  useEffect(() => {
    const handleResize = () => {
      virtualVp.current.width = getVw()
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return <div ref={virtualVp}>{children}</div>
}

export default VirtualViewport
