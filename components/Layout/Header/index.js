import { useState } from "react";
import { useDispatch } from "react-redux";
// import Link from "next/link";
import { 
  AppBar, 
  Box, 
  Toolbar,
  Button,
  IconButton, 
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Grid,
  Link,
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Search as SearchIcon, 
  AccountCircle as AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon 
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { toggleNav } from "@/redux/actions/app.reducer";

/* -------------------- HEADER START -------------------- */
export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleClickDrawer = () => {
      dispatch(toggleNav())
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu id={mobileMenuId}
          anchorEl={mobileMoreAnchorEl}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          keepMounted
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
              </IconButton>
              <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
    );
    
    return (
        // <header style={{ border: '1px solid black' }}>
            
        //     <button>iconmenu</button>
        //     <Link href="/"><img src="/icons/logo-fd.svg" alt="logo-brand" /></Link>

        //     <div>
        //         <input type="search"></input>
        //     </div>
            
        //     <button>Login/Signup</button>
        // </header>
      <Box component={"header"} sx={{ flexGrow: 2 }}>
        <AppBarComposed component={"div"} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleClickDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/"><img src="/icons/logo-fd.svg" alt="logo-brand" /></Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <InputBaseComposed
                placeholder="Search products, articles, topics, brands, etc"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="contained">Signup</Button>
              {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBarComposed>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item>
            <Link href="/category/skincare">SKINCARE</Link>
          </Grid>
          <Grid item>
            <Link href="/category/makeup">MAKE UP</Link>
          </Grid>
          <Grid item>
            <Link href="/category/body">BODY</Link>
          </Grid>
          <Grid item>
            <Link href="/category/hair">HAIR</Link>
          </Grid>
          <Grid item>
            <Link href="/category/fragance">FRAGRANCE</Link>
          </Grid>
          <Grid item>
            <Link href="/category/nails">NAILS</Link>
          </Grid>
          <Grid item>
            <Link href="/category/tools">TOOLS</Link>
          </Grid>
          <Grid item>
            <Link href="/category/brands">BRANDS</Link>
          </Grid>
        </Grid>
      {renderMobileMenu}
      {renderMenu}
      </Box>
    )
};

/* -------------------- STYLE -------------------- */
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: `1px solid ${ theme.palette.text.primary }`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InputBaseComposed = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppBarComposed = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.secondary
}))