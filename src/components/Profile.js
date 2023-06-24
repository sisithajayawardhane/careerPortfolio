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
        <div className='Profile' >
            <div class="flex flex-row justify-between p-2 mt-0 mr-8 mb-0 ml-8">
                <div class="text-left">
                    <Typography variant='h3' fontWeight='bold' >
                        Hello I'm Sisitha Jayawardhane
                    </Typography>
                    <Typography variant='h6' fontWeight='bold'>
                        Trainee Software Engineer | Tech Enthusiast
                    </Typography>
                </div>
                <ListItemIcon>
                    <a href='cv.pdf' download='cv.pdf'>
                        <DownloadForOfflineIcon sx={{ color: 'blue', fontSize: '80px' }} />
                    </a>
                </ListItemIcon>
            </div>
            <div class="flex flex-row justify-between">
                <div class="w-3/12 flex flex-col">
                    <div class="text-center w-full bg-white text-black rounded m-12 p-5 shadow-md transition duration-300">
                        <img src="sisitha.jpg" alt="Avatar" class="rounded-full w-40 h-40" />
                        <div class="mx-0 my-5;">
                            <p class="text-lg my-4">Nattandiya, Puttlam, Sri Lanka</p>
                            <h4 class="text-lg my-4">Trainee Software Engineer</h4>
                            <h4 class="text-lg my-4">jWare Automation Sri Lanka</h4>
                        </div>
                        <div class="text-center bg-black rounded text-white m-0 mx-5">
                            <p>If you can't explain it simply, you probably don't understand it well enough</p>
                        </div>
                    </div>
                    <div class="text-center w-full bg-white text-black rounded m-12 p-5 shadow-md transition duration-300">
                        <h3>Language Proficiency</h3>
                        <Divider />
                        <div class="p-5">
                            <div>
                                <p>English</p>
                                <div class="border">
                                    <div class="h-5 w-4/5 text-black bg-pink-500" ></div>
                                </div>
                                <div className='border'>
                                    <div class="progress"></div>
                                </div>
                            </div>
                            <div>
                                <p>Sinhala</p>
                                <div class="border">
                                    <div class="h-5 w-2/2 text-black bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-left w-3/5 bg-white text-black rounded m-12 p-5 shadow-md transition duration-300">
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
                                <p className='capsule_para'>AWS, Jenkins, TypeScript, C#, ASP.NET, React Native</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>


    )
}