import { LineFooterIcon } from "@/components/icons/Icons"
import Footer from "@/views/footer"
import { th_leky } from "../fonts"
import FadeInSection from "@/components/fade-in/FadeInSection"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Vị trí - khu dô thị Alana city',
    description: 'địa chỉ khu đô thị,vị trí alana, bản giao mặt trời, dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất Thành Phố Hồ Chí Minh, mua nhà Thành Phố Hồ Chí Minh',
}
const ViTri = () => {
    return (
        <div >
            <div className="bg-white mt-16">
                <div className="max-w-screen-xl mx-auto min-h-screen md:py-40 relative">
                    <div className="w-full hidden md:flex">
                        <LineFooterIcon color="#b16f5a" />
                        <LineFooterIcon color="#b16f5a" />
                        <LineFooterIcon color="#b16f5a" />
                    </div>
                    <div className="w-full hidden md:flex">
                        <LineFooterIcon color="#b16f5a" />
                        <LineFooterIcon color="#b16f5a" />
                        <LineFooterIcon color="#b16f5a" />
                    </div>
                    <div className="relative md:absolute h-full content-center md:top-0 left-0 md:left-36 right-0 md:right-36 w-full md:w-auto">
                        <FadeInSection className=" bg-[#f0d6c4] text-[#8c4a3c] grid grid-cols-12 gap-4">
                            <div className={`col-span-12 md:col-span-5 content-center pt-10 pr-10 md:pr-4 p-4 text-right text-fade-right ${th_leky.className}`}>
                                <p className="text-[#0a3252] text-5xl">Huyết mạch</p>
                                <p className="text-[#91473a] text-3xl">Giao thương</p>
                                <p className="text-[#0a3252] text-5xl mt-4">Khơi nguồn</p>
                                <p className="text-[#91473a]  text-3xl">Thịnh vượng</p>
                            </div>
                            <div className="col-span-12 md:col-span-7 text-justify p-10 text-fade-left text-black px-10 md:px-4" >
                                <p className="">
                                    Phú Giáo là &quot;vùng lõi&quot; phát triển quan trọng khi đóng vai trò
                                    kết nối chiến lược giữa toàn bộ các đô thị công nghiệp phía
                                    Bắc Thành Phố Hồ Chí Minh gồm Bến Cát, Tân Uyên, thành phố
                                    mới. Đặc biệt, Alana City được bao quanh bởi
                                    khu công nghiệp Tân Bình 1.000ha và nhiều khu công
                                    nghiệp lớn như VSIP 2 mở rộng 1.700ha, VSIP 3 hơn 1.000ha,
                                    VSIP 4, Tam Lập... Các khu công nghiệp này đang thu hút
                                    làn sóng đầu tư mạnh mẽ, tạo cơ hội vươn tầm bứt phá cho
                                    Phú Giáo. Nhờ đó, Alana City được xem như viên kim cương
                                    tỏa sáng giữa tâm điểm phát triển để hướng đến một đô thị
                                    sôi động, thịnh vượng.
                                </p>
                                <p className="mt-2">
                                    Dự kiến lực lượng lao động và chuyên gia đến Phú Giáo làm
                                    việc sắp tới sẽ nhanh chóng tăng vọt, thúc đẩy nhu cầu về
                                    nhà ở, đặc biệt là những không gian sống chuẩn mực như
                                    Alana City. Đây là lý do nhiều nhà đầu tư đặt niềm tin vào
                                    triển vọng bứt phá của Phú Giáo và lựa chọn sở hữu Alana
                                    City để an cư lạc nghiệp cũng như nắm bắt cơ hội tăng giá.
                                </p>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img className="w-full my-24" src="/videos/address.gif" alt="Vị trí dự án alana" />
                </div>
                <div className="py-20 mt-10 block md:hidden overflow-hidden content-center">
                    <img className="w-full flex justify-center items-center scale-[2]" src="/videos/address.gif" alt="Vị trí dự án alana" />
                </div>

                <div className="bg-cover bg-center md:h-screen w-full relative" style={{ backgroundImage: `url(/images/pages/bg-round.png)` }}>
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 py-20">
                        <div className="col-span-12 md:col-span-4 text-[#91473a] text-6xl  text-center text-fade-right">
                            <p className={th_leky.className}>&ldquo;Trái tim&rdquo;</p>
                            <p className={th_leky.className}>kết nối</p>
                            <p className={th_leky.className}>kinh tế vùng</p>

                            <p className="text-sm mt-4 text-left text-black px-10 md:px-4">
                                Alana City, được ví như &ldquo;trái tim&rdquo; kết nối kinh tế vùng khi tọa
                                lạc ngay trên trục giao thương huyết mạch ĐT 741 và cao
                                tốc TP HCM - Thủ Dầu Một - Chơn Thành. Với vị trí đắc địa
                                này, Alana City hưởng trọn mạch nguồn thịnh vượng từ hệ
                                thống giao thông chiến lược và đồng bộ, bao gồm:
                            </p>
                            <ul className="text-left text-sm mt-4 leading-6 list-disc text-black px-10 pl-14 md:px-4">
                                <li>QL13, QL14, HL 612</li>
                                <li>Đường tạo lực Bắc Tân Uyên - Phú Giáo - Đồng Phú</li>
                                <li>Đường cao tốc Thành Phố Hồ Chí Minh - Đồng Phú</li>
                                <li>Vành đai 3, đại lộ Mỹ Phước - Tân Vạn - Phú Giáo, và nhiều
                                    tuyến đường khác.</li>
                            </ul>
                            <p className="text-sm mt-4 text-left text-black px-10 md:px-4">
                                Đặc biệt, với tuyến cao tốc TP HCM - Thủ Dầu Một - Chơn
                                Thành, Alana City chỉ cách TP HCM khoảng 25 - 30 phút di
                                chuyển. Khoảng cách lý tưởng mang đến sự thuận tiện cho
                                cư dân, giúp dự án trở thành đô thị vệ tinh xứng tầm, mở ra
                                cơ hội phát triển công nghiệp, thương mại - dịch vụ thuận
                                lợi trong khu vực Bắc Thành Phố Hồ Chí Minh và miền Đông Nam Bộ.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="mb-4 md:mb-20 md:absolute top-[20vh] left-[35vw] lg:left-[45vw] text-[#91473a] text-center">
                                <div className="w-4 h-4 bg-[#e7bbab] rounded-full mx-auto mb-2"></div>
                                <h2 className={`text-5xl  ${th_leky.className}`}>Liền kề</h2>
                                <ul className="text-sm text-black list-disc list-red text-center md:text-left">
                                    <li>Khu Công Nghiệp Tân Bình</li>
                                </ul>
                            </div>
                            <div className="md:absolute bottom-[15vh] left-[35vw] lg:left-[45vw] text-[#91473a] text-center">
                                <div className="w-4 h-4 bg-[#e7bbab] rounded-full mx-auto mb-4"></div>
                                <h2 className={`text-5xl font-bold ${th_leky.className}`}><span className={`text-7xl mr-2 `}>10</span> phút</h2>
                                <ul className="text-sm text-black list-disc list-red text-center md:text-left">
                                    <li>Khu Công Nghiệp Vsip 2 mở rộng</li>
                                    <li>Trung tâm hành chính Phú Giáo</li>
                                </ul>
                            </div>
                            <div className="md:absolute bottom-[30vh] right-[2vw] lg:right-[9vw] text-[#91473a] text-center">
                                <div className="w-4 h-4 bg-[#e7bbab] rounded-full mx-auto mb-4"></div>
                                <h2 className={`text-5xl font-bold ${th_leky.className}`}><span className={`text-7xl mr-2 `}>15</span> phút</h2>
                                <ul className="text-sm text-black list-disc list-red text-center md:text-left">
                                    <li>TT Hành Chính Bắc Tân Uyên</li>
                                    <li>Khu Công Nghiệp Vsip 3</li>
                                </ul>
                            </div>
                            <div className="md:absolute top-[10vh] right-[5vw] lg:right-[7vw] text-[#91473a] text-center">
                                <div className="w-4 h-4 bg-[#e7bbab] rounded-full mx-auto mb-4"></div>
                                <h2 className={`text-5xl font-bold ${th_leky.className}`}><span className={`text-7xl mr-2 `}>20</span>phút</h2>
                                <ul className="text-sm text-black list-disc list-red text-center md:text-left">
                                    <li>Thành phố Tân Uyên</li>
                                    <li>Thành phố Bến Cát</li>
                                    <li>Khu Công Nghiệp An Linh</li>
                                </ul>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ViTri