import React from "react";
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';
import banner4 from '../../images/banner-4.jpg';
import banner5 from '../../images/banner-5.jpg';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import post1 from '../../images/post1.jpg';
import post2 from '../../images/post2.jpg';
import post3 from '../../images/post3.jpg';
import post4 from '../../images/post4.jpg';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import fpimg1 from '../../images/fpimg1.jpg';
import fpimg2 from '../../images/fpimg2.jpg';
import fpimg3 from '../../images/fpimg3.jpg';
import fpimg4 from '../../images/fpimg4.jpg';
import fpimg5 from '../../images/fpimg5.jpg';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cr1 from '../../images/cr1.png';
import cr2 from '../../images/cr2.png';
import cr3 from '../../images/cr3.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import blockimg from '../../images/blockimg.png';
const LandingPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <div className="px-2">
                {/* first section start */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pt-10 gap-5">
                    <div style={{ backgroundImage: `url(${banner1})`, width: '', height: "500px", backgroundPosition: 'center' }}
                        className="flex flex-col justify-center ">
                        <div className="text-center text-white">
                            <p >NEW COLLECTION</p>
                            <p className="text-3xl pt-2">SHOP WOMEN'S</p>
                            <p className="pt-8 "><span className="hover:bg-red-400 border-b-2 px-5 py-3">DISCOVER NOW</span> </p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${banner2})`, height: '500px', backgroundPosition: 'center' }}
                        className="flex flex-col justify-center">
                        <div className="text-center text-white">
                            <p >NEW COLLECTION</p>
                            <p className="text-3xl pt-2">SHOP MEN'S</p>
                            <p className="pt-8 "><span className="hover:bg-red-400 border-b-2 px-5 py-3">DISCOVER NOW</span> </p>
                        </div>
                    </div>
                </div>
                {/* first section end */}
                {/* second section start */}
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 py-5 gap-4">
                    <div style={{ backgroundImage: `url(${banner3})`, height: "300px", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
                        <div className="text-white pl-16 pt-20">
                            <p className="hover:text-red-600">FLIP FLOP</p>
                            <p className="py-6 text-2xl hover:text-red-600">SUMMER <br />
                                SALE - 70% OFF
                            </p>
                            <p><span className="hover:text-red-600 border-b-2  py-3">SHOP NOW</span> </p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${banner4})`, height: "300px", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
                        <div className="text-white pl-16 pt-20">
                            <p className="hover:text-red-600">ACCESSORIES</p>
                            <p className="py-6 text-2xl hover:text-red-600">2021 WINTER <br />
                                UP TO 50% OFF
                            </p>
                            <p><span className="hover:text-red-600 border-b-2  py-3">SHOP NOW</span> </p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${banner5})`, height: "300px", backgroundPosition: 'center', backgroundRepeat: "no-repeat" }}>
                        <div className="text-white pl-16 pt-20">
                            <p className="hover:text-red-600">NEW IN</p>
                            <p className="py-6 text-2xl hover:text-red-600">WOMEN'S <br />
                                SPORTSWARE
                            </p>
                            <p ><span className="hover:text-red-600 border-b-2  py-3">SHOP NOW</span> </p>
                        </div>
                    </div>
                </div>
                {/* second section end */}


                {/* third section start */}

                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 py-8 pl-10">
                        <div className="flex gap-5">
                            <p className="pt-2" ><LocalShippingIcon fontSize="large" /></p> <p><span>PAYMENT & DELIVERY</span> <br /><span className="text-sm text-gray-500 font-semibold">Free Shipping for orders over $50</span></p>
                        </div>
                        <div className="flex gap-5">
                            <p className="pt-2" ><RotateLeftIcon fontSize="large" /></p> <p><span>PAYMENT & DELIVERY</span> <br /><span className="text-sm text-gray-500 font-semibold">Free Shipping for orders over $50</span></p>
                        </div>
                        <div className="flex gap-5">
                            <p className="pt-2" ><HeadphonesIcon fontSize="large" /></p> <p><span>PAYMENT & DELIVERY</span> <br /><span className="text-sm text-gray-500 font-semibold">Free Shipping for orders over $50</span></p>
                        </div>
                    </div>
                </div>
                {/* third section end */}
                {/* fourth section start */}

                <div className="bg-gray-100">
                    <div className="flex justify-center">
                        <div className=" py-16">
                            <p className="text-center text-lg font-semibold pb-2">FEATURED PRODUCTS</p>
                            <Box sx={{ width: '100%', }}>
                                <Tabs value={value} onChange={handleChange} centered>
                                    <Tab label="WOMEN'S CLOTHING" />
                                    <Tab label="MEN'S CLOTHING" />

                                </Tabs>
                            </Box>
                            <div className="grid grid-cols-1 lg:grid-cols-5 pt-8 gap-5">
                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg1} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Men</p>
                                    <p>Super Skinny High Jeggings</p>
                                    <p><span className="text-[#EF8587]"> $190.00</span> <span className="text-gray-300"><s>$310.00</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg2} />
                                    <p className="text-sm text-gray-400 pt-3">Men, Clothing, Fashion & Clothing</p>
                                    <p>Tie-detail top</p>
                                    <p><span className="text-[#EF8587]"> $50.00</span> <span className="text-gray-300"><s>$84.00</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" defaultValue={2} size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg3} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Men</p>
                                    <p>Denim Jacket Blue</p>
                                    <p><span className="text-[#EF8587]"> $70.00</span> <span className="text-gray-300"><s>$80.95</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg4} className="h-72" />
                                    <p className="text-sm text-gray-400 pt-3">Women Clothing</p>
                                    <p>Long-Sleeved blouse</p>
                                    <p><span > $80.00 - $84.00</span> </p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg5} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Clothing</p>
                                    <p>Vest Dress Black</p>
                                    <p><span className="text-[#EF8587]"> $89.00</span> </p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fourth section end */}
                {/* fifth section start */}


                <div className="bg-white">
                    <div className="flex justify-center">
                        <div className=" py-16">
                            <p className="text-center text-lg font-semibold pb-2">NEW ARRIVALS</p>
                            <Box sx={{ width: '100%', }}>
                                <Tabs value={value} onChange={handleChange} centered>
                                    <Tab label="WOMEN'S CLOTHING" />
                                    <Tab label="MEN'S CLOTHING" />

                                </Tabs>
                            </Box>
                            <div className="grid grid-cols-1 lg:grid-cols-5 pt-8 gap-5">
                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg1} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Men</p>
                                    <p>Super Skinny High Jeggings</p>
                                    <p><span className="text-[#EF8587]"> $190.00</span> <span className="text-gray-300"><s>$310.00</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg2} />
                                    <p className="text-sm text-gray-400 pt-3">Men, Clothing, Fashion & Clothing</p>
                                    <p>Tie-detail top</p>
                                    <p><span className="text-[#EF8587]"> $50.00</span> <span className="text-gray-300"><s>$84.00</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" defaultValue={2} size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg3} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Men</p>
                                    <p>Denim Jacket Blue</p>
                                    <p><span className="text-[#EF8587]"> $70.00</span> <span className="text-gray-300"><s>$80.95</s></span></p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg4} className="h-72" />
                                    <p className="text-sm text-gray-400 pt-3">Women Clothing</p>
                                    <p>Long-Sleeved blouse</p>
                                    <p><span > $80.00 - $84.00</span> </p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>



                                <div className="text-center  bg-white py-2">
                                    <img src={fpimg5} />
                                    <p className="text-sm text-gray-400 pt-3">Women, Clothing</p>
                                    <p>Vest Dress Black</p>
                                    <p><span className="text-[#EF8587]"> $89.00</span> </p>
                                    <p className="pt-3 text-gray-400"><span >
                                        <Rating name="no-value" size="small" value={null} /></span> <span className="text-sm">(2 Reviews)</span></p>
                                </div>
                            </div>
                            <div className="flex justify-center py-16 ">
                                <button className="text-center border-2 py-3 px-10  hover:text-red-400 hover:border-red-300 text-sm">Shop More <ArrowRightAltIcon fontSize="small" /></button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                {/* fifth section end */}


                {/* sixth section start */}

                <div>
                    <p className="text-center text-xl font-semibold pb-8">FROM OUR BLOG</p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 justify-items-center">
                        <div className="text-center">
                            <img src={post1} />
                            <p className="text-sm text-gray-300 py-2"><span>Mar 29, 2020 |</span><span> 0 Comments</span></p>
                            <p>SED ADIPISCING ORNARES.</p>
                            <p className="text-[#C65454] text-sm pt-3">CONTINUE READING</p>
                        </div>
                        <div className="text-center">
                            <img src={post2} />
                            <p className="text-sm text-gray-300 py-2"><span>Mar 29, 2020 |</span><span> 3 Comments</span></p>
                            <p>FUSCE LACINSVIA ARCUET NULLA.</p>
                            <p className="text-[#C65454] text-sm pt-3">CONTINUE READING</p>
                        </div>
                        <div className="text-center">
                            <img src={post3} />
                            <p className="text-sm text-gray-300 py-2"><span>Mar 29, 2020 |</span><span> 3 Comments</span></p>
                            <p>QUIQUE VOLUTPAT MVSATTIS EROS.</p>
                            <p className="text-[#C65454] text-sm pt-3">CONTINUE READING</p>
                        </div>
                        <div className="text-center">
                            <img src={post4} />
                            <p className="text-sm text-gray-300 py-2"><span>Mar 28, 2020 |</span><span> 3 Comments</span></p>
                            <p>MAURISSV SUSCIPIT IN MASSA.</p>
                            <p className="text-[#C65454] text-sm pt-3">CONTINUE READING</p>
                        </div>
                    </div>
                    <div className="flex justify-center py-16 ">
                        <button className="text-center border-2 py-3 px-6  hover:text-white hover:bg-red-400 text-sm">View More Articles <ArrowRightAltIcon fontSize="small" /></button>
                    </div>

                </div>
                {/* sixth section end */}

                {/* seventh section start */}

                <div className="bg-gray-50">
                    <p className="text-xl text-center py-10">OUR CUSTOMERS SAY</p>
                    <div className="flex justify-center  ">

                        <Carousel showThumbs={false} showStatus={false} >
                            <div className="flex justify-center" >
                                <div>
                                    <div className=" flex justify-center">
                                        <p>
                                            <img src={blockimg} />
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center lg:px-80 ">
                                        <p className=" pt-8 ">"FRIENDLY SUPPORT"</p>
                                        <p className="text-gray-600 pt-5">“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.”</p>
                                        <p className="pt-10 font-semibold">DAMON STONE,</p>
                                        <p className="text-gray-600 pb-24">Customer</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-center" >
                                <div>
                                    <div className=" flex justify-center">
                                        <p>
                                            <img src={blockimg} className="w-10" />
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center lg:px-80 ">
                                        <p className=" pt-8 ">"REALLY GREATE STORE"</p>
                                        <p className="text-gray-600 pt-5">“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra”</p>
                                        <p className="pt-10 font-semibold">CHARLY SMITH,</p>
                                        <p className="text-gray-600 pb-24">Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center" >
                                <div>
                                    <div className=" flex justify-center">
                                        <p>
                                            <img src={blockimg} className="w-10" />
                                        </p>
                                    </div>
                                    <p className=" pt-8 ">"REALLY GREATE STORE"</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

                {/* seventh section end */}
            </div>
        </>
    )
}
export default LandingPage;