import { useState } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@mui/material';

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';

import { InputSearch } from './InputSearch';
import { DrawerApp } from './DrawerApp';
import { MenuProfile } from './MenuProfile';

export const NavbarApp = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);
  
  const changeStateDrawer = () => setOpenDrawer(!openDrawer);

  const menuId = 'primary-search-account-menu';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className='flex justify-between '>

          {/* <===  Open NavegationDrawer  ===> */}
          <div className='flex flex-row items-center' >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={changeStateDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Series-API
            </Typography>
          </div>

          {/* <===  Section of SearchInput  ===> */}
          <InputSearch />
          
          {/* <===  Section Icons options  ===> */}
          <Box className='flex flex-row'>
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
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      <DrawerApp open={openDrawer} changeOpen={changeStateDrawer} />

      <MenuProfile 
        show={isMenuOpen} 
        menuId={menuId} 
        handleMenu={handleMenuClose}
        anchor={anchorEl}
      />
    </Box>
  );
}
