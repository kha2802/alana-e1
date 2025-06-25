"use client"
import Link from "next/link";
import { th_leky } from "./fonts";
import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import Investor from "@/views/investor";
import Footer from "@/views/footer";
import FadeInSection from "@/components/fade-in/FadeInSection";
import { useEffect, useState } from "react";
import { HidenLoading, ShowLoading } from "@/components/loading-page/LoadingPage";
import SendModal from "@/views/SendModal";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Alana City - Bản giao hưởng mặt trời ',
//   description: 'Trường an,truong an, phuong truong an, phước hoà, phuoc hoa',
// }

const images = [
  'url(/images/pages/home/bg-top1.png)',
  'url(/images/pages/home/bg-top2.png)',
  'url(/images/pages/home/bg-top3.png)'
];

export default function Home() {
  useEffect(() => {
    ShowLoading()
    const timer = setTimeout(() => {
      HidenLoading()
    }, 3000); // 3 giây
    return () => clearTimeout(timer);
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // thay đổi hình ảnh sau mỗi 3 giây

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <div className="bg-cover bg-center h-screen mt-[4rem] relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundColor: '#091635',
          backgroundImage: images[currentImageIndex],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} >
      </div>
      <div className="mt-4 md:m-8 lg:p-12 " >
        <div className="bg-cover bg-center " style={{ backgroundImage: `url(/images/pages/bg-line.png)` }}>
          <div className="grid grid-cols-12 max-w-screen-xl mx-auto" >
            <div className={`col-span-12 md:col-span-4 text-5xl md:text-6xl my-4 text-[#91473a] content-center text-fade-up ${th_leky.className}`}>
              <p className="ml-6 bg-gradient-to-r from-[#d69d7e] to-[#b16f5a] text-transparent bg-clip-text">
                <span className="ml-10">Bản</span>
                <br />Giao hưởng
                <br />
                <span className="ml-10">Mặt Trời</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 text-black md:pl-12 p-10 md:p-2">
              <p className="text-fade-up">
                Mỗi sớm mai thức giấc tại Alana City, bạn như được ôm trọn trong vòng tay ấm áp của mặt trời. Ánh nắng
                vàng dịu nhẹ len lỏi qua từng khe cửa, đánh thức những giấc mơ đẹp và mang đến một ngày mới tràn đầy
                năng lượng. Hơn cả một chốn đi về, Alana City còn là tổ ấm chan hòa tình yêu thương, nơi bạn tìm thấy sự
                bình yên và hạnh phúc.
              </p>
              <p className="mt-3 text-fade-up">
                Với hệ thống tiện ích hiện đại, không gian sống xanh mát và cộng đồng cư dân văn minh, Alana City mang
                đến cho cả gia đình một cuộc sống tiện nghi, đẳng cấp. Đặc biệt, vị trí đắc địa ngay cạnh các khu công
                nghiệp &ldquo;xanh&rdquo; lớn nhất tại Thành Phố Hồ Chí Minh sẽ mở ra vô vàn cơ hội kinh doanh và việc làm, giúp bạn an tâm kiến
                tạo cuộc sống thịnh vượng.
              </p>
            </div>
          </div>
          <div className="w-full mt-10 hidden md:block">
            <Carousel >
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full" src={`/images/pages/home/carousel1.png`} alt="" />
                  <img className="w-full" src={`/images/pages/home/carousel2.png`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full" src={`/images/pages/home/carousel3.png`} alt="" />
                  <img className="w-full" src={`/images/pages/home/carousel4.png`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full" src={`/images/pages/home/carousel5.png`} alt="" />
                  <img className="w-full" src={`/images/pages/home/carousel6.png`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full" src={`/images/pages/home/carousel7.png`} alt="" />
                  <img className="w-full" src={`/images/pages/home/carousel8.png`} alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full" src={`/images/pages/home/carousel9.png`} alt="" />
                  <img className="w-full" src={`/images/pages/home/carousel1.png`} alt="" />
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
        <div className="w-full mt-10 md:hidden">
          <Carousel >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <CarouselItem key={i}>
                <img className="w-full" src={`/images/pages/home/carousel${i}.png`} alt="" />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div >
      <div className="relative  md:mt-2" >
        <div className="relative md:absolute w-full md:bg-[#1f2c3b] md:bg-opacity-90 left-0 right-0 md:bottom-10 ">
          <FadeInSection className=" md:px-8 my-8 grid grid-cols-12 max-w-screen-xl mx-auto">
            <div className={`col-span-12 md:col-span-4 text-fade-up px-5 content-center ${th_leky.className}`}>
              <p className="text-5xl md:text-6xl w-full text-left bg-gradient-to-r from-[#bc7c64] to-[#91473a]  text-transparent bg-clip-text">Thành phố</p>
              <p className="text-5xl md:text-6xl py-2.5 w-full text-right mt-4 bg-gradient-to-r from-[#bc7c64] to-[#91473a]  text-transparent bg-clip-text">Ánh sáng</p>
            </div>
            <div className="col-span-12 md:col-span-8 xs:text-[#091635] md:text-white md:pl-12 p-10 md:p-2">
              <p className="text-fade-down">
                Lấy cảm hứng từ &ldquo;Ánh sáng&rdquo; trong tiếng Anh và trong ngôn ngữ Polynesia Alana có nghĩa là &ldquo;Khởi đầu mới&rdquo; ,
                Alana City tựa như một đóa hoa rực rỡ tỏa sáng giữa miền đất phồn thịnh.
                Nơi đây mang vẻ đẹp hiện đại giao hòa cùng thiên nhiên trong lành, kiến tạo nên không gian sống xanh, tiện nghi và bền vững.
              </p>
              <p className="text-fade-up mt-2">
                Tọa lạc tại vị trí chiến lược của vùng kinh tế sôi động, Alana City là điểm đến lý tưởng,
                đáp ứng nhu cầu nhà ở tại Thành Phố Hồ Chí Minh. Hệ thống tiện ích hoàn hảo cùng cộng đồng văn minh, thân thiện,
                mang đến cho cư dân những trải nghiệm sống trọn vẹn, tô điểm thêm cho vẻ đẹp của thành phố ánh sáng.
                Alana City, tự hào là biểu tượng của sự phát triển và thịnh vượng, là khởi đầu mới cho một cuộc sống thăng hoa.
              </p>
            </div>
          </FadeInSection>
        </div>
        <img className="w-full" src="/images/pages/home/bg-center.png" alt="analacity" />
      </div>
      <div className="bg-[#0a3252] content-center">
        <div className="grid grid-cols-12  max-w-screen-xl mx-auto content-center  py-8">
          <FadeInSection className=" col-span-12 md:col-span-5">
            <div className={`col-span-12 p-2 md:col-span-4 text-[#e2ac8a] text-5xl md:text-6xl mt-10 md:mt-2  text-center text-fade-right`}>
              <p className={th_leky.className}>&ldquo;Trái tim&rdquo;</p>
              <p className={th_leky.className}>kết nối</p>
              <p className={th_leky.className}>kinh tế vùng</p>
              <div className="w-full p-10 md:p-2">
                <p className="text-sm mt-4 px-4 text-left">
                  Alana City, được ví như &ldquo;trái tim&rdquo; kết nối kinh tế vùng khi tọa
                  lạc ngay trên trục giao thương huyết mạch ĐT 741 và cao
                  tốc TP HCM - Thủ Dầu Một - Chơn Thành. Với vị trí đắc địa
                  này, Alana City hưởng trọn mạch nguồn thịnh vượng từ hệ
                  thống giao thông chiến lược và đồng bộ, bao gồm:
                </p>
                <ul className="text-left text-sm mt-4 leading-6 pl-8 pr-4 list-disc">
                  <li>QL13, QL14, HL 612</li>
                  <li>Đường tạo lực Bắc Tân Uyên - Phú Giáo - Đồng Phú</li>
                  <li>Đường cao tốc Thành Phố Hồ Chí Minh - Đồng Phú</li>
                  <li>Vành đai 3, đại lộ Mỹ Phước - Tân Vạn - Phú Giáo, và nhiều
                    tuyến đường khác.</li>
                </ul>
              </div>
            </div>
            <Link href="/vi-tri" className="bg-[#e2ac8a] rounded-md px-2 py-0 float-right mt-3 text-fade-right">Xem Thêm <span className="text-2xl">›</span></Link>
          </FadeInSection>

          <FadeInSection className="hidden md:block col-span-7 px-4">
            <img className="w-full text-fade-left my-24" src="/videos/address.gif" alt="Vị trí dự án alana" />
          </FadeInSection>
          <div className="col-span-12 my-6 py-20 block md:hidden overflow-hidden">
            <img className="flex justify-center items-center scale-[2]" src="/videos/address.gif" alt="Vị trí dự án alana" />
          </div>
        </div>
      </div>

      <img className="hidden md:block w-full" src="/images/pages/home/bg-bottom.png" alt="alanacity map" />
      <img className="block md:hidden w-full" src="/images/pages/home/bg-bottom-mobile.png" alt="alanacity map" />
      {/* <div className="bg-cover bg-center h-screen relative" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/home/bg-bottom.png)` }}>
        <FadeInSection className=" absolute  bottom-24 left-0 w-full bg-[#1f2c3b] bg-opacity-90">
          <div className="max-w-screen-xl mx-auto w-full grid grid-cols-12 text-[#e2ac8a] p-4 text-fade-up">
            <div className={`col-span-12 md:col-span-6 p-1 md:p-4 ${th_leky.className}`}>
              <p className="text-3xl md:text-5xl ml-8">Tổng thể</p>
              <p className="text-3xl md:text-5xl mt-2 ml-2">Quy hoạnh dự án</p>
            </div>

            <div className="col-span-6 md:col-span-3 p-10 md:p-0">
              <p className="text-xl text-[#f1d6c4]">Tổng diện tích</p>
              <p className="text-3xl  font-bold">41.9ha</p>

              <p className="text-xl text-[#f1d6c4] mt-2">Diện tích sản phẩm</p>
              <p className="text-3xl  font-bold">65 - 280m<sup>2</sup></p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="text-xl text-[#f1d6c4]">Số lượng sản phẩm</p>
              <p className="text-3xl  font-bold">2760</p>

              <p className="text-xl text-[#f1d6c4] mt-2">Công viên trung tâm</p>
              <p className="text-3xl  font-bold">2ha</p>
            </div>
          </div>
        </FadeInSection>
      </div> */}
      <div className="mt-10">
        <img className="w-full" src="/images/pages/home/6lydo.jpg" alt="alanacity map" />
      </div>
      <div className="my-10 md:px-10 md:p-16 md:pt-10 bg-white">
        <Investor />
      </div>
      <Footer />
      <SendModal />
    </div >
  )
}
