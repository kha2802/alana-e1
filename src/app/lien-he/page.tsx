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
                <h3 className={`col-span-12 text-4xl md:text-5xl mb-4 p-4 text-[rgb(31,44,59)]  text-center md:text-left ${th_leky.className}`}>Chủ Đầu Tư</h3>
                <div className="col-span-12 md:col-span-3 content-center items-center">
                    <img className="w-full p-10" src="/images/pages/Logo-PTA.png" alt="Phương Trường An Group" />
                </div>
                <div className="col-span-12 md:col-span-9 px-10 md:px-2">
                    <p className="">
                        Thương hiệu Phương Trường An ra đời vào giai đoạn thị trường bất động sản diễn ra sôi động, sở hữu đội ngũ nhân sự trẻ, giàu chuyên
                        môn và đầy nhiệt huyết, những lợi thế đó đã đưa Công ty Phương Trường An nhanh chóng ghi dấu ấn trong lòng đông đảo khách hàng trên
                        thị trường bất động sản Bình Dương.
                    </p>
                    <p >
                        Trải qua quá trình hình thành và phát triển, Phương Trường An với mục tiêu hướng đến sự phát triển lâu dài và bền vững, Phương Trường An
                        cam kết luôn đặt chất lượng lên hàng đầu, mong muốn đem lại sự tin tưởng, hài lòng dành cho đối tác và khách hàng.
                    </p>
                    <p>
                        Không chỉ dừng lại ở phạm vi nhà phát triển thị trường BĐS tại Bình Dương. Mục tiêu của Phương Trường An là trở thành doanh nghiệp uy
                        tin hàng đầu Việt Nam, đa lĩnh vực từ Nhà Đất đến Du Lịch, Giáo dục. Góp phần đẩy mạnh vị thế thương hiệu của Phương Trường An nói
                        riêng và sự phát triển của Việt Nam nói chung.
                    </p>
                    <p>
                        Chúng tôi sẽ luôn lắng nghe và không ngừng cải tiến, nhằm mang đến những sản phẩm, dịch vụ đáp ứng nhu cầu khách hàng, góp phần
                        xây dựng cuộc sống thịnh vượng và đóng góp vào sự phát triển bền vững của xã hội.
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