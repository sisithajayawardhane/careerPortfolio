import "../css/education.css"

export default function Education() {
    return (
        <div className="Education" style={{ backgroundColor: 'black',}}>
            <div className="education_cards" class="block xl:flex" >
                <div class='lg: w-[750px] xl:w-[630px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[50px] p-[50px] rounded-[5px]'  >
                    <img src="uoklogo.png" alt="Avatar" id='school-image' />
                    <div className='uok'>
                        <div className="name-duration" class="flex justify-between p-2">
                            <p class="text-2xl font-bold">University of Kelaniya, Sri Lanka</p>
                            <p class="text-sm font-bold p-1 text-white bg-black rounded-md">2019-present</p>
                        </div>

                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">BSc. (Hons.) in Software Engineering</p>
                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">3.47 out of 4.0 CGPA</p>
                        <div className="domains" class="flex flex-wrap">
                            <p class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Net Centric Applications</p>
                            <p class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Mobile Computing Applications</p>
                            <p class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Data Science and Engineering Applications</p>
                        </div>
                        <div class="mt-3">
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">EXECUTIVE COMMITTEE</p>
                                <p class="text-xs font-bold m-1 p-1">Software Engineering Students' Association UOK</p>
                            </div>
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">MEMBER</p>
                                <p class="text-xs font-bold m-1 p-1">IEEE Student Branch UOK</p>
                            </div>
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">VICE CAPTAIN</p>
                                <p class="text-xs font-bold m-1 p-1"> 21/22 Cricket Team UOK</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class='lg: w-[750px] xl:w-[630px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-[50px] p-[50px] rounded-[5px] [w-750px] w1200:[w-630px]'>
                    <img src="tc.png" alt="Avatar" id='school-image' />
                    <div className='tc'>
                        <div className="name-duration" class="flex justify-between p-2">
                            <p class="text-2xl font-bold">Thurstan College, Colombo 3</p>
                            <p class="text-sm font-bold p-1 text-white bg-black rounded-md">2008-2017</p>
                        </div>

                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">G.C.E. Advanced Level - Mathematics Stream</p>
                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">Z-Score of 1.55</p>
                        <div className="stream" class="flex">
                            <p className='subject' class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Combined Mathematics</p>
                            <p className='subject' class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Physics</p>
                            <p className='subject' class="text-md font-bold text-black hover:text-white bg-white border border-solid border-black rounded-md m-1 p-1 hover:bg-black">Chemistry</p>
                        </div>
                        <div class="mt-3">
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">MEMBER</p>
                                <p class="text-xs font-bold m-1 p-1">Young Inventers' Club</p>
                            </div>
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">TREASURER</p>
                                <p class="text-xs font-bold m-1 p-1">Science Society</p>
                            </div>
                            <div className="extra-curriculam" class="flex">
                                <p class="text-xs font-bold text-black bg-gray-200 rounded-md m-1 p-1">MEMBER</p>
                                <p class="text-xs font-bold m-1 p-1"> U19 Base Ball Team </p>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

            <p class="text-3xl font-bold text-center">Online Certifications</p>

            <div className="Certifications" class="flex flex-wrap">
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="coursera.png" alt="Avatar" class="w-[600px] mx-auto"/>
                    <p class="text-xl font-bold">React Basics By META</p>
                    <p class="text-lg p-2 text-gray-600">Coursera</p>
                    <p class="text-lg p-2 text-gray-600">Credenntail ID : AT4VKYD69PXR</p>
                    <p class="text-lg p-2 text-gray-600">Issued Apr 2023</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://coursera.org/verify/AT4VKYD69PXR" > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="atlassian.png" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Jira Fundamentals Badge</p>
                    <p class="text-lg p-2 text-gray-600">Atlassian</p>
                    <p class="text-lg p-2 text-gray-600">Credenntail ID : 252616295</p>
                    <p class="text-lg p-2 text-gray-600">Issued Apr 2023</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://university.atlassian.com/student/award/7xJg6Q4rkTHgAYKmtZGw1nij" > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="alison.jpeg" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Diploma in Design Thinking</p>
                    <p class="text-lg p-2 text-gray-600">Alison</p>
                    <p class="text-lg p-2 text-gray-600">Credenntail ID : 1566-17490847</p>
                    <p class="text-lg p-2 text-gray-600">Issued Aug 2020</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://alison.com/certification/check/$2y$10$CTGHazH4bHc463RvMRvt5uNc8S3UIdegHLl1RNwnO3Ok9AYO.Ic0." > Verify</a>
                </div>
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="alison.jpeg" alt="Avatar" class="w-[200px] mx-auto" />
                    <p class="text-xl font-bold">Diploma in HTML5, CSS3 and JavaScript</p>
                    <p class="text-lg p-2 text-gray-600">Alison</p>
                    <p class="text-lg p-2 text-gray-600">Credenntail ID : 1462-17490847</p>
                    <p class="text-lg p-2 text-gray-600">Issued Aug 2020</p>
                    <a class="text-md font-bold text-blue-500 hover:text-blue-900" href="https://alison.com/certification/check/$2y$10$NlmXtwMGJ0Lyqvez.ny06ek1.0cFam6ATgM4PcCH82t77I2LpuhpK" > Verify</a>
                </div>
            </div>
        </div>



    )
}