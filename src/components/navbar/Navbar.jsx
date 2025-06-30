import React from 'react'



export default function Navbar() {
    const headerLink = [
        {   id : 1 ,
            title : "Women" ,
        } , 
        {
            id : 2 ,
            title : "Men" ,
        } ,
        {
            id : 3 ,
            title : "Kids" ,
        },
        {
            id : 5 ,
            title : "Classics" ,
        },
        {
            id : 6 ,
            title : "Sport" ,
        },
        {
            id : 7 , 
            title : "Sale"
        }
    ]
    return (
    <>
        <div className='w-[100vw] h-[70px] px-[20px]'>
            <div>
                <ul>
                    {
                        headerLink.map((links) => ())
                    }
                </ul>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}
