import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import "../css/profile.css"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Profile() {

    return (
        <div className='Profile'>
            <div className='first-row'>
                <Toolbar className='profile-typography'>
                    <Typography variant='h3' fontWeight='bold' className='sub-profile-typography'>
                        Hello I'm Sisitha Jayawardhane
                    </Typography>
                    <Divider />
                    <Typography variant='h6' fontWeight='bold' className='sub-profile-typography'>
                        Trainee Software Engineer | Tech Enthusiast
                    </Typography>
                </Toolbar>
                <ListItemButton>
                    <ListItemIcon>
                        <a href='cv.pdf' download='cv.pdf'>
                            <DownloadForOfflineIcon sx={{ color: 'blue', fontSize: '80px' }} />
                        </a>
                    </ListItemIcon>
                </ListItemButton>
            </div>

            <div className='card'>
                <img src="sisitha.jpg" alt="Avatar" />
                <div className='container'>
                    <p>Nattandiya, Puttlam, Sri Lanka</p>
                    <h4>Trainee Software Engineer</h4>
                    <h4>jWare Automation Sri Lanka</h4>
                </div>
                <div className='quote'>
                    <p>If you can't explain it simply, you probably don't </p>
                    <p>understand it well enough</p>
                </div>
            </div>
        </div>


    )
}