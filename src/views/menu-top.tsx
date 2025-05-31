'use client'

import OutsideClickHandler from "@/components/outside-click/OutsideClick"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const MenuTop = () => {
    const router = usePathname();
    const [show, setShow] = useState(false)

    const handleOnClickMenu = () => {
        setShow(!show)
    }
    return (
        <nav className="bg-[#0a3252] fixed w-full z-20 top-0 start-0">
            <OutsideClickHandler onOutsideClick={()=>setShow(false)} >
                <div className="max-w-screen-xl flex flex-wrap mx-auto items-center justify-between md:justify-center py-4 px-2">
                    <Link href="/" className="flex items-left space-x-3 rtl:space-x-reverse mr-2">
                        <img src="/images/logos/logo.png" className="h-8" alt="Alana City" />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg 
                                md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                            onClick={handleOnClickMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ml-2 ${show ? '' : 'hidden'}`}>
                        <ul onClick={handleOnClickMenu} className="flex flex-col p-4 md:p-0 mt-4 uppercase font-medium rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                            <li>
                                <Link href="/gioi-thieu" className={`${router == "/gioi-thieu" ? "active" : ""} block py-2 px-3 rounded menu-top`} >Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href="/vi-tri" className={`${router == "/vi-tri" ? "active" : ""} block py-2 px-3 rounded menu-top`}>Vị trí</Link>
                            </li>
                            <li>
                                <Link href="/tien-ich" className={`${router == "/tien-ich" ? "active" : ""} block py-2 px-3 rounded menu-top`}>Tiện ích</Link>
                            </li>
                            <li>
                                <Link href="/mat-bang" className={`${router == "/mat-bang" ? "active" : ""} block py-2 px-3 rounded menu-top`}>Mặt bằng</Link>
                            </li>
                            <li>
                                <Link href="/thu-vien" className={`${router == "/thu-vien" ? "active" : ""} block py-2 px-3 rounded menu-top`}>Thư viện</Link>
                            </li>
                            <li>
                                <Link href="/tin-tuc/" className={`${router.includes('tin-tuc') ? "active" : ""} block py-2 px-3 rounded menu-top`}>Tin tức</Link>
                            </li>
                            <li>
                                <Link href="/lien-he" className={`${router == "/lien-he" ? "active" : ""} block py-2 px-3 rounded menu-top`}>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </OutsideClickHandler>
        </nav>
    )
}
export default MenuTop