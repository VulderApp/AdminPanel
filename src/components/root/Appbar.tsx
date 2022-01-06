import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { appbarTitle } from "../../states";

const Appbar = (): ReactElement => {
  const title = useRecoilValue(appbarTitle);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
