import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { faMedium, faStackOverflow, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@mui/material';
import "../css/profile.css"
import ListItemIcon from '@mui/material/ListItemIcon';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Profile() {
    return (
        <div className='Profile' >
            <div class="flex flex-row justify-between p-3 my-0 mx-8">
                <div class="text-left">
                    <p class="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl">
                        Hello I'm Sisitha Jayawardhane
                    </p>
                    <p class="sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                        Trainee Software Engineer | Tech Enthusiast
                    </p>
                </div>
                <ListItemIcon>
                    <a href='cv.pdf' download='cv.pdf'>
                        <DownloadForOfflineIcon sx={{ color: 'purple', fontSize: '80px' }} />
                    </a>
                </ListItemIcon>
            </div>
            <div class="flex flex-row justify-between ">
                <div class="w-4/12 m-2 flex flex-col ">
                    <div class=" w-full bg-white text-black rounded m-12 p-11 shadow-md transition duration-300">
                        <img class="mx-auto block w-3/5 rounded-md" src="sisitha.png" alt="Avatar"  />
                        <div class="mx-0 my-5">
                            <p class="text-lg my-4 text-gray-600">Nattandiya, Puttlam, Sri Lanka</p>
                            <h4 class="text-lg my-4 text-gray-600 font-bold">Trainee Software Engineer</h4>
                            <h4 class="text-lg my-4 text-gray-600 ">jWare Automation Sri Lanka</h4>
                        </div>
                        <div class="mx-auto block bg-black rounded text-white p-5">
                            <p>If you can't explain it simply, you probably don't understand it well enough</p>
                        </div>
                    </div>
                    <div class="text-center w-full bg-white text-black rounded m-12 p-5 shadow-md transition duration-300">
                        <h3 class="text-gray-600 font-bold">Language Proficiency</h3>
                        <Divider />
                        <div class="p-5">
                            <div class="m-2">
                                <p class="text-gray-600 ">English</p>
                                <div class="border">
                                    <div class="h-5 w-4/5 text-black bg-pink-500" ></div>
                                </div>
                            </div>
                            <div class="m-2">
                                <p class="text-gray-600">Sinhala</p>
                                <div class="border">
                                    <div class="h-5 w-2/2 text-black bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-7/12 m-14 p-5 text-left bg-white text-black rounded shadow-md transition duration-300 ">
                    <h2 class="text-2xl font-bold text-gray-600">About Me</h2>
                    <Divider />
                    <div className='logos'>
                        <h4 style={{ color: 'gray' }}>FIND ME ON THE INTERNET</h4>
                        <a href="https://www.linkedin.com/in/sisitha-jayawardhane-0b5a1517b/" class="fa fa-linkedin"></a>
                        <a href="https://twitter.com/SisJay98" class="fa fa-twitter"><span className="sr-only">Twitter</span></a>
                        <a href="https://github.com/sisithajayawardhane" class="fa fa-github"></a>
                        <a href="https://sisithajayawardhane.medium.com/" class="fa medium"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="https://www.hackerrank.com/sisithajayaward2?hr_r=1" class="fa hackerrank"><FontAwesomeIcon icon={faHackerrank} /></a>
                        <a href="https://stackoverflow.com/users/17698399/sisitha-jayawardhane" class="fa stackoverflow"><FontAwesomeIcon icon={faStackOverflow} /></a>
                    </div>
                    <Divider />
                    <div className='developer_details'>
                        <h4 style={{ color: 'gray' }}>DEVELOPER DETAILS </h4>
                        <div class="flex-row">
                            <div class="details">
                                <h4 class="text-gray-600 font-bold">Favourite Languages</h4>
                                <p class="capsule_para">JavaScript, Swift</p>
                            </div>
                            <div class="details">
                                <h4 class="text-gray-600 font-bold">Favourite IDEs</h4>
                                <p class="capsule_para">VScode, Xcode, Visual Studio</p>
                            </div>
                            <div class="details">
                                <h4 class="text-gray-600 font-bold">Career Goal</h4>
                                <p class="capsule_para">Software Engineer</p>
                            </div>
                            <div class="details">
                                <h4 class="text-gray-600 font-bold">Current Learning Goals</h4>
                                <p class="capsule_para">AWS, Jenkins, TypeScript, C#, ASP.NET, React Native</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>


    )
}