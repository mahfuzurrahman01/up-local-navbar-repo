import { BsBagCheck, BsFileBarGraph } from 'react-icons/bs'
import { IoSettingsOutline, IoShareSocialOutline } from 'react-icons/io5'
import { FaChartLine, FaDatabase, FaRegHandshake, FaRegUserCircle } from 'react-icons/fa'
import { RiFileSettingsLine, RiSecurePaymentLine, RiShieldUserFill } from 'react-icons/ri'
import { HiOutlineArrowsRightLeft, HiOutlineChartBarSquare } from 'react-icons/hi2'
import { AiOutlineHdd, AiOutlineMail } from 'react-icons/ai'
import { BiArchive, BiCalendarEvent, BiChat, BiCheck, BiError, BiErrorCircle, BiMailSend } from 'react-icons/bi'
import { CgLink, CgWebsite } from 'react-icons/cg';
import { IoMailUnreadOutline } from 'react-icons/io5'
import { GiChart, GiPerpendicularRings } from 'react-icons/gi'
import { MdAreaChart, MdContactPhone, MdLabelImportant, MdPhoneDisabled } from 'react-icons/md'
import { SiBitcoinsv } from 'react-icons/si';
import { SlGraduation } from 'react-icons/sl'
import { CiDeliveryTruck, CiShoppingCart } from 'react-icons/ci'
import Link from 'next/link'
import { HiClipboardList, HiOutlineClipboardList, HiOutlineShoppingBag, HiOutlineUsers } from 'react-icons/hi'
const Sidebar = () => {
    return (
        <div className='top-0 sticky '>

            <div className='logo section p-3 bg-gray-200 bg-opacity-30 rounded-tr-xl rounded-tl-xl'>
                <h1 className="font-4xl font-extrabold">Logo </h1>
                <small className='lg:block hidden'>Production</small>
            </div>
            <div className='w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3'>
                {/*************** these are all tabs **************** */}
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center font-semibold duration-300 bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Overview" className='tooltip tooltip-right'>
                        <IoMailUnreadOutline className='text-2xl text-purple-500 duration-300 ' />
                    </p>
                    <p className='lg:block hidden'>Overview</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Analytics" className='tooltip tooltip-right'>
                        <BsFileBarGraph className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Analytics</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="E-commerce" className='tooltip tooltip-right'>
                        <MdAreaChart className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>E-commerce</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Crypto" className='tooltip tooltip-right'>
                        <SiBitcoinsv className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className=' hidden lg:flex justify-between w-full items-center'>Crypto <span className='bg-violet-500 text-xs p-1 rounded-md text-white'>New</span></p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Account" className='tooltip tooltip-right'>
                        <IoMailUnreadOutline className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Account</p>
                </div>
            </div>
            <p className='lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs'>Concepts</p>
            <div className='w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3'>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Customers" className='tooltip tooltip-right'>
                        <HiOutlineUsers className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Customers</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Products" className='tooltip tooltip-right'>
                        <HiOutlineShoppingBag className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Products</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Orders" className='tooltip tooltip-right'>
                        <CiShoppingCart className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Orders</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Invoices" className='tooltip tooltip-right'>
                        <BsBagCheck className='text-2xl text-purple-500 duration-300' />
                    </p>


                    <p className='lg:block hidden'>Invoices</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Logistics" className='tooltip tooltip-right'>
                        <CiDeliveryTruck className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Logistics</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>

                    <p data-tip="Academy" className='tooltip tooltip-right'>
                        <SlGraduation className='text-2xl text-purple-500 duration-300' />
                    </p>


                    <p className='lg:block hidden'>Academy</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Job listing" className='tooltip tooltip-right'>
                        <HiOutlineClipboardList className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Job listing</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Social Media" className='tooltip tooltip-right'>
                        <IoShareSocialOutline className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Social Media</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="blog" className='tooltip tooltip-right'>
                        <HiClipboardList className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Blog</p>
                </div>

            </div>
            <p className='lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs'>Apps</p>
            <div className='w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3'>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Kanban" className='tooltip tooltip-right'>
                        <BiCheck className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Kanban</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Mail" className='tooltip tooltip-right'>
                        <BiMailSend className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Mail</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="chat" className='tooltip tooltip-right'>
                        <BiChat className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>chat</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Calender" className='tooltip tooltip-right'>
                        <BiCalendarEvent className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Calender</p>
                </div>

            </div>
            <p className='lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs'>Pages</p>
            <div className='w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3'>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Auth" className='tooltip tooltip-right'>
                        <AiOutlineHdd className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Auth</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Pricing" className='tooltip tooltip-right'>
                        <GiPerpendicularRings className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Pricing</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Contact" className='tooltip tooltip-right'>
                        <MdContactPhone className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Contact</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Error" className='tooltip tooltip-right'>
                        <BiErrorCircle className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Error</p>
                </div>

            </div>
            <p className='lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs'>Misc</p>
            <div className='w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3'>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Label" className='tooltip tooltip-right'>
                        <BiArchive className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Label 0</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Disabled" className='tooltip tooltip-right'>
                        <MdPhoneDisabled className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden text-gray-500'>Disabled</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="label" className='tooltip tooltip-right'>
                        <MdLabelImportant className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>Label</p>
                </div>
                <div className='cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:font-semibold hover:text-gray-800  duration-300 hover:bg-gray-200 px-2 py-1 rounded-md'>
                    <p data-tip="Link" className='tooltip tooltip-right'>
                        <CgLink className='text-2xl text-purple-500 duration-300' />
                    </p>

                    <p className='lg:block hidden'>External Link</p>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;