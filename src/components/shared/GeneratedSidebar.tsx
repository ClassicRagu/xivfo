"use client";
import { Launch } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";

const drawerWidth = 240;

export type SidebarSection = {
  name: string;
  contents: SectionContents[];
};

type SectionContents = {
  name: string;
  url: string;
  external?: boolean;
};

export default function GeneratedSidebar(props: {
  children: React.ReactNode;
  sidebarSections: SidebarSection[];
}) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/")}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {props.sidebarSections.map((section) => {
        return (
          <div key={section.name}>
            <List subheader={<ListSubheader>{section.name}</ListSubheader>}>
              {section.contents.map((sectionContents) => {
                return (
                  <ListItem disablePadding key={sectionContents.name}>
                    {sectionContents.external ? (
                      <ListItemButton href={sectionContents.url}>
                        <ListItemIcon>
                          <Launch />
                        </ListItemIcon>
                        <ListItemText primary={sectionContents.name} />
                      </ListItemButton>
                    ) : (
                      <ListItemButton
                        onClick={() => router.push(sectionContents.url)}
                      >
                        <ListItemText primary={sectionContents.name} />
                      </ListItemButton>
                    )}
                  </ListItem>
                );
              })}
            </List>
            <Divider />
          </div>
        );
      })}
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            XIV Field Operations - Save the Queen
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
