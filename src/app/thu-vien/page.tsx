import Paging from "@/components/paging/Paging"
import Footer from "@/views/footer"
import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
    title: 'Thư viện - khu dô thị Alana city',
    description: 'khu đô thị,bản giao mặt trời, dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất bình dương, mua nhà bình dương',
}
const ThuVien = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 pt-10 md:pt-24">
                <div className="col-span-12">
                    <iframe className="inset-0 w-full h-[500px]" src="https://www.youtube.com/embed/SqY3YlChy0s?si=PsTzyOtuIPKMUH9v?modestbranding=1&rel=0&controls=0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    <div className="md:flex justify-between text-center">
                        <div className="text-xl text-black font-bold pt-4">CẬP NHẬT TIẾN ĐỘ XÂY DỰNG DỰ ÁN</div>
                        <div className="">
                            <Paging />
                        </div>
                    </div>
                </div>
                <div className="hidden col-span-12 md:col-span-2 content-center pr-10">
                    <ol className="relative border-s border-[#f1e1d4] ml-2">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-2 h-2 border-[#f1e1d4] rounded-full mt-1.5 -start-1.5 border  bg-[#8c4a3c] "></div>
                            <time className="mb-1 text-sm font-bold leading-none text-gray-300 uppercase">Tháng 04</time>
                            <h3 className="text-lg  text-gray-300">2024</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 border-[#f1e1d4] rounded-full mt-1.5 -start-1.5 border  bg-[#8c4a3c] "></div>
                            <time className="mb-1 text-sm font-bold leading-none text-black uppercase">Tháng 05</time>
                            <h3 className="text-lg  text-gray-900">2024</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 border-[#f1e1d4] rounded-full mt-1.5 -start-1.5 border bg-[#8c4a3c] "></div>
                            <time className="mb-1 text-sm font-bold leading-none text-gray-300 uppercase">Tháng 06</time>
                            <h3 className="text-lg text-gray-300">2024</h3>
                        </li>
                    </ol>
                </div>

                <div className="col-span-12 md:col-span-8 text-center content-center">
                    <Link href="/du-an/fc-truong-an">  <img className="w-full px-4 " src="/images/pages/rectangle.jpg" alt="alana" /></Link>
                    <Paging />
                </div>
                <div className="relative col-span-12 md:col-span-4 mb-10 ">
                    <Link href="/du-an/phuong-truong-an-tan-dinh">  <img className="w-full p-2" src="/images/pages/luxury.png" alt="alana city" /></Link>
                    <Link href="/du-an/phuong-truong-an-5">  <img className="w-full p-2" src="/images/pages/ptp.png" alt="alana city" /></Link>
                    <Link href="/du-an/fc-truong-an">     <img className="w-full p-2" src="/images/pages/rectangle.jpg" alt="alana city" /></Link>
                    <div className="hidden absolute right-[-4rem] bottom-[18rem] -rotate-90 text-black font-bold  content-center">
                        <button className="w-8 h-8 rounded-full bg-[#f0d6c4] text-[#91473a] mr-2">‹</button>
                        AUTO SLIDE
                        <button className="w-8 h-8 rounded-full bg-[#f0d6c4] text-[#91473a] ml-2">›</button>
                    </div>
                </div>
                <div className="col-span-12 ">
                    <embed
                        src="/docs/AlanaCity.pdf"
                        type="application/pdf"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="w-full mt-8 mb-16 px-4">
                        <span className="text-xl text-black font-bold">BROCHURE</span>
                        <a href="/docs/AlanaCity.pdf" download className="float-right rounded-md text-md text-[#f0d6c4] font-bold py-2 px-4 bg-[#0a3252]">TẢI XUỐNG</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ThuVien
