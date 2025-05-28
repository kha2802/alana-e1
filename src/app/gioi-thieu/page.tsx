import FadeInSection from "@/components/fade-in/FadeInSection"
import { th_leky } from "../fonts"
import Footer from "@/views/footer"
import Carousel, { CarouselItem } from "@/components/carousel/Carousel"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Giới thiệu dự án - dự án Phương Trường An',
    description: 'dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất bình dương, mua nhà bình dương',
}

const GioiThieu = () => {
    return (
        <div className="mt-16">
            <div className="relative" >
                <img className="w-full" src="/images/pages/gioi-thieu/bg-top.png" alt="" />
                <FadeInSection className="absolute bottom-2 right-0 left-0 ">
                    <div className="w-full grid grid-cols-2 xl:gap-4 place-content-between  text-[#e2ac8a] xl:p-4 text-fade-up">
                        <div className={`p-1 xl:p-4 ${th_leky.className}`}>
                            <p className="text-[2vw] xl:text-5xl ml-8">Tổng thể</p>
                            <p className="text-[2vw] xl:text-5xl :mt-2 ml-2">Quy hoạnh dự án</p>
                        </div>
                        <div className="flex flex-row-reverse xl:gap-10">
                            <div className="basis-1/2 xl:basis-2/6">
                                <p className="text-[1.2vw] xl:text-xl text-[#f1d6c4]">Diện tích sản phẩm</p>
                                <p className="text-[1.5vw] xl:text-3xl  font-bold">65 - 280m<sup>2</sup></p>

                                <p className="text-[1.2vw] xl:text-xl text-[#f1d6c4]">Công viên trung tâm</p>
                                <p className="text-[1.5vw] xl:text-3xl  font-bold">10,000m<sup>2</sup></p>
                            </div>
                            <div className="basis-1/2 xl:basis-2/6">
                                <p className="text-[1.2vw] xl:text-xl text-[#f1d6c4]">Tổng diện tích</p>
                                <p className="text-[1.5vw] xl:text-3xl  font-bold">41.9ha</p>

                                <p className="text-[1.2vw] xl:text-xl text-[#f1d6c4]">Số lượng sản phẩm</p>
                                <p className="text-[1.5vw] xl:text-3xl  font-bold">2760</p>

                            </div>
                        </div>
                    </div>

                </FadeInSection>
                <div className="hidden md:block group opacity-0 hover:opacity-100">
                    <img className="absolute w-[35%] left-[3vw] top-[18vh] 2xl:top-[25vh] group-hover:opacity-100" src="/images/pages/gioi-thieu/sao-hoa.png" alt="sao hỏa" />
                    <div className="hidden group-hover:block absolute top-[40vh] left-[40vw] rounded-xl p-4 bg-[#f1d7c4] text-[#92493b] bg-opacity-80 w-[400px]">
                        <h1 className={`text-2xl text-center ${th_leky.className}`}>THE MARS</h1>
                        <h3 className={`text-xl text-center ${th_leky.className}`}>Sao Hỏa</h3>
                        <p className="text-justify mt-5 text-sm">
                            Mars - Tâm điểm thương mại sầm uất. Tọa lạc tại vị trí đắc
                            địa ngay mặt tiền trục đường ĐT 741, phân khu Mars dễ
                            dàng tiếp cận lượng khách hàng lớn, trở thành tâm điểm
                            của các hoạt động kinh doanh. Với hệ thống tiện ích đẳng
                            cấp như công viên năng lượng mặt trời, quảng trường tổ
                            chức sự kiện và trung tâm thể thao, Mars hứa hẹn sẽ trở
                            thành một trong những phân khu sôi động nhất của
                            &ldquo;thành phố ánh sáng&rdquo; Alana City.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block group opacity-0 hover:opacity-100">
                    <img className="absolute w-[17%] top-[15vh] 2xl:top-[19vh] right-[25.5vw] group-hover:opacity-100" src="/images/pages/gioi-thieu/sao-kim.png" alt="sao kim" />
                    <div className="hidden group-hover:block absolute top-[40vh] left-[40vw] rounded-xl p-4 bg-[#f1d7c4] text-[#92493b] bg-opacity-80 w-[400px]">
                        <h1 className={`text-2xl text-center ${th_leky.className}`}>VENUS</h1>
                        <h3 className={`text-1xl text-center ${th_leky.className}`}>Sao Kim</h3>
                        <p className="text-justify mt-5 text-sm">
                            Venus - thiên đường mua sắm và giải trí ngay tại nhà. Phân
                            khu Venus mang đến cho cư dân những trải nghiệm tuyệt
                            vời với trung tâm thương mại Solar Mall sầm uất, hệ thống
                            shophouse đa dạng, phố ẩm thực Á Âu phong phú. Sau
                            những giờ làm việc căng thẳng, bạn có thể thư giãn tại
                            công viên Dream Park xanh mát hay thoải mái mua sắm
                            trên đại lộ Star Way nhộn nhịp. Đặc biệt, với trạm sạc
                            thông minh Eco Boots, cư dân có thể yên tâm sử dụng các
                            phương tiện di chuyển xanh.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block group opacity-0 hover:opacity-100">
                    <img className="absolute w-[50%] bottom-[14vh] 2xl:bottom-[20vh] right-[6vw] group-hover:opacity-100" src="/images/pages/gioi-thieu/sao-moc.png" alt="sao moc" />
                    <div className="hidden group-hover:block absolute top-[40vh] left-[40vw] rounded-xl p-4 bg-[#f1d7c4] text-[#92493b] bg-opacity-80 w-[400px]">
                        <h1 className={`text-2xl text-center ${th_leky.className}`}>JUPITER</h1>
                        <h3 className={`text-xl text-center ${th_leky.className}`}>Sao Mộc</h3>
                        <p className="text-justify mt-5 text-sm">
                            Jupiter - &ldquo;lá phổi xanh&rdquo; giữa lòng đô thị. Với trường quốc tế
                            Carina, private park và hệ thống đường hoa được thiết kế
                            tinh tế, phân khu Jupiter mang đến một không gian sống
                            đẳng cấp, nơi bạn có thể tận hưởng những giá trị sống
                            hiện đại nhất. Hệ thống năng lượng mặt trời tạo nên một
                            không gian sống xanh, thân thiện với môi trường.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block group opacity-0 hover:opacity-100">
                    <img className="absolute w-[32%] top-[11vh] 2xl:top-[16vh] right-[34vw] group-hover:opacity-100" src="/images/pages/gioi-thieu/sao-tho.png" alt="sao thổ" />
                    <div className="hidden group-hover:block absolute top-[40vh] left-[40vw] rounded-xl p-4 bg-[#f1d7c4] text-[#92493b] bg-opacity-80 w-[400px]">
                        <h1 className={`text-2xl text-center ${th_leky.className}`}>SATURN</h1>
                        <h3 className={`text-xl text-center ${th_leky.className}`}>Sao Thổ</h3>
                        <p className="text-justify mt-5 text-sm">
                            Saturn - phân khu đắc địa tọa lạc tại cổng chính Sky Gate,
                            là nơi hội tụ đầy đủ các tiện ích cao cấp. Cư dân Saturn
                            không chỉ được tận hưởng không gian sống xanh mát với
                            công viên Dome Flower mà còn được chăm sóc sức khỏe
                            toàn diện tại trung tâm y tế Victoria. Đặc biệt, trường mầm
                            non Montestory Uranus ngay trong lòng phân khu sẽ
                            mang đến cho các bé một môi trường học tập và vui chơi
                            hiện đại.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block group opacity-0 hover:opacity-100">
                    <img className="absolute w-[51%] bottom-[13vh] 2xl:bottom-[18vh] left-[5vw] group-hover:opacity-100" src="/images/pages/gioi-thieu/sao-thuy.png" alt="sao thủy" />
                    <div className="hidden group-hover:block absolute top-[40vh] left-[40vw] rounded-xl p-4 bg-[#f1d7c4] text-[#92493b] bg-opacity-80 w-[400px]">
                        <h1 className={`text-2xl text-center ${th_leky.className}`}>MERCURY</h1>
                        <h3 className={`text-xl text-center ${th_leky.className}`}>Sao Thủy</h3>
                        <p className="text-justify mt-5 text-sm">
                            Mercury - Nơi cộng đồng gắn kết. Chỉ cần bước chân ra
                            khỏi nhà, cư dân đã lạc vào một thế giới xanh mát với công
                            viên trung tâm Astro Park rộng lớn, thả mình thư giãn tại
                            vườn thiền healing yên bình, hay đắm mình trong làn nước
                            tại hồ bơi Water Park. Tuyệt vời hơn nữa khi cùng gia đình
                            tổ chức những bữa tiệc BBQ ngoài trời tại BBQ Garden
                            cũng như tận hưởng không gian sang trọng của trung
                            tâm tiệc cưới Dione Palace. Mọi tiện ích đều được tích hợp
                            ngay trong phân khu, mang đến cho cả gia đình một cuộc
                            sống tiện nghi, toàn diện.
                        </p>
                    </div>
                </div>
            </div>









            <div className="bg-white">
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 my-20">
                    <div className="col-span-12 md:col-span-4 p-10 text-black text-fade-right ">
                        <h1 className={`text-4xl text-center text-[#8c4a3c] ${th_leky.className}`}>VENUS</h1>
                        <h3 className={`text-2xl text-center text-[#8c4a3c] ${th_leky.className}`}>Sao Kim</h3>
                        <p className="text-justify mt-5">
                            Venus - thiên đường mua sắm và giải trí ngay tại nhà. Phân
                            khu Venus mang đến cho cư dân những trải nghiệm tuyệt
                            vời với trung tâm thương mại Solar Mall sầm uất, hệ thống
                            shophouse đa dạng, phố ẩm thực Á Âu phong phú. Sau
                            những giờ làm việc căng thẳng, bạn có thể thư giãn tại
                            công viên Dream Park xanh mát hay thoải mái mua sắm
                            trên đại lộ Star Way nhộn nhịp. Đặc biệt, với trạm sạc
                            thông minh Eco Boots, cư dân có thể yên tâm sử dụng các
                            phương tiện di chuyển xanh.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:mt-10">
                        <Carousel >
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/venus1.png" alt="sao kim alana" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/venus2.png" alt="alana city" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </FadeInSection>
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 my-20">
                    <div className="order-2 md:order-1 col-span-12 md:col-span-8 md:mt-10">
                        <Carousel >
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/jupiter1.png" alt="bán hàng phước hoà" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/jupiter2.png" alt="trường học phú giáo" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className="order-1 md:order-2 col-span-12 md:col-span-4 p-10 text-black text-fade-left">
                        <h1 className={`text-4xl text-center text-[#8c4a3c] ${th_leky.className}`}>JUPITER</h1>
                        <h3 className={`text-2xl text-center text-[#8c4a3c] ${th_leky.className}`}>Sao Mộc</h3>
                        <p className="text-justify mt-5">
                            Jupiter - &ldquo;lá phổi xanh&rdquo; giữa lòng đô thị. Với trường quốc tế
                            Carina, private park và hệ thống đường hoa được thiết kế
                            tinh tế, phân khu Jupiter mang đến một không gian sống
                            đẳng cấp, nơi bạn có thể tận hưởng những giá trị sống
                            hiện đại nhất. Hệ thống năng lượng mặt trời tạo nên một
                            không gian sống xanh, thân thiện với môi trường.
                        </p>
                    </div>
                </FadeInSection>
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 my-20">
                    <div className="col-span-12 md:col-span-4 p-10 text-black text-fade-right ">
                        <h1 className={`text-4xl text-center text-[#8c4a3c] ${th_leky.className}`}>MERCURY</h1>
                        <h3 className={`text-2xl text-center text-[#8c4a3c] ${th_leky.className}`}>Sao Thủy</h3>
                        <p className="text-justify mt-5">
                            Mercury - Nơi cộng đồng gắn kết. Chỉ cần bước chân ra
                            khỏi nhà, cư dân đã lạc vào một thế giới xanh mát với công
                            viên trung tâm Astro Park rộng lớn, thả mình thư giãn tại
                            vườn thiền healing yên bình, hay đắm mình trong làn nước
                            tại hồ bơi Water Park. Tuyệt vời hơn nữa khi cùng gia đình
                            tổ chức những bữa tiệc BBQ ngoài trời tại BBQ Garden
                            cũng như tận hưởng không gian sang trọng của trung
                            tâm tiệc cưới Dione Palace. Mọi tiện ích đều được tích hợp
                            ngay trong phân khu, mang đến cho cả gia đình một cuộc
                            sống tiện nghi, toàn diện.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:mt-10">
                        <Carousel >
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/mercury1.png" alt="Sao thủy 1" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/mercury2.png" alt="Sao thủy 2" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </FadeInSection>
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 my-20">
                    <div className="order-2 md:order-1 col-span-12 md:col-span-8 md:mt-10">
                        <Carousel >
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/themars1.png" alt="Sao hỏa 1" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/themars2.png" alt="Sao hỏa 2" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className="order-1 md:order-2 col-span-12 md:col-span-4 p-10 text-black text-fade-left">
                        <h1 className={`text-4xl text-center text-[#8c4a3c] ${th_leky.className}`}>THE MARS</h1>
                        <h3 className={`text-2xl text-center text-[#8c4a3c] ${th_leky.className}`}>Sao Hỏa</h3>
                        <p className="text-justify mt-5">
                            Mars - Tâm điểm thương mại sầm uất. Tọa lạc tại vị trí đắc
                            địa ngay mặt tiền trục đường ĐT 741, phân khu Mars dễ
                            dàng tiếp cận lượng khách hàng lớn, trở thành tâm điểm
                            của các hoạt động kinh doanh. Với hệ thống tiện ích đẳng
                            cấp như công viên năng lượng mặt trời, quảng trường tổ
                            chức sự kiện và trung tâm thể thao, Mars hứa hẹn sẽ trở
                            thành một trong những phân khu sôi động nhất của
                            &ldquo;thành phố ánh sáng&rdquo; Alana City.
                        </p>
                    </div>
                </FadeInSection>
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 my-20">
                    <div className="col-span-12 md:col-span-4 p-10 text-black text-fade-right">
                        <h1 className={`text-4xl text-center text-[#8c4a3c] ${th_leky.className}`}>SATURN</h1>
                        <h3 className={`text-2xl text-center text-[#8c4a3c] ${th_leky.className}`}>Sao Thổ</h3>
                        <p className="text-justify mt-5">
                            Saturn - phân khu đắc địa tọa lạc tại cổng chính Sky Gate,
                            là nơi hội tụ đầy đủ các tiện ích cao cấp. Cư dân Saturn
                            không chỉ được tận hưởng không gian sống xanh mát với
                            công viên Dome Flower mà còn được chăm sóc sức khỏe
                            toàn diện tại trung tâm y tế Victoria. Đặc biệt, trường mầm
                            non Montestory Uranus ngay trong lòng phân khu sẽ
                            mang đến cho các bé một môi trường học tập và vui chơi
                            hiện đại.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:mt-10">
                        <Carousel >
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/saturn1.png" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" src="/images/pages/gioi-thieu/saturn2.png" alt="" />
                            </CarouselItem>
                        </Carousel>
                    </div>
                </FadeInSection>
            </div>
            <div className="bg-[#edd7c5]  py-5 md:py-40">
                <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 px-2">
                    <div className="col-span-12 md:col-span-4 text-fade-right p-10">
                        <h1 className={`text-5xl md:text-6xl text-[#8c4a3c] ${th_leky.className}`}>39</h1>
                        <h2 className={`text-4xl text-[#8c4a3c] ${th_leky.className}`}>Tiện ích nội khu</h2>
                        <p className="text-black text-sm mt-4">
                            Alana City - Khu đô thị đáng sống bậc nhất với
                            thiên đường tiện ích ngay tại cửa nhà. Được mệnh
                            danh là khu compound khép kín khi sở hữu hệ
                            thống tiện ích nội khu đa dạng, Alana City mang
                            đến cho cư dân một cuộc sống tiện nghi và đẳng
                            cấp. Từ những buổi sáng thư thái bên tách cà phê
                            tại công viên nội khu, đến những buổi chiều sảng
                            khoái tại hồ bơi, hay những buổi tối quây quần bên
                            gia đình tại khu vui chơi trẻ em, mọi nhu cầu của
                            cư dân đều được đáp ứng trọn vẹn. Đặc biệt, hệ
                            thống đường đi bộ sáng tạo với nhiều loại cây xanh
                            mang tên các loài hoa như cây Lim xẹt, cây Sala,
                            cây Bàng Đài Loan, cây Kèn Hồng, cây Hoàng Yến,
                            không chỉ tạo nên một không gian thoáng mát,
                            trong lành mà còn mang đến một trải nghiệm
                            sống độc đáo và khác biệt.
                        </p>
                    </div>
                    <div className="col-span-12 grid grid-cols-12 md:col-span-8 gap-4 px-10">
                        <div className="col-span-6 md:col-span-3 font-bold text-fade-up">
                            <h4 className="text-2xl md:text-xl text-[#8c4a3c] uppercase">Y TẾ</h4>
                            <div className="bg-cover bg-center h-[400px] rounded-xl " style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/1949_image003.png)` }}></div>
                        </div>
                        <div className="col-span-6 md:col-span-3 font-bold text-fade-down">
                            <div className="bg-cover bg-center h-[400px] rounded-xl" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/hotel.jpg)` }}></div>
                            <h4 className="text-2xl md:text-xl text-[#8c4a3c] uppercase mt-2">GIÁO DỤC</h4>
                        </div>
                        <div className="col-span-6 md:col-span-3 font-bold text-fade-up">
                            <h4 className="text-2xl md:text-xl text-[#8c4a3c] uppercase">THƯƠNG MẠI</h4>
                            <div className="bg-cover bg-center h-[400px] rounded-xl mt-2" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/258886f853_01_CIFIChangde_RetailMall_Interi.jpg)` }}></div>
                        </div>
                        <div className="col-span-6 md:col-span-3 font-bold text-fade-down">
                            <div className="bg-cover bg-center h-[350px] rounded-xl" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/fitness-center-with-view-pool-center-is-equipped-with-treadmills-ellipticals.jpg)` }}></div>
                            <h4 className="text-2xl md:text-xl text-[#8c4a3c] uppercase mt-2">THỂ THAO</h4>
                            <Link href="/tien-ich" type="button" className="bg-[#0a3252] text-[#edd7c5] float-right px-3 py-1 rounded-lg mt-2">
                                Xem thêm
                                <span className="text-2xl mx-2">›</span>
                            </Link>
                        </div>
                    </div>
                </FadeInSection>
            </div>
            <Footer />
        </div>
    )
}
export default GioiThieu