import './Category.scss'
import { CgOptions } from 'react-icons/cg';
import {TbPool, TbBeach, TbToolsKitchen } from 'react-icons/tb'
import { GiIsland, GiCampingTent, GiGrandPiano, 
    GiFishingBoat, GiMountainCave, GiForestCamp, GiCastle, GiPaperWindmill, GiTreehouse } from 'react-icons/gi'
import { MdCabin, MdOutlineSurfing, MdSportsGolf, MdDownhillSkiing } from 'react-icons/md';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from "react-slick";
import { useState } from 'react';
const Category = () => {
  const [keyword, setKeyword] = useState();
  const [open, setOpen] = useState(false);
  const category = [
    {id: 1, name: "Pool", icon: <TbPool /> },
    { id: 2,  name: "Beach", icon: <TbBeach /> },
    { id: 3, name: "Kitchen", icon: <TbToolsKitchen />},
    { id: 4,  name: "island" ,icon: <GiIsland />},
    { id: 5, name: "Camping", icon: <GiCampingTent/> },
    {id: 6, name: "Piano", icon: <GiGrandPiano/> },
    {id: 7, name: "Houseboats", icon: <GiFishingBoat/>},
    { id: 8, name: "Cave", icon: <GiMountainCave/> },
    {id: 9, name: "Camping", icon: <GiForestCamp />},
    { id: 10, name: "Castle", icon: <GiCastle />},
    {id: 11, name: "Windmill", icon: <GiPaperWindmill />},
    {id: 12, name: "Treehouse", icon: <GiTreehouse />},
    {id: 13, name: "Cabins", icon: <MdCabin/>},
    {id: 14, name: "Surfing" , icon:  <MdOutlineSurfing />,},
    { id: 15, name: "Golf", icon: <MdSportsGolf /> },
    { id: 16, name: "Ski-in/out", icon: <MdDownhillSkiing />}
  ];

  const ArrowLeft = (props) => (
    <button {...props} className="cPrev"> <BiChevronLeft/> </button>
  );

  const ArrowRight = (props) => (
    <button {...props} className="cNext"><BiChevronRight/></button>
  );

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    slidesToShow: 13,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }
      ],
  }

  return (
    <div style={{"top" : "86px", "zIndex" : "2"}}  className='container  mx-auto px-4 mt-5  overflow-y-hidden py-2  sticky  bg-white'>
      <div className='flex items-center gap-10 justify-between py-2'>
        <div className='relative  px-8 m-0 overflow-y-hidden'>
          <Slider {...settings}>
            {
              category.map((item)=>(
                <div key={item.id}>
                  <div className="iconContainer" style={{color :keyword === item.name  ? " black" : "", borderBottom :keyword === item.name  ? " 2px solid  black" : ""}} onClick={()=>setKeyword(item.name) }>
                    <div className='text-xl flex justify-center'>{item.icon}</div>
                    <p className='m-0 text-[14px] text-center'>{item.name}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Category