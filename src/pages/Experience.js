import "../css/education.css"

export default function Experience() {
    return (
        <div className="Experience" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <div className="Certifications" class="flex flex-wrap">
                <div class='w-[600px] lg: w-[350px] xl:w-[400px] text-center shadow-[0_4px_8px_0_rgba(0, 0, 0, 0.2)] transition-[0.3s] bg-[white] text-[black] m-5 p-[50px] rounded-[5px]'>
                    <img src="jware.png" alt="Avatar" />
                    <p class="text-xl font-bold text-gray-600 m-2">jWARE Automation (PVT) LTD</p>
                    <p class="text-sm font-bold p-1 m-2 text-white bg-black rounded-md">Feb 2023 - July 2023</p>
                    <p class="text-lg font-bold p-2 text-gray-600">Trainee Software Engineer</p>
                </div>
            </div>

        </div>

    )
}