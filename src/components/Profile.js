import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import "../css/profile.css"

export default function Profile() {
    return (
        <Toolbar className='profile-typography'>
            <Typography variant='h3' fontWeight='bold' className='sub-profile-typography'>
                Hello I'm Sisitha Jayawardhane
            </Typography>
            <Divider/>
            <Typography variant='h6' fontWeight='bold' className='sub-profile-typography'>
                Trainee Software Engineer | Tech Enthusiast
            </Typography>
        </Toolbar>

    )
}