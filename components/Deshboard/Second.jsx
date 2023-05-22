import React from 'react'
import Link from 'next/link'

const Second = ({ subcat, showDropDown, setShowDropDown }) => {
    return (
        <div className={`${showDropDown ? `h-auto transition-all duration-300` : `hidden transition-all duration-300`}`}>
            {subcat.map((item) => (
                <div key={item.id} onClick={() => setShowDropDown(false)} className="py-2 px-14 transition-all duration-300">
                    <Link href={`${item?.url}`} className='flex items-center hover:px-3 duration-300'>
                        <h3 className='font-semibold text-[#063a38] text-sm'>{item.name}</h3>
                    </Link>
                    <hr />
                </div>
            ))
            }
        </div >

    )
}

export default Second