import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface LogoProps {}

const StyledLogo = styled.div`
  color: pink;
`

export function Logo(props: LogoProps) {
  return (
    <StyledLogo>
      <h1>Welcome to Logo!</h1>
    </StyledLogo>
  )
}

export default Logo
