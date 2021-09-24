import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface NavLinkProps {}

const StyledNavLink = styled.div`
  color: pink;
`

export function NavLink(props: NavLinkProps) {
  return (
    <StyledNavLink>
      <h1>Welcome to NavLink!</h1>
    </StyledNavLink>
  )
}

export default NavLink
