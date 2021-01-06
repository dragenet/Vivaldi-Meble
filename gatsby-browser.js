import React from 'react'
import VirtualViewport from './src/layouts/VirtualViewport'

export const wrapRootElement = ({ element }) => (
  <VirtualViewport>{element}</VirtualViewport>
)
