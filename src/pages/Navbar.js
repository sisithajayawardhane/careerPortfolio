import * as React from 'react';
import { Link } from "react-router-dom";
import "../css/navbar.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SendIcon from '@mui/icons-material/Send';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, rubberBand, zoomIn } from 'react-animations'



const drawerWidth = 240;
const Bounce = styled.div`animation: 2s ${keyframes`${zoomIn}`} infinite`;

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='sidenav' >
            <div className='tool_bar' class="bg-white" >
                {/* <Bounce>
                    <img src="sj3.png" alt="SE" id='se_img' class="pl-5 text-black bg-white" />
                </Bounce> */}
                <img src="sj3.png" alt="SE" id='se_img' class="pl-5 text-black bg-white" />
            </div>
            <List className='list1' >
                <Link to="/" className='list-item-text' >
                    <ListItem id='profile_button'>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px', }}>
                                    Profile
                                </Typography>
                            } className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/education" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <AutoStoriesIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                    Education
                                </Typography>
                            } className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/experience" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <BusinessCenterIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                    Experience
                                </Typography>
                            } className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/portfolio" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <ListAltIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                    Portfolio
                                </Typography>
                            } className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/contact" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <SendIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                    Contact
                                </Typography>
                            } className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
            <List className='list2' >
                <ListItem >
                    <ListItemButton href='https://sisithajayawardhane.medium.com' >
                        <ListItemIcon>
                            <RocketLaunchIcon sx={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                Blog
                            </Typography>
                        } className='navbar_pages_text' />
                    </ListItemButton>
                </ListItem>
                <ListItem id='linkedin_button'>
                    <ListItemButton href='https://www.linkedin.com/in/sisitha-jayawardhane-0b5a1517b/'>
                        <ListItemIcon>
                            <LinkedInIcon sx={{ color: 'black' }} />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant="body1" class='font-lato font-semibold text-black' style={{ fontSize: '20px' }}>
                                Linkedin
                            </Typography>
                        } className='navbar_pages_text' />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className='Navbar' >
            <Box sx={{ display: 'flex' }} >
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
                </Toolbar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </div>

    );
}

