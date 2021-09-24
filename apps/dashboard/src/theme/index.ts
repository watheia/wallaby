import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#04BFBF"
    },
    secondary: {
      main: "#024873"
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
