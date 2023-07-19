import * as React from 'react';
import "../css/portfolio.css"

export default function Portfolio() {
    return (
        <div className="Education" class="bg-black min-h-screen mt-2">
            <div className="Projects" class="flex flex-wrap">
                <div class="w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]">
                    <div>
                        <img src="coursera.png" alt="Avatar" class="w-[600px] mx-auto" />
                        <div>
                            <p>Industrial Dashboard</p>
                            <p>Feb 2023 - July 2023 </p>
                        </div>

                    </div>
                    <p class="text-xl font-bold">React Basics By META</p>
                    <p class="text-lg p-2 text-gray-600">Coursera</p>
                    <p class="text-lg p-2 text-gray-600">Credential ID : AT4VKYD69PXR</p>
                    <p class="text-lg p-2 text-gray-600">Issued Apr 2023</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://coursera.org/verify/AT4VKYD69PXR" > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="atlassian.png" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Jira Fundamentals Badge</p>
                    <p class="text-lg p-2 text-gray-600">Atlassian</p>
                    <p class="text-lg p-2 text-gray-600">Credential ID : 252616295</p>
                    <p class="text-lg p-2 text-gray-600">Issued Apr 2023</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://university.atlassian.com/student/award/7xJg6Q4rkTHgAYKmtZGw1nij" > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="alison.jpeg" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Diploma in Design Thinking</p>
                    <p class="text-lg p-2 text-gray-600">Alison</p>
                    <p class="text-lg p-2 text-gray-600">Credential ID : 1566-17490847</p>
                    <p class="text-lg p-2 text-gray-600">Issued Aug 2020</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://alison.com/certification/check/$2y$10$CTGHazH4bHc463RvMRvt5uNc8S3UIdegHLl1RNwnO3Ok9AYO.Ic0." > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="alison.jpeg" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Diploma in HTML5, CSS3 and JavaScript</p>
                    <p class="text-lg p-2 text-gray-600">Alison</p>
                    <p class="text-lg p-2 text-gray-600">Credential ID : 1462-17490847</p>
                    <p class="text-lg p-2 text-gray-600">Issued Aug 2020</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://alison.com/certification/check/$2y$10$NlmXtwMGJ0Lyqvez.ny06ek1.0cFam6ATgM4PcCH82t77I2LpuhpK" > Verify</a>
                </div>
            </div>
        </div>



    )
}