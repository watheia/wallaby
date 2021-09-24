import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"
import { HtmlHTMLAttributes } from "react"

export type CopyrightProps = {
  name?: string
  href?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function Copyright({
  name = "Watheia Labs, LLC",
  href = "https://watheia.app/corporate/",
  ...props
}: CopyrightProps) {
  return (
    <div {...props}>
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright &copy;{" "}
        <MuiLink color="inherit" href={href}>
          {name}
        </MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  )
}

export default Copyright
