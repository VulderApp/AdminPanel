import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { appbarTitle, jwtToken } from "../../states";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Appbar = (): ReactElement => {
  const title = useRecoilValue(appbarTitle);
  const [token, setToken] = useRecoilState(jwtToken);

  const navigate = useNavigate();

  const handleLogoutButton = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {!token ? null : (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleLogoutButton}
            >
              <ExitToAppIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
