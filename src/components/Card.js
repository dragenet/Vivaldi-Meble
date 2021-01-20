import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%; //repeat(2, 1fr);
  height: 300px;
  &:nth-child(even) {
    direction: rtl;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: 25% 75%;
  }
`
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 25px;
`

const Card = ({ children, fluid }) => (
  <Wrapper>
    <Text>{children}</Text>
    <Image fluid={fluid} />
  </Wrapper>
)

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  fluid: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

Card.defaultProps = {
  children: null,
}

export default Card
