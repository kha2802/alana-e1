import Carousel, { CarouselItem } from "@/components/carousel/Carousel"
import Footer from "@/views/footer"
import { th_leky } from "../fonts"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: 'Liên hệ - khu dô thị Alana city',
    description: 'khu đô thị,bản giao mặt trời, dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất bình dương, mua nhà bình dương',
}

const LienHe = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto grid grid-cols-12 mt-24">
                <h3 className={`col-span-12 text-4xl md:text-5xl mb-5 p-4 text-[rgb(31,44,59)]  text-center  ${th_leky.className}`}>Đơn vị phân phối chính thức</h3>
                <div className="col-span-12 md:col-span-3 flex justify-center items-center">
                    <img
                        className="w-full max-w-[300px] object-contain"
                        src="/images/pages/Logo%20Maxreal.png"
                        alt="Maxreal"
                    />
                </div>
                <div className="col-span-12 md:col-span-9 flex flex-col justify-center px-6 md:px-12">
                    <p className="mb-4">
                        Công Ty Cổ Phần Bất Động Sản Maxreal là chủ đầu tư, nhà phát triển và đơn vị phân phối các sản phẩm đất nền sổ đỏ uy tín tại khu vực Thành Phố Hồ Chí Minh và các khu vực lân cận.
                    </p>
                    <p className="mb-4">
                        Maxreal tự hào là một trong những công ty bất động sản được chính khách hàng tin tưởng và bình chọn. Với hơn 10 năm kinh nghiệm dày dặn trên thị trường bất động sản Đồng Nai, Thành Phố Hồ Chí Minh,...
                    </p>
                    <p className="mb-4">
                        Maxreal luôn nỗ lực không ngừng để mang đến những sản phẩm chất lượng cao cùng dịch vụ hoàn hảo nhất cho khách hàng.
                    </p>
                    <p>
                        Gia tăng giá trị bất động sản thông qua dịch vụ chuyên nghiệp và tận tâm là động lực phát triển bền vững của Maxreal – một trong những nhà đầu tư tiên phong hàng đầu trong lĩnh vực bất động sản miền Nam.
                    </p>
                </div>
                <div className="col-span-12 ">
                    <hr className="mt-8 border-b-2 shadow-md" />
                </div>
                <div className="col-span-12  text-center py-16 px-20 hidden md:block">
                    <h4 className="text-[#91473a] text-2xl mb-4">ĐỐI TÁC CHIẾN LƯỢC</h4>
                    <Carousel >
                        <CarouselItem>
                            <div className="grid  md:grid-cols-4 gap-28">
                                <img className="mt-[30px]" src="/images/logos/vietinBank.webp" alt="alana city" />
                                <img className="mt-[10px]" src="/images/logos/vcb.png" alt="alana city" />
                                <img className="" src="/images/logos/techcombank.png" alt="alana city" />
                                <img className="mt-[28px]" src="/images/logos/HDBank.png" alt="alana city" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="grid md:grid-cols-4 gap-28">
                                <img className="mt-[30px]" src="/images/logos/vietinBank.webp" alt="alana city" />
                                <img className="mt-[10px]" src="/images/logos/vcb.png" alt="alana city" />
                                <img className="" src="/images/logos/techcombank.png" alt="alana city" />
                                <img className="mt-[28px]" src="/images/logos/HDBank.png" alt="alana city" />
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div className="col-span-12  text-center py-16 px-6  md:hidden">
                    <h4 className="text-[#91473a] text-2xl mb-4">ĐỐI TÁC CHIẾN LƯỢC</h4>
                    <Carousel >
                        {['vietinBank.webp', 'vcb.png', 'techcombank.png', 'HDBank.png'].map((s: string, index: number) => (
                            <CarouselItem key={index}>
                                <img className="mt-[30px]" src={`/images/logos/${s}`} alt="alana city" />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
            {/* <div className="w-full">
                <h2 className="my-10 max-w-screen-xl mx-auto text-xl text-center text-[#91473a] font-bold">CÁC DỰ ÁN ĐÃ TRIỂN KHAI</h2>
                <div className="p-2 mt-10 md:mb-20 h-[500px]">
                <PhotoScroll imageData={['/images/pages/rectangle.jpg','/images/pages/ptp.png','/images/pages/luxury.png','/images/pages/ptp.png']}></PhotoScroll>
                </div>
            </div> */}
            <div className="my-10 max-w-screen-xl mx-auto ">
                <h2 className="text-xl text-center text-[#91473a] font-bold">CÁC DỰ ÁN ĐÃ TRIỂN KHAI</h2>
                <div className="p-2 mt-10 md:mb-20 hidden md:block">
                    <Carousel>
                        <CarouselItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Link href="/du-an/phuong-truong-an-tan-dinh"> <img className="w-full" src="/images/pages/luxury.png" alt="Các dự án đã triển khai alana" /> </Link>
                                <Link href="/du-an/phuong-truong-an-5"> <img className="w-full" src="/images/pages/ptp.png" alt="Các dự án đã triển khai alana" /></Link>
                                <Link href="/du-an/fc-truong-an"> <img className="w-full" src="/images/pages/rectangle.jpg" alt="Các dự án đã triển khai alana" /></Link>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Link href="/du-an/phuong-truong-an-tan-dinh"> <img className="w-full" src="/images/pages/luxury.png" alt="Các dự án đã triển khai alana" /> </Link>
                                <Link href="/du-an/phuong-truong-an-5"> <img className="w-full" src="/images/pages/ptp.png" alt="Các dự án đã triển khai alana" /></Link>
                                <Link href="/du-an/fc-truong-an"> <img className="w-full" src="/images/pages/rectangle.jpg" alt="Các dự án đã triển khai alana" /></Link>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div className="p-2 mt-10 md:mb-20  md:hidden">
                    <Carousel>
                        <CarouselItem>
                            <Link href="/du-an/phuong-truong-an-tan-dinh"> <img className="w-full" src="/images/pages/luxury.png" alt="Các dự án đã triển khai alana" /> </Link>
                        </CarouselItem>
                        <CarouselItem>
                            <Link href="/du-an/phuong-truong-an-5"> <img className="w-full" src="/images/pages/ptp.png" alt="Các dự án đã triển khai alana" /></Link>
                        </CarouselItem>
                        <CarouselItem>
                            <Link href="/du-an/fc-truong-an"> <img className="w-full" src="/images/pages/rectangle.jpg" alt="Các dự án đã triển khai alana" /></Link>
                        </CarouselItem>

                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LienHe