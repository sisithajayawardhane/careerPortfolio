import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import "../css/profile.css"
import ListItemIcon from '@mui/material/ListItemIcon';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Profile() {

    return (
        <div className='Profile'>
            <div className='first-row'>
                <div className='basic-details'>
                    <Typography variant='h3' fontWeight='bold' className='sub-profile-typography'>
                        Hello I'm Sisitha Jayawardhane
                    </Typography>
                    <Typography variant='h6' fontWeight='bold' className='sub-profile-typography'>
                        Trainee Software Engineer | Tech Enthusiast
                    </Typography>
                </div>
                <ListItemIcon>
                    <a href='cv.pdf' download='cv.pdf'>
                        <DownloadForOfflineIcon sx={{ color: 'blue', fontSize: '80px' }} />
                    </a>
                </ListItemIcon>
            </div>

            <div className='card'>
                <img src="sisitha.jpg" alt="Avatar" id='profile-image' />
                <div className='container'>
                    <p className='basi-details-2'>Nattandiya, Puttlam, Sri Lanka</p>
                    <h4 className='basi-details-2'>Trainee Software Engineer</h4>
                    <h4 className='basi-details-2'>jWare Automation Sri Lanka</h4>
                </div>
                <div className='quote'>
                    <p>If you can't explain it simply, you probably don't understand it well enough</p>
                </div>
            </div>
            <div className='card'>
                <h3>Language Proficiency</h3>
                <Divider />
                <div className='language-proficiency'>
                    <div>
                        <p>English</p>
                        <div class="border">
                            <div class="red" style={{height:'20px',width:'80%'}}></div>
                        </div>
                        <div className='bordeor'>
                            <div class="progress"></div>
                        </div>
                    </div>
                    <div>
                        <p>Sinhala</p>
                        <div class="border">
                            <div class="yellow" style={{height:'20px',width:'100%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}