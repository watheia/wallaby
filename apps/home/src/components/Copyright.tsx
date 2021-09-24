import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright &copy;{" "}
      <MuiLink color="inherit" href="https://watheia.app/corporate/">
        Watheia Labs, LLC
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}