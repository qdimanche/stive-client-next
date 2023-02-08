import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import 'swiper/css';

// eslint-disable-next-line react/display-name
export default () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			autoplay={true}
			onSwiper={(swiper) => console.log(swiper)}
			className={'lg:h-[600px] h-[300px] mt-28'}
		>
			<SwiperSlide className={'rounded-[10px] overflow-hidden'}> <Image width={1920} height={1080} src={'https://images.unsplash.com/photo-1618100789816-86508e3f2275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2934&q=80'}
			                  className={'object-cover'}/><h1 className={'absolute top-1/2 left-20 transform -translate-y-1/2 w-1/2 !text-white '}>Une offre rien que pour vous, -50% sur tout le site</h1></SwiperSlide>
		</Swiper>
	);
};