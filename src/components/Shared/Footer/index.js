import React from "react";
import img1 from '../../../images/1.png';
import img2 from '../../../images/2.png'
import img3 from '../../../images/3.png'
import img4 from '../../../images/4.png'
import img5 from '../../../images/5.png'
import img6 from '../../../images/6.png'
import img7 from '../../../images/7.png'
import logo from '../../../images/logo-footer.png'
import payments from '../../../images/payments.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
    return (
        <>
            <div>
                <div className="bg-[#333333]">
                    <div className="grid grid-cols-1 lg:grid-cols-7 px-5 py-8 justify-items-center">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                        <img src={img7} />
                    </div>


                    <div className="grid grid-cols1 lg:grid-cols-7 px-2 pb-10 gap-10 justify-items-center">
                        <div className="col-span-2">
                            <p><img src={logo} className="w-28" /></p>
                            <p className="text-gray-500 pt-5">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                            <div className="flex gap-3 pt-10">
                                <p><span className="text-white">Got Question? Call us 24/7</span> <span className="text-red-300">+0123 456 789</span></p>
                                <p><span className="text-white"> Payment Method</span><img src={payments} /></p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">USEFULL LINKS</p>
                            <ul className="pt-5 text-gray-500">
                                <li className="hover:text-red-300">About Molla</li>
                                <li className="hover:text-red-300">How to shop on Molla</li>
                                <li className="hover:text-red-300">FAQ</li>
                                <li className="hover:text-red-300">Contact us</li>
                                <li className="hover:text-red-300">Log in</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-white">CUSTOMER SERVICE</p>
                            <ul className="pt-5 text-gray-500">
                                <li className="hover:text-red-300">Payment Methods</li>
                                <li className="hover:text-red-300">Money-back guarantee!</li>
                                <li className="hover:text-red-300">Returns</li>
                                <li className="hover:text-red-300">Shipping</li>
                                <li className="hover:text-red-300">Terms and conditions</li>
                                <li className="hover:text-red-300">Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-white">MY ACCOUNT</p>
                            <ul className="pt-5 text-gray-500">
                                <li className="hover:text-red-300">Sign In</li>
                                <li className="hover:text-red-300">View Cart</li>
                                <li className="hover:text-red-300">My Wishlist</li>
                                <li className="hover:text-red-300">Track My Order</li>
                                <li className="hover:text-red-300">Help</li>
                            </ul>
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <div>
                                <p className="text-white">SIGN UP TO NEWSLETTER</p>
                                <p className="pt-5 text-gray-500 pb-10">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>
                                <input placeholder="Enter your Email Addr" className="p-2" />
                            </div>
                        </div>

                    </div>

                    {/* second section end */}

                    {/* third section start */}
                    <div>
                        <hr />
                        <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 pb-5 px-2 text-gray-500">
                            <div>
                                <p> <span>Copyright © 2023 Molla Store. All Rights Reserved.</span><u><span className="hover:text-red-400 border-r-2 px-2">Terms of Use </span></u>
                                    <u><span className="hover:text-red-400 pl-2">Terms of Use </span></u></p>
                            </div>
                            <div className="flex justify-end">
                                <div>
                                    <p className="flex gap-4">
                                        <span>Social Media</span>
                                        <span className="text-blue-600"><FacebookIcon /></span>
                                        <span className="text-sky-400"> <TwitterIcon /></span>
                                        <span className="text-pink-600"><InstagramIcon /></span>
                                        <span className="text-red-700"><YouTubeIcon /></span>
                                        <span className="text-red-500"><PinterestIcon /></span>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third section end */}

                </div>
            </div>
        </>
    )
}
export default Footer;