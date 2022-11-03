import { CircleNotch } from 'phosphor-react'

import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const LoadingFeedback = styled(CircleNotch)`
  animation: ${animation};
  animation-timing-function: cubic-bezier(0.625, -0.32, 0.375, 1.32);
  animation-duration: 850ms;
  animation-iteration-count: infinite;

  line-height: 0;
`
