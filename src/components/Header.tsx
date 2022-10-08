import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Stack,
  Button,
  Container,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu as Menus,
  styled,
  useTheme,
  AppBarProps as MuiAppBarProps,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { useState } from "react";
import Menubar from "./Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Header = () => {
  const theme = useTheme();
  const [showMe, setShowMe] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "rgb(229, 225, 230) 0px 0px 12px",
          height: {
            xs: "60px",
            md: "80px",
          },
          borderRadius: 0,
        }}
        position="sticky"
        elevation={0}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box component="a" display="block">
              <Box
                component="img"
                alt="test"
                src="/logo.png"
                height={{ xs: 45, md: 55, display: "block" }}
                width="auto"
              />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Menubar />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 5, sm: 6, md: 4 }}
            sx={{ flex: 1, justifyContent: "flex-end" }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div
                className="htb-button"
                style={{
                  width: "100%",
                }}
              >
                <Button
                  sx={{ mb: 10 }}
                  component={Link}
                  className="btn special"
                  to={"/register"}
                  fullWidth
                >
                  Register Now
                </Button>
              </div>
            </Box>
          </Stack>
          <>
            <MenuIcon
              onClick={handleDrawerOpen}
              sx={{ fontSize: 30, display: { xs: "flex", md: "none" } }}
            />
          </>
        </Container>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box mr={28}>
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="https://fossnsbm.org/content/images/2022/07/Foss.png"
                  height={{ xs: 45, md: 55, display: "block" }}
                  width="auto"
                />
              </Box>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <CloseIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"hello"} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"about"} disablePadding>
            <ListItemButton component={Link} to="/about">
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"events"} disablePadding>
            <ListItemButton component={Link} to="/events">
              <ListItemText primary={"Events"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"blog"} disablePadding>
            <ListItemButton component={Link} to="/blog">
              <ListItemText primary={"Blogs"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
