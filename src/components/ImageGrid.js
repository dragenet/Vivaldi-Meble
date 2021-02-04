import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//TODO: Add responsivity

const gridGap = '20px'

const resolveGap = gap => (gap ? gap : '0px')

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: ${({ gap }) => resolveGap(gap)};
  column-gap: ${({ gap }) => resolveGap(gap)};
`

//TODO: remove on production
const Tester = styled.div`
  width: 100%;
  min-height: ${({ height }) => (height ? height : '200px')};
  background-color: ${({ color }) => color};
`

const ImageGrid = ({ className, gap, children }) => {
  return (
    <Wrapper className={className} gap={gap}>
      {children}
    </Wrapper>
  )
}

ImageGrid.propTypes = {
  className: PropTypes.string,
  gap: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

ImageGrid.defaultProps = {
  className: '',
  gap: '0px',
}

export default ImageGrid
