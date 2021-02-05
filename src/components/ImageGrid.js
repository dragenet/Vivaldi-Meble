import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const resolveGap = gap => (gap ? gap : '0px')

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: ${({ gap }) => resolveGap(gap)};
  column-gap: ${({ gap }) => resolveGap(gap)};

  grid-template-columns: 1fr;

  ${({ theme }) => genMediaQueries(theme.imageGridBreakpoints)}
`

const genMediaQueries = breakpoints => {
  const { i, media } = Object.values(breakpoints).reduce(
    (acc, val) => ({
      i: acc.i + 1,
      media: acc.media.concat(`@media screen and (min-width: ${val}) {
      grid-template-columns: repeat(${acc.i}, 1fr);
    }`),
    }),
    { i: 2, media: '' }
  )
  return media
}

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
