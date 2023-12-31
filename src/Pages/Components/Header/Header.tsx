import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import { Badge } from "@mui/material";

interface PageProps {
  page: string;
}

const pages: PageProps[] = [
  { page: "Home" },
  { page: "Search" },
  { page: "Checkout" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 9,
              ml: 3,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#041562",
              textDecoration: "none",
            }}
          >
            <img
              src="/imgs/logo.png"
              alt="Logo"
              style={{ height: "30px", marginRight: "5px" }}
            />
            Travel Buddy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ page }) => (
                <MenuItem
                  color="#041562"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Button
                    key={page}
                    component={Link}
                    to={page === "Home" ? "/" : "/" + page.toLowerCase()}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "black" }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#041562",
              textDecoration: "none",
            }}
          >
            <img
              src="/imgs/logo.png"
              alt="Logo"
              style={{ height: "30px", marginRight: "5px" }}
            />
            Travel Buddy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ page }) => (
              <Button
                key={page}
                component={Link}
                to={page === "Home" ? "/" : "/" + page.toLowerCase()}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#041562", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                title="Log out"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Badge badgeContent={0} color="primary">
                  <PermIdentityOutlinedIcon
                    sx={{ color: "black", position: "relative", pr: 1.5 }}
                  />
                </Badge>
              </Button>
            </Link>
            <Badge badgeContent={0} color="primary">
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <CasesOutlinedIcon
                  sx={{ color: "black", position: "relative", pr: 1.5 }}
                />
              </Link>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
