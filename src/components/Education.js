import "../css/education.css"

export default function Education() {
    return (
        <div className="education_cards">
            <div className='e-card'>
                <img src="uoklogo.png" alt="Avatar" id='school-image' />
                <div className='uok'>
                    <div className="name-duration">
                        <h2>University of Kelaniya, Sri Lanka</h2>
                        <h4>2019-present</h4>
                    </div>

                    <h4 className='basi-details-2'>Trainee Software Engineer</h4>
                    <h4 className='basi-details-2'>jWare Automation Sri Lanka</h4>
                </div>

            </div>
            <div className='e-card'>
                <img src="tc.png" alt="Avatar" id='school-image' />
                <div className='tc'>
                    <div className="name-duration">
                        <h2>Thurstan College, Colombo 3, Sri Lanka</h2>
                        <h4>2008-2017</h4>
                    </div>


                    <h4 className='basi-details-2'>Trainee Software Engineer</h4>
                    <h4 className='basi-details-2'>jWare Automation Sri Lanka</h4>
                </div>

            </div>
        </div>


    )
}