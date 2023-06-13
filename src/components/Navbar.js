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


const drawerWidth = 240;

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='sidenav'>
            <div className='tool_bar'>
                <img src="sj.png" alt="SE" id='se_img'/>
            </div>
            <List className='list'>
                <Link to="/profile" className='list-item-text' >
                    <ListItem id='profile_button'>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon sx={{ color: 'blue' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Profile"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/highlights" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <PieChartIcon sx={{ color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Highlights"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/education" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <AutoStoriesIcon sx={{ color: 'green' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Education"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/experience" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <BusinessCenterIcon sx={{ color: 'orange' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Experience"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/portfolio" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <ListAltIcon sx={{ color: 'blue' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Portfolio"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to="/contact" className='list-item-text'>
                    <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                                <SendIcon sx={{ color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText primary={"Contact"} className='navbar_pages_text' />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
            {/* <Divider /> */}
            <List className='list'>
                <ListItem >
                    <ListItemButton href='https://sisithajayawardhane.medium.com' >
                        <ListItemIcon>
                            <RocketLaunchIcon sx={{ color: 'gray' }} />
                        </ListItemIcon>
                        <ListItemText primary={"Blog"} className='navbar_pages_text' />
                    </ListItemButton>
                </ListItem>
                <ListItem id='linkedin_button'>
                    <ListItemButton href='https://www.linkedin.com/in/sisitha-jayawardhane-0b5a1517b/'>
                        <ListItemIcon>
                            <LinkedInIcon sx={{ color: 'blue' }} />
                        </ListItemIcon>
                        <ListItemText primary={"LinkedIn"} className='navbar_pages_text' />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className='Navbar'>
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

