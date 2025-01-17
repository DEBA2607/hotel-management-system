import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { PiPlaceholder } from 'react-icons/pi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// const rooms = [
//     {
//         roomId: "68192d72D92KB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'These cozy rooms located in the historic Palace Wing are the gateway to a memorable experience. Perfect for meditation, these windowless rooms offer you complete tranquillity. Designed for our jet-setting business travellers who require silence.',
//         price: 17000.0,
//         area: 33,
//         feature: "Grand architecture, spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "68192H72D92KB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'These rooms are located in the Palace Wing on the 2nd, 3rd and 4th floors. They exude an aura of the old-world charm and elegance. These rooms are adorned with delicate Rajput bay-windows, offering spectacular views of the poolside or the bustling Mumbai city. Includes butler service and Inclusive WiFi for four devices.',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "65192d72D92KB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "78192d72D92KB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "64192d72D92KB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "68192d72D92NB192HDK12NC12",
//         title: 'Deluxe Room',
//         desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
//     {
//         roomId: "68192d72D92KB192HDK12NC19",
//         title: 'Deluxe Room',
//         desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
//         price: 17000.0,
//         area: 33,
//         feature: "Spacious rooms and bathrooms.",
//         noOfPeople: 3,
//         bedsize: "King",
//         img: 'https://source.unsplash.com/random/300x300/?room',
//     },
// ]

const responsive = {
    1326: {
        items: 3,
    },
    540: {
        items: 2,
    },
    0: {
        items: 1,
    }
};

const RoomSlider = ({ rooms, hotel }) => {

    const truncate = (str) => {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute right-0 top-[45%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute left-0 top-[45%]" />
    };

    return (
        <div className='flex flex-wrap max-w-[1100px] w-full justify-around'>
            <AliceCarousel
                responsive={responsive}
                mouseTracking
                infinite
                controlsStrategy={"default"}
                autoPlayStrategy='all'
                autoPlayInterval={1000}
                disableDotsControls
                keyboardNavigation
                style={{
                    width: "100%",
                    justifyContent: "center",
                }}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}>
                {rooms.map((item, index) => <div key={index} className="md:max-w-[20rem] max-w-[15rem] mx-auto mb-8 shadow-lg">
                    <img src={item.img} alt="" className="object-cover object-center w-full md:h-60 h-50 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between h-[20rem] p-4 space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracki">{item.title}</h2>
                            <p className="text-sm">{truncate(item.desc)}</p>
                            <div className='flex items-center space-x-1'>
                                <PiPlaceholder className='text-lg font-medium' />
                                <p className="text-sm">{item.area} Sq Mt</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <AiOutlineWifi className='text-lg font-medium' />
                                <p className="text-sm">Inclusive WiFi</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <BsPeopleFill className='text-lg font-medium' />
                                <p className="text-sm">Up to {item.noOfPeople} guests</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <FaBed className='text-lg font-medium' />
                                <p className="text-sm">{item.bedsize}</p>
                            </div>
                            <p className="text-sm md:flex hidden">{item.feature}</p>
                        </div>
                        <div className='flex flex-1 justify-between items-center'>
                            <Link rel="noopener noreferrer" to={`${process.env.REACT_APP_HOST}/hotel/${hotel.slug}/rooms-and-suites?id=${item.roomId}`} className='text-blue-600 border-2 border-blue-600 md:p-2 p-1 text-sm rounded-md'>View Details</Link>
                            <p className='text-sm'>₹{item.price} / night</p>
                        </div>
                    </div>
                </div>)}
            </AliceCarousel>
        </div>
    )
}

export default RoomSlider
