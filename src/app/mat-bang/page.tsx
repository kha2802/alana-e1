import FadeInSection from "@/components/fade-in/FadeInSection"
import { bai_Jamjuree, montserrat, th_leky } from "../fonts"
import Footer from "@/views/footer"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Mặt bằng - khu dô thị Alana city',
    description: 'khu đô thị, bản giao mặt trời, dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất bình dương, mua nhà bình dương',
}
const listAddress = [
    'cổng sky gate',
    'đại lộ star way',
    'trung tâm thương mại solar mall',
    'trường mần non montessori uranus',
    'trung tâm y tế victoria',
    'công viên trung tâm astro park',
    'quảng trường milky way',
    'biểu tượng trung tâm',
    'hồ ánh trăng',
    'bbq garden',
    'lầu đón gió',
    'công viên dome flower',
    'hệ thống trường quốc tế liên cấp carina',
    'vườn thảo dược',
    'vườn thiền healing',
    'vườn đá trị liệu',
    'công viên vesta',
    'power gym',
    'cà phê dream park',
    'hồ bơi water park',
    'ht thùng rác phân loại',
    'khu liên hợp thể thao sport complex',
    'trung tâm hội nghị dione palace',
    'vườn rau eco green',
    'hệ thống shophouse thương mại',
    'trạm sạc thông minh eco boots',
    'công viên dream park 2',
    'hệ thống đường hoa sáng tạo',
    'private park',
    'trạm xe điện tham quan dự án',
    'khu vui chơi kid zone',
    'hệ thống chiếu sáng năng lượng mặt trời',
    'phố ẩm thực á âu',
    'đường sách',
    'Camera an ninh 24/7',
    'tuyến dạo bộ equator',
    'trung tâm thể thao',
    'quảng trường tổ chức sự kiện ngoài trời',
    'công viên năng lượng mặt trời'
]
const MatBang = () => {
    return (
        <div className="">
            {/* <div className="bg-cover bg-center h-screen relative" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/CH_PV_03_BirdviewC.jpg)` }}>
                <FadeInSection className="absolute bottom-16 right-0 left-0">
                    <div className={`text-[#e2ac8a] bg-[#0a3252] bg-opacity-90 w-full text-fade-up gap-2 ${montserrat.className}`}>
                        <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4 flex">
                                <div className="col-span-4 content-center w-[140px] float-left">
                                    <div className={`text-7xl ${th_leky.className} float-left mr-2`}>5</div>
                                    <div className="text-xl">PHÂN</div>
                                    <div className="text-xl">KHU</div>
                                </div>
                                <div className="">
                                    <div className="clear-left text-xl mt-4" >
                                        <div className="rounded-full w-4 h-4 bg-yellow-400 float-left mr-3 mt-[7px]"></div>
                                        VENUS/ SAO KIM
                                    </div>
                                    <div className="clear-left text-xl " >
                                        <div className="rounded-full w-4 h-4 bg-green-800 float-left mr-3 mt-[7px]"></div>
                                        JUPITER/ SAO MỘC
                                    </div>
                                    <div className="clear-left text-xl " >
                                        <div className="rounded-full w-4 h-4 bg-blue-600 float-left mr-3 mt-[7px]"></div>
                                        MERCURY/ SAO THỦY
                                    </div>
                                    <div className="clear-left text-xl " >
                                        <div className="rounded-full w-4 h-4 bg-red-600 float-left mr-3 mt-[7px]"></div>
                                        THE MARS/ SAO HỎA
                                    </div>
                                    <div className="clear-left text-xl " >
                                        <div className="rounded-full w-4 h-4 bg-[#843d1c] float-left mr-3 mt-[7px]"></div>
                                        SATURN/ SAO THỔ
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-3 content-center md:border-r-4 md:border-l-4 md:px-10 md:border-[#524037]">
                                <div className={`text-7xl ${th_leky.className} float-left mr-2`}>39</div>
                                <p className="text-xl mt-6">TIỆN ÍCH</p>
                            </div>
                            <div className="col-span-6 md:col-span-3 ml-4">
                                <p className="text-xl">Tổng diện tích</p>
                                <p className="text-3xl  font-bold">41.9ha</p>

                                <p className="text-xl mt-2">Diện tích sản phẩm</p>
                                <p className="text-3xl font-bold">65 - 280m<sup>2</sup></p>
                            </div>
                            <div className="col-span-6 md:col-span-2">
                                <p className="text-xl">Số lượng sản phẩm</p>
                                <p className="text-3xl font-bold">2760</p>

                                <p className="text-xl mt-2">Công viên trung tâm</p>
                                <p className="text-3xl font-bold">2ha</p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div> */}
            <img className="hidden md:block w-full" src="/images/pages/home/bg-bottom.png" alt="alanacity map" />
            <img className="block md:hidden w-full" src="/images/pages/home/bg-bottom-mobile.png" alt="alanacity map" />
            <FadeInSection className="w-full bg-white">
                <div className={` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto gap-4 px-4 py-16 justify-between`}>
                    {listAddress.map((a: string, index: number) => (
                        <div key={index} className="grid-cols-12 flex items-center space-x-4">
                            <div className="w-10 h-10 min-w-10 min-h-10 bg-[#91473a] text-[#f1d6c4] rounded-full flex items-center justify-center text-xl font-bold">
                                {index + 1}
                            </div>
                            <span className="text-md uppercase">{a}</span>
                        </div>
                    ))}
                </div>
            </FadeInSection>
            <Footer />
        </div>
    )
}
export default MatBang