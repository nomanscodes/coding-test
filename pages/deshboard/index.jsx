import { useState } from 'react'
import DeshboardLayout from '@/Layouts/DeshboardLayout'
import TopSection from '@/components/Deshboard/IndexPage/TopSection'
import Campaigns from '@/components/Deshboard/IndexPage/Campaigns'
import UserDetails from '@/components/Deshboard/IndexPage/UserDetails'


const Deshboard = () => {


    return (
        <DeshboardLayout>
            <div className='mt-[66px] p-4'>
                <TopSection />
                <Campaigns />
                <UserDetails />
            </div>
        </DeshboardLayout>
    )
}

export default Deshboard
