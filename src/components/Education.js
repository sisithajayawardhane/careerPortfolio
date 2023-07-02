import "../css/education.css"

export default function Education() {
    return (
        <div className="Education" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <div className="education_cards" >
                <div className='e-card' >
                    <img src="uoklogo.png" alt="Avatar" id='school-image' />
                    <div className='uok'>
                        <div className="name-duration" class="flex justify-between p-2">
                            <p class="text-2xl font-bold">University of Kelaniya, Sri Lanka</p>
                            <p class="text-sm font-bold p-1 text-green-600 bg-green-200 rounded-md">2019-present</p>
                        </div>

                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">BSc. (Hons.) in Software Engineering</p>
                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">3.47 out of 4.0 CGPA</p>
                        <div className="domains" class="flex flex-wrap">
                            <p class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Net Centric Applications</p>
                            <p class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Mobile Computing Applications</p>
                            <p class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Data Science and Engineering Applications</p>
                        </div>
                    </div>

                </div>
                <div className='e-card'>
                    <img src="tc.png" alt="Avatar" id='school-image' />
                    <div className='tc'>
                        <div className="name-duration" class="flex justify-between p-2">
                            <p class="text-2xl font-bold">Thurstan College, Colombo 3</p>
                            <p class="text-sm font-bold p-1 text-green-600 bg-green-200 rounded-md">2008-2017</p>
                        </div>

                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">G.C.E. Advanced Level - Mathematics Stream</p>
                        <p className='basi-details-2' class="text-lg p-2 text-gray-600">Z-Score of 1.55</p>
                        <div className="stream" class="flex">
                            <p className='subject' class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Combined Mathematics</p>
                            <p className='subject' class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Physics</p>
                            <p className='subject' class="text-md font-bold text-blue-700 hover:text-white bg-white border border-solid border-blue-700 rounded-md m-1 p-1 hover:bg-blue-700">Chemistry</p>
                        </div>


                    </div>

                </div>
            </div>
            <div className="Certifications"></div>
        </div>



    )
}