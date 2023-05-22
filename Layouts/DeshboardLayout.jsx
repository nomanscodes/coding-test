import React from 'react'
import Header from '@/components/Deshboard/Header'
import Footer from '@/components/Deshboard/Footer'
import Sidebar from '@/components/Deshboard/Sidebar'

const DeshboardLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen">
            <div className=' w-full bg-white'>
                <Header />
            </div>
            <div className='flex gap-4 w-full '>
                <div className="w-3/12 hidden lg:block">
                    <Sidebar />
                </div>
                <div className='w-full'>
                    {children}
                    <div className=''>
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeshboardLayout
