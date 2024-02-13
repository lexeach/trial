import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from './assets/logo.png'
const drawerWidth = 240

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const [account, setAccount] = useState()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const copyToClipBoard = async (address) => {
    try {
      console.log('address', address)
      await navigator.clipboard.writeText(address)
      // setCopySuccess("Copied!");
      console.log('Copay at clip Board')
    } catch (err) {
      console.log('error in copayToClip')
      // setCopySuccess("Failed to copy!");
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className="logo-img" src={Logo} alt="ICOlogo" />
      </Typography>
      <Divider />

      <List>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText
            className="account_mob_"
            onClick={() => copyToClipBoard(account)}
            primary={account}
          />
        </ListItemButton>
      </List>
      <List>
        <a onClick={() => openInNewTab('https://google.com')}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="SWAP" />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
    </Box>
  )

  const { ethereum } = window
  if (!ethereum) {
    alert('Please Install MetaMask')
    window.location.reload()
  }

  useEffect(() => {
    setAccount(`${ethereum.selectedAddress}`)
  }, [])

  const openInNewTab = (url) => {
    window.open(url, '_self')
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img className="logo-img" src={Logo} alt="ICOlogo" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                sx={{ color: '#fff' }}
                onClick={() => copyToClipBoard(account)}
              >
                {account ? account : '0xabcd****1234'}
              </Button>
              <Button
                onClick={() => openInNewTab('https://google.com')}
                sx={{
                  border: '2px #f4ad23 solid',
                  color: '#2f2f2f !important',
                  borderRadius: '20px;',
                }}
              >
                SWAP
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
}

export default DrawerAppBar
