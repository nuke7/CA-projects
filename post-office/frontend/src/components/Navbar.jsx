import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Navbar() {
  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#">
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#">
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#">
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
