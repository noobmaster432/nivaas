// import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  Stack,
  Toolbar,
  // Typography,
  // IconButton,
  Avatar,
  Chip,
} from "@pankod/refine-mui";
// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

// import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  // const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true;

  return shouldRenderHeader ? (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{
        background: "#FCFCFC",
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton> */}
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Chip
                label={user?.name}
                clickable
                avatar={<Avatar>{user?.name[0]}</Avatar>}
              />
            ) : null}
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
