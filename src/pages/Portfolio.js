import * as React from 'react';
import "../css/portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNode, faFontAwesome, faUikit, faAndroid, faLaravel, faDocker } from '@fortawesome/free-brands-svg-icons';
import { Divider } from '@mui/material';

export default function Portfolio() {
    return (
        <div className="Education" class="bg-black min-h-screen mt-2">
            <div className="Projects" class="flex flex-wrap">
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mb-[20px]'>
                        <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Industrial Dashboard</p>
                            <p>Feb 2023 - July 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">Platform for monitoring data of any iOT device during internship at jWARE Automation</p>
                    {/* <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://coursera.org/verify/AT4VKYD69PXR" > Verify</a> */}
                    <Divider class="mt-[140px] mb-[20px]" />
                    <div class="flex">
                        <FontAwesomeIcon icon={faReact} style={{ color: "#13cbec", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faNode} style={{ color: "#229126", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/4 text-center no-underline mr-4 " />
                        <img src='express.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/3 text-center no-underline mr-4 " />
                        <img src='mui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />

                    </div>
                    <div class="flex mt-[10px]">
                        <img src='aws.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 h-1/6 text-center no-underline mr-4 pt-5 " />
                        <img src='mysql.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faDocker} style={{color: "#1297fd",}} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 "/>
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mb-[20px]'>
                        <FontAwesomeIcon icon={faReact} style={{ color: "#13cbec", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Portfolio Website</p>
                            <p>April 2023 - July 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">This website which have portfolio of Sisitha Jayawardhane.</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/careerPortfolio" > Source</a>
                    <Divider class="mt-[140px] mb-[20px]" />
                    <div class="flex">
                        <FontAwesomeIcon icon={faReact} style={{ color: "#13cbec", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faFontAwesome} style={{ color: "#548ae8", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <img src='mui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <img src='nextjs.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='flutter.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">SPIRA App</p>
                            <p>Feb 2023 - July 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[150px]">Student-Parent image sharing app during internship at jWARE Automation  </p>
                    {/* <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://coursera.org/verify/AT4VKYD69PXR" > Source</a> */}
                    <Divider class="mt-[60px] mb-[20px]" />
                    <div class="flex">
                        <FontAwesomeIcon icon={faUikit} style={{ color: "#699bf2", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faAndroid} style={{ color: "#1ea00d", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <img src='php.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faLaravel} style={{ color: "#e40c22", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />

                    </div>
                    <img src='mysql.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mb-[20px]'>
                        <FontAwesomeIcon icon={faNode} style={{ color: "#229126", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Student Management System</p>
                            <p>Feb 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]"> The system allows administrators to store, manage, and update student information, including personal details and contact information.</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/StudentManagementSystem" > Source</a>
                    <Divider class="mt-[60px] mb-[20px]" />
                    <div class="flex">
                        <FontAwesomeIcon icon={faReact} style={{ color: "#13cbec", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faNode} style={{ color: "#229126", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <img src='aws.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                    </div>
                    <img src='mongodb.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />

                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mb-[20px]'>
                        <img src='html.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/12 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Department Website</p>
                            <p>Jan 2020 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]"> A clone website of software engineering department of University of Kelaniya</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/StudentManagementSystem" > Source</a>
                    <Divider class="mt-[140px] mb-[20px]" />
                    <div class="flex">
                        <img src='html.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/12 text-center no-underline mr-4 " />
                        <img src='css.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                        <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e", }} class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-1/6 text-center no-underline mr-4 " />
                    </div>

                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">MoviePlus</p>
                            <p>Oct 2022 - Dec 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[0px]">This is a typical movie app that shows ratings and details about movies. The details of these movies are fetched by a open api service.  </p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/MoviePlus" > Source</a>
                    <Divider class="mt-[80px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Twitter Clone</p>
                            <p>Aug 2022 - Sep 2022 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">The Twitter Clone iOS app is a social networking application designed to replicate the core features and functionality of the popular social media platform, Twitter</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/TwitterClone" > Source</a>
                    <Divider class="mt-[20px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Daily News</p>
                            <p>Dec 2022 - Jan 2023 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">Daily News is an innovative iOS app that delivers the latest and most relevant news stories directly to your fingertips. The news are fetched by a open api service.   </p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/DailyNews-iOS-" > Source</a>
                    <Divider class="mt-[50px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Guess The Flag</p>
                            <p>July 2022 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">This a mini game for kids. Objective of this app is find the correct flag among showing 3 flags.   </p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/GuessTheFlag" > Source</a>
                    <Divider class="mt-[80px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Rock Paper Scissor</p>
                            <p>May 2022 - Jun 2022 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px]">This is a simple game among kids thesedays. But there is different thing to consider. The app says, play to win or play to loose. The player should do what the app says.</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/RockPaperScissor" > Source</a>
                    <Divider class="mt-[30px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[10px] p-[50px] rounded-[5px]">
                    <div class='flex flex-row justify-center mt-[10px] mb-[20px]'>
                        <img src='swift.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-2/6 text-center no-underline mr-4 " />
                        <div>
                            <p class="text-2xl font-bold">Bull's Eye</p>
                            <p>Mar 2020 - Apr 2020 </p>
                        </div>
                    </div>
                    <Divider />
                    <p class="text-lg p-2 text-gray-600 mt-[20px] mb-[20px]">This is a simple game to check the sight and measure </p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900 " href="https://github.com/sisithajayawardhane/Bull-s-eye-SwiftUI-" > Source</a>
                    <Divider class="mt-[120px] mb-[20px]" />
                    <div class="flex">
                        <img src='swiftui.png' alt='' class="sm: text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl w-3/6 text-center no-underline mr-4 " />
                    </div>
                </div>
            </div>
        </div >



    )
}