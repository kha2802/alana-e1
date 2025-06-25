import { th_leky } from "@/app/fonts"
import Footer from "@/views/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'FC Trường An -Khu Đô Thị FC Trường Anh',
    description: 'Khu Đô Thị FC Trường Anh',
  }
const FCTruongAn = () => {
    return (
        <div className="">

            <div className="max-w-screen-xl mx-auto pt-32 px-2">
                <h1 className={`text-2xl ${th_leky.className}`}>FC Trường An</h1>
                <div className="bg-[#ead0be] text-[#3a404e] p-10 mt-6 grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2">
                        <div className="col-span-12 md:col-span-3 font-bold">Tên Dự Án :</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Khu Đô Thị FC Trường Anh</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Vị trí:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">DT741, Phước Vĩnh, Phú Giáo, Thành Phố Hồ Chí Minh</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Chủ Đầu Tư:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Công Ty Bất Động Sản Phương Trường An</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Quy Mô:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">6 Ha, gồm 389 Nền</div>
                    </div>
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 md:pl-[4vw] md:border-l-2 border-[#3a404e]">
                        <div className="col-span-12 md:col-span-3 font-bold">Diện Tích:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đa dạng từ 70m2 - 150m2</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Hạ Tầng:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đã hoàn thiện 100%, Điện âm, nước máy</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Tiện Ích:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Điện, Đường, Trường, Chợ trong bán kính 500m</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Pháp Lý:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Phê Duyệt 1/500, Sổ Hồng Từng Nền</div>
                    </div>
                </div>
                <p className="my-10">
                    Khu đô thị FC Trường An xây dựng trên quỹ đất có diện tích 6 ha, với 389 nền nhà phố thương mại và nhà phố vườn được thiết kế hiện
                    đại, diện tích dao động từ 70m2 đến 120m2. Bên cạnh đó, hệ thống quy hoạch nội khu đồng bộ với điện âm, nước máy, trường học,
                    công viên cây xanh, vỉa hè, hệ thống xử lý nước mưa, nước thải riêng biệt, Phòng cháy chữa cháy... Đường nội khu rộng rãi từ 13-18m,
                    được trải nhựa sạch sẽ, thông thoáng, nâng tầm cảnh quan của cả khu dự án.
                </p>
                <img className="w-full " src="/images/pages/du-an/fc.jpg" alt="Bản đồ FC Trường An" />

                <h2 className={`text-4xl text-[#142237] mt-10 ${th_leky.className}`}>Vị trí</h2>
                <p className="my-10">
                    Dự án khu nhà ở FC Trường An nằm tại mặt tiền đường DT741, thị trấn Phước Vĩnh, huyện Phú Giáo, tỉnh Thành Phố Hồ Chí Minh.
                </p>
                <p>
                    Từ đây, cư dân tại đây có thể dễ dàng di chuyển đến các khu công nghiệp, đặc biệt là khu công nghiệp VSIP 4 đang được quy
                    hoạch...cùng nhiều khu vực như huyện Vĩnh Cửu, Đồng Nai, huyện Đồng Phú, TP Đồng Xoài, Bình Phước,....
                </p>

                <div className="grid grid-cols-12 mt-10 gap-4 mb-10">
                    <div className="col-span-12 md:col-span-6 content-center">
                        <h2 className={`text-4xl text-[#142237] ${th_leky.className}`}>kết nối</h2>
                        <p className="mt-6">
                            Bên cạnh các tuyến đường huyết mạch hiện hữu như DT741, DT750, HL5,
                            quốc lộ 13, quốc lộ 14, đường Thành Phố Hồ Chí Minh - Đồng Phú..., xung quanh khu
                            đô thị FC Trường An đang được đầu tư thêm nhiều dự án mang tính
                            chiến lược. Nổi bật là đường tạo lực Tân Uyên - Phú Giáo - Đồng Xoài, cao
                            tốc TP.HCM - Thủ Dầu Một - Đồng Xoài, Vành đai 3, Vành đai 4.
                        </p>
                        <p className="mt-4">
                            Đây là những trục giao thông trọng diểm kết nối tất cả các trung tâm đô
                            thị - công nghiệp ở phía tây Bắc Thành Phố Hồ Chí Minh và Bình Phước, hình thành
                            trục thương mại - dịch vụ logistic theo hướng Đông Tây, mở ra hướng
                            phát triển mới cho Phú Giáo.
                        </p>
                        <p className="mt-4">
                            Hơn nữa, nhờ lợi thế mặt tiền đường lớn và mật độ cư dân xung quanh
                            đông đúc, khu đô thị FC Trường An còn mở ra cơ hội kinh doanh và tiềm
                            năng sinh lời rất lớn. Là một trung tâm sản xuất công nghiệp mới, chắc
                            chắn sắp tới khu vực này sẽ còn được bổ sung hàng loạt dự án về thương
                            mại – dịch vụ cao cấp phục vụ cho lực lượng chuyên gia và người dân
                            cũng được hưởng lợi.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 content-center">
                        <img className="w-full" src="/images/pages/du-an/fc2.png" alt="Bản đồ Phương Trường An Tân Định Bến Cát" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default FCTruongAn