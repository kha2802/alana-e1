import { th_leky } from "@/app/fonts"
import Footer from "@/views/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Phương Trường An Tân Định Bến Cát',
    description: 'Khu Đô Thị Phương Trường An Tân Định',
}
const PhuongTruongAnTanDinh = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto pt-32 px-2">
                <h1 className={`text-2xl ${th_leky.className}`}>Phương Trường An Tân Định Bến Cát</h1>
                <div className="bg-[#ead0be] text-[#3a404e] p-10 mt-6 grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2">
                        <div className="col-span-12 md:col-span-3 font-bold">Tên Dự Án :</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Khu Đô Thị Phương Trường An Tân Định</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Vị trí:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">QL 13, KP4, P.Tân Định, TX.Bến Cát. Bình Dương</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Chủ Đầu Tư:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Công Ty Bất Động Sản Phương Trường An</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Quy Mô:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">5,7 Ha, gần 400 nền đất</div>
                    </div>
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 md:pl-[4vw] md:border-l-2 border-[#3a404e]">
                        <div className="col-span-12 md:col-span-3 font-bold">Hạ Tầng:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đã hoàn thiện 100%, Điện âm, nước máy</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Tiện Ích:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Điện, Đường, Trường, Chợ trong bán kính 1km</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Pháp Lý:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đã có sổ riêng từng nền, thổ cư 100%</div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-10 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <img className="w-full" src="/images/pages/du-an/tan-dinh-map.png" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                    </div>
                    <div className="col-span-12 md:col-span-6 content-center">
                        <h2 className={`text-4xl text-[#142237] ${th_leky.className}`}>Vị trí</h2>
                        <h2 className={`text-4xl text-[#8b473b] mt-2 ${th_leky.className}`}>kết nối</h2>
                        <p className="mt-6">
                            Dự Án Khu Đô Thị Phương Trường An tọa lạc trên tại Khu Phố 4,
                            Phường Tân Định, Thị Xã Bến Cát, Tỉnh Bình Dương. Đây là vị trí
                            chiến lược về kinh tế, văn hóa, xã hội
                        </p>
                        <p className="mt-4">
                            Dự Án Khu Đô Thị Phương Trường An tọa lạc tại trung tâm công
                            nghiệp Mỹ Phước 1, Mỹ Phước 2, Mỹ Phước 3, Mỹ Phước 4. Từ
                            Phương Trường An cư dân có thể lưu thông ra đường Mỹ Phước
                            Tân Vạn, Vành Đai 4 để kết nối giao thông, kinh tế Bình Dương với
                            Bình Phước, Đồng Nai, TP.Hồ Chí Minh.
                        </p>
                    </div>
                </div>
                <img className="w-full mt-10" src="/images/pages/du-an/tan-dinh-map1.jpg" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                <div className="mt-10 px-2">
                    <h2 className={`text-4xl text-[#142237] ${th_leky.className}`}>Tiện ích</h2>
                    <p className="mt-5">Dự Án Khu Đô Thị Phương Trường An có đầy đủ các tiện ích như Điện, Đường, Trường, Chợ trong phạm vi bán kính chưa đầy 1km.</p>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <h2 className={`text-4xl text-[#8b473b] mt-2 text-center ${th_leky.className}`}>5 phút</h2>
                        <p className="mt-5">
                            Đường Mỹ Phước Tân Vạn, Vành
                            Đai 4, Đại học quốc tế Việt Đức,
                            Trung tâm Thị Xã Bến Cát.
                        </p>
                    </div>
                    <div className="col-span-4  md:border-l-2 md:border-r-2 px-4 border-[#3a404e]">
                        <h2 className={`text-4xl text-[#8b473b] mt-2 text-center ${th_leky.className}`}>10 phút</h2>
                        <p className="mt-5">
                            Khu du lịch Đại Nam Văn Hiến,
                            Bệnh viện 1500 giường, Trung
                            tâm TP Mới, TP Thủ Dầu Một.
                        </p>
                    </div>
                    <div className="col-span-4">
                        <h2 className={`text-4xl text-[#8b473b] mt-2 text-center ${th_leky.className}`}>20 phút</h2>
                        <p className="mt-5">
                            Di chuyển đến Thành Phố Hồ
                            Chí Minh.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-10 gap-4 mb-10">
                    <div className="col-span-12 md:col-span-6">
                        <img className="w-full" src="/images/pages/du-an/tan-dinh-map2.jpg" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                    </div>
                    <div className="col-span-12 md:col-span-6 content-center">
                        <h2 className={`text-4xl text-[#142237] ${th_leky.className}`}>Mặt bằng</h2>
                        <p className="mt-6">
                            Dự Án Khu Đô Thị Phương Trường An có quy mô 5,7 ha với gần
                            400 nền đất. Diện tích dao động từ 60m2 - 120m2, đường nội
                            khu rộng 12m - 36m. Có hệ thống điện âm, nước máy, khu xử
                            lý nước thải riêng biệt.
                        </p>
                        <div className="w-full grid grid-cols-12 gap-4 mt-8">
                            <img className="col-span-6" src="/images/pages/du-an/tan-dinh-person1.jpg" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                            <img className="col-span-6" src="/images/pages/du-an/tan-dinh-person1.jpg" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PhuongTruongAnTanDinh