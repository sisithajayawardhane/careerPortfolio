import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { faMedium, faStackOverflow, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className='all_cards'>
                <div className='left_cards'>
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
                                    <div class="red" style={{ height: '20px', width: '80%' }}></div>
                                </div>
                                <div className='bordeor'>
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div>
                                <p>Sinhala</p>
                                <div class="border">
                                    <div class="yellow" style={{ height: '20px', width: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right_card'>
                    <h2>About Me</h2>
                    <Divider />
                    <div className='logos'>
                        <h4 style={{ color: 'gray' }}>FIND ME ON THE INTERNET</h4>
                        <a href="https://www.linkedin.com/in/sisitha-jayawardhane-0b5a1517b/" class="fa fa-linkedin"></a>
                        <a href="https://twitter.com/SisJay98" class="fa fa-twitter"><span className="sr-only">Twitter</span></a>
                        <a href="https://github.com/sisithajayawardhane" class="fa fa-github"></a>
                        <a href="https://sisithajayawardhane.medium.com/" class="fa medium"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="https://www.hackerrank.com/sisithajayaward2?hr_r=1" class="fa hackerrank"><FontAwesomeIcon icon={faHackerrank} /></a>
                        <a href="https://stackoverflow.com/users/17698399/sisitha-jayawardhane" class="fa stackoverflow"><FontAwesomeIcon icon={faStackOverflow} /></a>
                        <a href="https://www.facebook.com" class="fa fa-facebook"></a>
                    </div>
                    <Divider />
                    <div className='developer_details'>
                        <h4 style={{ color: 'gray' }}>DEVELOPER DETAILS </h4>
                        <div className='details_div'>
                            <div className='details'>
                                <h4>Favourite Languages</h4>
                                <p className='capsule_para'>JavaScript, Swift</p>
                            </div>
                            <div className='details'>
                                <h4>Favourite IDEs</h4>
                                <p className='capsule_para'>VScode, Xcode, Visual Studio</p>
                            </div>
                            <div className='details'>
                                <h4>Career Goal</h4>
                                <p className='capsule_para'>Software Engineer</p>
                            </div>
                            <div className='details'>
                                <h4>Current Learning Goals</h4>
                                <p className='capsule_para'>AWS, Jenkings, TypeScript, C#, ASP.NET</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>


    )
}