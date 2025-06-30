import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
export default function Navbar() {
    const headerLink = [
        {
            id: 1,
            title: "Women",
        },
        {
            id: 2,
            title: "Men",
        },
        {
            id: 3,
            title: "Kids",
        },
        {
            id: 5,
            title: "Classics",
        },
        {
            id: 6,
            title: "Sport",
        },
        {
            id: 7,
            title: "Sale"
        }
    ]
    return (
        <>
            <div className='w-[100vw] h-[70px] px-[20px]'>
                <div className='flex gap-[2.5rem]'>
                    <img className='w-[30px] h-[30px]' src="/public/logo.png" alt="توضیح تصویر" />
                    <ul className='flex gap-[1.5rem]'>
                        {
                            headerLink.map((links) => (
                                <li>
                                    {links.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
