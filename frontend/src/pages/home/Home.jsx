import React from 'react'
import BMIcalculator from '../../components/BMIcal/BMIcalculator'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'
import Footer from '../../components/footer/Footer'
import CalorieCalculator from '../../components/calorieCal/CalorieCalculator'


const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center min-w-96 mr-auto ml-12'>
                <Navbar />
                <div className='w-full mt-32 p-6 rounded-lg shadow-md bg-transparent '>
                    <h1 className='text-9xl font-bold text-green-400 block'>NutriLogix</h1>
                </div>
            </div>
            <div className='w-full mx-auto bg-transparent block'>
                <BMIcalculator />
            </div>
            <div>
            <Services />
            </div>
            <div>
                <CalorieCalculator/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home