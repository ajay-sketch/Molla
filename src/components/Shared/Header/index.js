import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../../images/logo (1).png';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {


    return (
        <>
            <div>
                {/* Upper Header Start */}
                <div className="bg-gray-50">
                    <div className="grid grid-cols-2 lg:grid-cols-5">
                        <div >
                            <p className="flex gap-2 text-xs font-thin pl-2 py-2">

                                <span>
                                    <select value="USD">
                                        <option>EUR</option>
                                        <option>USD</option>
                                    </select> </span>
                                <span>
                                    <select value="ENG">
                                        <option>ENG</option>
                                        <option>ENGLISH</option>
                                        <option>FRENCH</option>
                                        <option>SPANISH</option>
                                    </select></span></p>
                        </div>
                        <div className="flex justify-end col-span-4">
                            <p className=" flex gap-5 text-xs font-thin pr-2 py-2   " ><span><LocalPhoneIcon /></span><span> CALL: +0123 456 789 </span> <span> <FavoriteIcon /> </span> <span>MY WISHLIST
                                (0)</span><span>ABOUT US</span> <span>CONTACT US</span><span><PersonIcon /></span> <span>LOGIN</span></p>
                        </div>
                    </div>
                </div>
                {/* Upper Header End */}

                {/* Header second row start */}

                <div className="flex justify-between pt-10 px-2">



                    <div className="flex gap-6 ">
                        <img src={logo} />
                        <div className=" hidden lg:block md:block ">
                            <ul className="flex gap-10 ">
                                <select>
                                    <option>HOME</option>
                                </select>
                                <select>
                                    <option>SHOP</option>
                                </select>
                                <select>
                                    <option>PRODUCT</option>
                                </select>
                                <select>
                                    <option>PAGES</option>
                                </select>
                                <select>
                                    <option>BLOG</option>
                                </select>
                                <select>
                                    <option>ELEMENTS</option>
                                </select>

                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className="flex">
                            <TextField id="standard-basic" placeholder="Search Product.." variant="standard" />
                            <span className="border-b-2 border-gray-300 hover:text-red-600 pr-5"><button><SearchIcon /></button></span>
                            <span className=" hover:text-red-600"><ShoppingCartIcon /></span><span className="bg-red-600 rounded-full text-white w-8 pt-1 text-center text-sm">0</span>
                        </p>
                    </div>

                </div>

                {/* Header second row end */}



            </div>
        </>
    )
}
export default Header;