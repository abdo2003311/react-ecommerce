import React, { useState } from 'react';
import { ListItemIcon ,Divider ,AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { AccountCircle, Search, ShoppingCart, Store, MoreVert, Settings, Login, Add, DarkMode, Logout } from '@mui/icons-material';
import { headerStyles } from '../../styles';
import { toggleTheme } from '../../functions';
import client from '../../config/apolloClient';
import { LOGGED_IN } from '../../gql';
import { useQuery } from '@apollo/client';

const SearchInput = styled('div')(({ theme }) => ({
  position: 'relative',
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

let NavigationBar = () => {

    let loggedIn = useQuery(LOGGED_IN).data.loggedIn;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };   
    
    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
 
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
         anchorEl={anchorEl}
         id="account-menu"
         open={isMenuOpen}
         onClose={handleProfileMenuOpen}
         onClick={handleProfileMenuClose}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 32,
               height: 32,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 14,
               width: 10,
               height: 10,
               bgcolor: 'background.paper',
               transform: 'translateY(-50%) rotate(45deg)',
               zIndex: 0,
             },
             '& li a' : {
              textDecoration : 'none'
             }
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          !loggedIn &&
            <MenuItem onClick={() => {
              location.href = '/signUp'
            }}>
              <ListItemIcon>
                <Add fontSize="small" />
              </ListItemIcon>
                  sign-Up
            </MenuItem>
        }
        {
          !loggedIn &&
         <MenuItem onClick={() => {
          location.href = '/signIn'
        }}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
                sign-in
          </MenuItem>
        }
          {
          loggedIn && 
          <MenuItem onClick={() => {
              location.href = '/editAccount'
          }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
                    Settings
            </MenuItem>
        }
        {
          loggedIn && 
          <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
              <span onClick={() => {
                localStorage.removeItem('token');
                client.writeQuery({
                  query : LOGGED_IN,
                  data : {
                    loggedIn : false
                  }
                })
                location.href = "/signIn"
              }}>
                Logout 
              </span>
        </MenuItem>
        }
      </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
         <Menu
         anchorEl={mobileMoreAnchorEl}
         id="account-menu"
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
         onClick={handleMobileMenuClose}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 32,
               height: 32,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 14,
               width: 10,
               height: 10,
               bgcolor: 'background.paper',
               transform: 'translateY(-50%) rotate(45deg)',
               zIndex: 0,
             },
             '& li a' : {
              textDecoration : 'none'
             }
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

      >
        <MenuItem onClick={() => {
          location.href = '/store'
        }}>
            <ListItemIcon>
                <Store />
            </ListItemIcon>
              Store
        </MenuItem>
        <MenuItem onClick={() => {
          location.href = '/carts'
        }}>
            <ListItemIcon>
                <ShoppingCart />
            </ListItemIcon>
                Carts
        </MenuItem>
        <Divider />
        {
          !loggedIn &&
            <MenuItem onClick={() => {
              location.href = '/signUp'
            }}>
              <ListItemIcon>
                <Add fontSize="small" />
              </ListItemIcon>
                  sign-Up
            </MenuItem>
        }
        {
          !loggedIn &&
         <MenuItem onClick={() => {
          location.href = '/signIn'
        }}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
                sign-in
          </MenuItem>
        }
          {
          loggedIn && 
          <MenuItem onClick={() => {
              location.href = '/editAccount'
          }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
                    Settings
            </MenuItem>
        }
        {
          loggedIn && 
          <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
              <span onClick={() => {
                localStorage.removeItem('token');
                client.writeQuery({
                  query : LOGGED_IN,
                  data : {
                    loggedIn : false
                  }
                })
                location.href = "/signIn"
              }}>
                Logout 
              </span>
        </MenuItem>
        }
        <MenuItem onClick={() => {
                        toggleTheme();
                    }}>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
                Dark mode
        </MenuItem>
        
      </Menu>
    );

    return (
        <Box sx={headerStyles}>
        <AppBar position="static">
            <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
               <Link color="inherit" href="/">E-commerce</Link>
            </Typography>
            <SearchInput>
                <SearchIconWrapper>
                <Search />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </SearchInput>
            <Box sx={{ flexGrow: 2 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton 
                size="large"
                color="inherit"
                onClick={() => {
                    toggleTheme();
                }}>
                    <DarkMode />
                </IconButton>
                <Link href="/carts" color="inherit">
                    <IconButton size="large" color="inherit">
                        <Badge color="error">
                            <ShoppingCart />   
                        </Badge>
                    </IconButton>
                </Link>
                <Link href="/store" color="inherit">
                    <IconButton size="large"color="inherit">
                        <Badge color="error">
                            <Store />  
                        </Badge>
                    </IconButton>
                </Link>
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
                </IconButton>
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
                    <MoreVert />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </Box>
    );
}




export default NavigationBar;