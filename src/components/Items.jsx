import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



const Items = (props) => {
	console.log(props)
	console.log(props.filterarr)

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: "center",
   		centerMode: true,
		autoplay: true,
    	speed: 3000,
  	  	autoplaySpeed: 3000,
   		cssEase: "linear"
	  };
  return (
	<div>
	<Slider {...settings}>
     { props.filterarr.map((ele)=>{
		return <Link to={'/view'} state={ele} className='flex flex-col items-center'>
        <img className='m-auto ' src={ele.thumbnail} alt="" />
		<h1 className='text-gray-50 text-center'>{ele.title}</h1>
      </Link> 
	 })}

      
    </Slider>
	  
	</div>
  )
}

export default Items
