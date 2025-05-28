import { th_leky } from "@/app/fonts"
import Footer from "@/views/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Phương Trường An 5',
    description: 'Khu Đô Thị Phương Trường An 5 Green City',
}
const PhuongTruongAnFive = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto pt-32 px-2">
                <h1 className={`text-2xl ${th_leky.className}`}>Phương Trường An 5</h1>
                <div className="bg-[#ead0be] text-[#3a404e] p-10 mt-6 grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2">
                        <div className="col-span-12 md:col-span-3 font-bold">Tên Dự Án :</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Khu Đô Thị Phương Trường An 5 Green City</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Vị trí:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">DT741, Bố Lá, Phước Hòa, Phú Giáo, Bình Dương</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Chủ Đầu Tư:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Công Ty Bất Động Sản Phương Trường An</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Quy Mô:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">10,6 Ha, gồm 742 Nền</div>
                    </div>
                    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 md:pl-[4vw] md:border-l-2 border-[#3a404e]">
                        <div className="col-span-12 md:col-span-3 font-bold">Diện Tích:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đa dạng từ 60m2 - 150m2</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Hạ Tầng:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đã hoàn thiện 100%, Điện âm, nước máy</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Tiện Ích:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Điện, Đường, Trường, Chợ trong bán kính 500m</div>

                        <div className="col-span-12 md:col-span-3 font-bold">Pháp Lý:</div>
                        <div className="col-span-12 md:col-span-9 text-sm">Đã Có Sổ Hồng Từng Nền</div>
                    </div>
                </div>
                <p className="my-10">
                    Dự Án Khu Đô Thị Phương Trương An 5 Green City được quy hoạch thành 2 giai đoạn, giai đoạn 1 có tổng diện tích 10,6 ha, gồm
                    742 nền đất, diện tích dao động từ 60m2 - 150m2, đường nội khu rộng 13m - 36m. Có hệ thống điện âm, nước máy, khu xử lý nước
                    thải riêng biệt.
                </p>
                <img className="w-full " src="/images/pages/ptp.png" alt="Phương Trường An 5 Green City" />

                <h2 className={`text-4xl text-[#142237] mt-10 ${th_leky.className}`}>Vị trí</h2>
                <p className="my-10">
                    Dự Án Khu Đô Thị Phương Trường An 5 Green City toạ lạc tại vị trí đắc địa trên tuyến đường DT741, tuyến đường huyết mạch đi các tỉnh
                    Tây Nguyên, vị trí tâm điểm định hướng phát triển toàn diện về giáo dục, thương mại dịch vụ, công nghiệp của tỉnh Bình Dương. Bao
                    bọc các Khu Công Nghiệp Vsip II, Vsip III, Vsip IV, KCN Đồng An, KCN Tân Bình, KCN Nam Tân Uyên.
                </p>
                <p>
                    Bên cạnh đó, dự án Khu Đô Thị Phương Trường An 5 Green City có hệ thống giao thông kết nối liên vùng như đường DT741, DT742,
                    DT745, DT747, Quốc Lộ 13, Đường Mỹ Phước - Tân Vạn, đường Vành Đai 4...
                </p>

                <div className="grid grid-cols-12 mt-10 gap-4 mb-10">
                    <div className="col-span-12 md:col-span-6 content-center">
                        <h2 className={`text-4xl text-[#142237] ${th_leky.className}`}>kết nối</h2>
                        <p className="mt-6 font-bold">
                            Kết nối xung quanh của dự án Phương Trường An 5 Green City:
                        </p>
                        <ul className="text-left text-sm mt-4 leading-6 pl-8 pr-4 list-disc text-black">
                            <li>
                                Mất 1 phút Phương Trường An 5 Green City -&gt; UBND Xã Phước Hoà.
                            </li>
                            <li className="mt-2">
                                Mất 3 phút Phương Trường An 5 Green City -&gt; Trường học các cấp 1, 2,
                                3 và Chợ, Bách Hóa Xanh.
                            </li>
                            <li className="mt-2">
                                Mất 5 phút Phương Trường An 5 Green City -&gt; KCN Tân Bình, KCN Vsip
                                II, KCN Vsip III.
                            </li>
                            <li className="mt-2">
                                Mất 10 phút Phương Trường An 5 Green City -&gt; KCN Mỹ Phước 3, KCN
                                Đồng An 2.
                            </li>
                            <li className="mt-2">
                                Mất 15 phút Phương Trường An 5 Green City -&gt; Trung Tâm Hành Chính
                                Tỉnh Bình. Dương (Thành Phố Mới), Đại học quốc tế Miền Đông, Trung
                                tâm thành phố Thủ Dầu Một.
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 content-center">
                        <img className="w-full" src="/images/pages/du-an/truong-an5.jpg" alt="Bản đồ Phương Trường An 5 Green City" />
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-10 gap-4 mb-10">
                    <img className="col-span-12 md:col-span-6" src="/images/pages/du-an/truong-an5-1.jpg" alt="Bản đồ Phương Trường An 5 Green City" />
                    <img className="col-span-12 md:col-span-6" src="/images/pages/du-an/truong-an5-2.jpg" alt="Bản đồ Phương Trường An 5 Green City" />

                </div>
            </div>
            <Footer />
        </div>

    )
}
export default PhuongTruongAnFive