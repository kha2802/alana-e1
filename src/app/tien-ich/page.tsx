import FadeInSection from "@/components/fade-in/FadeInSection"
import { th_leky } from "../fonts"
import Footer from "@/views/footer"
import Carousel, { CarouselItem } from "@/components/carousel/Carousel"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Tiện ích - khu dô thị Alana city',
    description: 'khu đô thị,bản giao mặt trời, dự án phú giáo, bất động sản phú giáo, mua. nhà phú giáo, đất nền phú giáo,bđs phú giao, nhà đất bình dương, mua nhà bình dương',
}
const TienIch = () => {
    return (
        <div className="">
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundColor: '#091635', backgroundImage: `url(/images/pages/tien-ich/bg-top.png)` }}>
                <FadeInSection className="absolute  bottom-28 left-0 w-full">
                    <div className={`text-[rgb(31,44,59)] bg-opacity-70 text-center mx-auto w-full bg-[#f0d6c4] p-6  text-fade-up  ${th_leky.className}`}>
                        <p className="text-4xl md:text-6xl md:mr-40">&ldquo;Không Gian Xanh&rdquo;</p>
                        <p className="text-2xl md:text-4xl mt-4 md:mr-40">nuôi dưỡng cảm xúc</p>
                    </div>
                    <img className="hidden md:block absolute top-0 rotate-12 w-[300px] left-0 text-animation-show" src="/images/pages/leafs.png" alt="alana city"/>
                    <img className="hidden md:block absolute -top-20 -rotate-[50deg] w-[450px] right-0 text-animation-show" src="/images/pages/leafs-right.png" alt="alana city"/>
                </FadeInSection>
            </div>
            <FadeInSection className="w-full bg-white pt-4">
                <div className={` grid grid-cols-12 w-full max-w-screen-xl mx-auto md:gap-14 md:py-16`}>
                    <div className="col-span-12 md:col-span-4 text-fade-right">
                        <div className={`max-w-[260px] mx-auto ${th_leky.className}`}>
                            <p className="text-[#0a3252] text-4xl">Thiên đường</p>
                            <p className="text-[#91473a] text-right text-2xl mr-14">tiện ích</p>
                            <p className="text-[#0a3252] text-4xl">Giá trị sống </p>
                            <p className="text-[#91473a] text-right text-2xl mr-16">tiện nghi</p>
                        </div>
                        <div className="w-full px-10 md:px-4">
                            <p className="text-sm mt-4 text-justify text-[#0a3252]">
                                Với hệ thống 39 tiện ích nội khu độc bản lần đầu tiên xuất
                                hiện tại Phú Giáo, từ trung tâm thương mại sầm uất, phòng
                                tập gym hiện đại, hồ bơi &ldquo;sang chảnh&rdquo; cho đến khu vui chơi
                                trẻ em, khu vực công viên xanh mát... mọi nhu cầu của cư
                                dân đều được đáp ứng trọn vẹn.
                            </p>
                            <p className="text-sm mt-4 text-justify text-[#0a3252]">
                                Đặc biệt, hệ thống y tế, giáo dục chất lượng cao ngay trong
                                lòng khu đô thị sẽ mang đến cho cư dân và người thân
                                những trải nghiệm hoàn hảo về cuộc sống tiện nghi chỉ
                                cách một bước chân. Cùng với đó, việc áp dụng công nghệ
                                thông minh và năng lượng mặt trời vào dự án sẽ góp phần
                                tạo nên một không gian sống xanh, hiện đại và bền vững.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 p-2 md:ml-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b]  text-fade-right">
                                <p className=" text-md font-bold mt-8">Y TẾ</p>
                                <svg className="pt-6 pb-14 px-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.92 97.03">
                                    <path d="M357,426.26H316.1l-8.17,13.25a3,3,0,0,1-2.59,1.44h-.07a3.05,3.05,0,0,1-2.59-1.58l-16.9-31-9.22,16a3,3,0,0,1-2.63,1.51H253.08a3,3,0,0,1,0-6.06h19.11l11-19.13a3,3,0,0,1,5.29.07l17,31.16,6.32-10.24a3,3,0,0,1,2.57-1.45h28.73a28.68,28.68,0,0,0-42.86-37.84l-7.8,7.53-7.8-7.53a28.68,28.68,0,0,0-40.22,40.89l48,48.09,38.95-39H357a3,3,0,1,0,0-6.06Z" transform="translate(-236.06 -374.3)" />
                                </svg>
                            </div>
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b]  text-fade-down">
                                <p className="text-md font-bold mt-8">GIÁO DỤC</p>
                                <svg className="pt-6 pb-14 px-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.34 104.06">
                                    <path d="M347.89,443.6l6.87.06c.12.34.24.68.35,1,.63,2,3.47,13.49,2.7,15l-3.37,0-10.46,0C344.52,454.65,345.72,448.19,347.89,443.6Z" transform="translate(-237.6 -368.55)" />
                                    <path d="M331.5,423.1c.82,1.15.32,24.64.36,28.39l-37.18,21.12c-4.43-3.07-9.24-5.6-13.91-8.28l-21.7-12.39c-1-1.25-.47-25.73-.47-28.94,6.83,4.29,13.79,8.37,20.74,12.47,4.88,2.88,9.79,6.13,15.08,8.19C301.52,442.36,323.79,427.54,331.5,423.1Z" transform="translate(-237.6 -368.55)" />
                                    <path d="M356,438c-.16-1.63-2.16-2.35-2.42-4.25-.52-3.77-.21-7.9-.2-11.71l0-18.21c-11.82-7.49-24.09-14.43-36.05-21.7l-15-9.14c-2.39-1.45-4.84-3.18-7.36-4.39-6.55,3.94-56,33.73-57.2,35.27,0,.54-.18,1.1.22,1.51,1.72,1.76,52.48,32.29,57.07,34.24,8.78-5.22,17.54-10.49,26.44-15.49,9.28-5.68,18.81-11.05,28-16.83,0,3.16.47,25.94.08,27.22-.1.33-.47.52-.72.76-.77.75-1.64,1.25-1.81,2.43a4.67,4.67,0,0,0,1.29,3.5,4.55,4.55,0,0,0,3.16,1.49,4.1,4.1,0,0,0,3.07-1.23A4.7,4.7,0,0,0,356,438Zm-32.9-26.16c-9.18-5-18.28-10-27.26-15.33a2,2,0,0,0-1.4-.54c-1.64.27-3.79,1.87-5.29,2.7-3.56,2-21.34,12.73-24.35,12a2.23,2.23,0,0,1-1.31-.86,2.79,2.79,0,0,1-.33-2.51,4.54,4.54,0,0,1,2.12-2.33c3.28-2.21,7.1-3.84,10.57-5.75,6-3.31,12-6.8,18-10.07a3.45,3.45,0,0,1,1.79.35c4.26,2,8.41,4.61,12.55,6.87,5.62,3.08,14.26,7,18.94,10.87l.09,1.18C326.33,410.39,325,410.9,323.05,411.79Z" transform="translate(-237.6 -368.55)" />
                                </svg>
                            </div>
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b]  text-fade-left">
                                <p className="text-md font-bold mt-8">CÔNG VIÊN</p>
                                <svg className="pt-6 pb-14 px-16" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.11 112.93">
                                    <path d="M260.51,388.83l.32,0a21.27,21.27,0,0,1-.44-5c.34-11.16,9.29-19.94,20-19.62a19.28,19.28,0,0,1,16.67,11,13.45,13.45,0,0,1,5-.8c7.66.23,13.67,6.89,13.43,14.86a14.86,14.86,0,0,1-1.58,6.26,19.29,19.29,0,0,1,15.06,19.72c-.32,10.77-9,19.25-19.31,18.94a18,18,0,0,1-3.55-.47l-3,3.42-13.18,15c-3.71,10.6-2.5,18-.76,25l-15.71-.47a72.21,72.21,0,0,0,.71-23.51l-10.33-18.16-4-7.07h-.43c-10.38-.31-18.52-9.33-18.2-20.14s9-19.32,19.38-19Zm88.72-17.92,1.08,1.08-4.06,4.06L345.17,375l4.06-4.06Zm6,13v1.52H349.5V383.9Zm-4.93,13.43-1.08,1.08-4.06-4.06,1.08-1.08,4.06,4.06Zm-13,6H335.8V397.6h1.52v5.74Zm-13.43-4.93-1.08-1.08,4.06-4.06,1.08,1.08-4.06,4.06Zm-6-13V383.9h5.74v1.52ZM322.81,372l1.08-1.08L328,375l-1.08,1.08L322.81,372Zm13-6h1.52v5.74H335.8V366Zm.76,9.33a9.35,9.35,0,1,1-9.35,9.35,9.35,9.35,0,0,1,9.35-9.35Zm-31.17,70.18h36.55a1.76,1.76,0,0,1,1.75,1.75v3.41a1.76,1.76,0,0,1-1.75,1.75h-.41v7.08h6.07a1.76,1.76,0,0,1,1.75,1.76v3.4a1.76,1.76,0,0,1-1.75,1.75h-2.24v8.75a.88.88,0,0,1-.88.87h-.58a.88.88,0,0,1-.88-.87v-8.75H304.31v8.75a.88.88,0,0,1-.88.87h-.58a.88.88,0,0,1-.88-.87v-8.75h-2.24a1.76,1.76,0,0,1-1.75-1.75v-3.4a1.76,1.76,0,0,1,1.75-1.76h6.07V452.4h-.41a1.76,1.76,0,0,1-1.75-1.75v-3.41a1.76,1.76,0,0,1,1.75-1.75Zm33.81,6.91H308.13v7.08H339.2V452.4Zm-57.63-18.77-3.69,10-10-11-4.53-5a18.45,18.45,0,0,0,8-3.74,18.19,18.19,0,0,0,10.21,9.71Zm4.66,10,1.14-9A17.34,17.34,0,0,0,299,430.37a19,19,0,0,0,2.82,1.81l-2.38,1.76-13.19,9.73Z" transform="translate(-241.12 -364.27)" />
                                </svg>
                            </div>
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b] text-fade-right">
                                <p className="text-md font-bold mt-8">THỂ THAO</p>
                                <svg className="pt-6 pb-14 px-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.75 127.76">
                                    <path d="M330.16-4929.39a7.89,7.89,0,0,0,0,11.16,7.91,7.91,0,0,0,11.16,0l23.24-23.25-11.15-11.16Z" transform="translate(-327.85 5043.69)" />
                                    <path d="M444.3-5032.38c-16.54-16.54-45.25-14.72-64,4-13,13-17.87,30.87-14.08,46.09l-.09-.13s2.79,14.25-3.1,20.14l-4.8,4.8,11.15,11.16,4.8-4.81c5.89-5.88,20.15-3.09,20.15-3.09l-.13-.1c.95.24,1.91.44,2.88.61a4.27,4.27,0,0,1,0-.87,27.35,27.35,0,0,1,1.41-5.79,33.11,33.11,0,0,1-8.65-2.65l8.88-8.87,3.92,3.91a26.31,26.31,0,0,1,2.3-2.65l-3.74-3.74,9.79-9.79,6.36,6.37a28.57,28.57,0,0,1,3.68-.75,4.19,4.19,0,0,1,.5,0l-8.06-8.06,9.77-9.79,9.78,9.78-7.93,7.94c.63,0,1.32.07,1.89.07l.5,0c.72.08,1.43.19,2.14.32l5.88-5.88,5,5c-.9,1.26-1.9,2.47-2.94,3.67a27.61,27.61,0,0,1,5.62,3.94C459.16-4990.23,459.93-5016.74,444.3-5032.38Zm-4.82,4.82a31.25,31.25,0,0,1,4.42,5.58l-8.38,8.38-9.78-9.78,8.42-8.42A31,31,0,0,1,439.48-5027.56Zm-24.78-9.3a34.7,34.7,0,0,1,16.27,3.29l-7.71,7.71-9.77-9.78Zm6.08,13.48L411-5013.6l-9.79-9.78,9.79-9.78ZM389-5011.13l9.78-9.77,9.78,9.77-9.78,9.79Zm7.31,12.27-9.78,9.77-9.79-9.77,9.79-9.78Zm11.82-37.21.43.43-9.78,9.78-4.68-4.69A44.09,44.09,0,0,1,408.09-5036.07Zm-23,12.55a47,47,0,0,1,6-5.06l5.2,5.2-9.78,9.78-5.38-5.38A44.81,44.81,0,0,1,385.11-5023.52Zm-6.07,7.43,5,5-9.77,9.78-1.22-1.21A44.53,44.53,0,0,1,379-5016.09Zm-7.27,22.16,2.46-2.46,9.78,9.78-8.95,8.95A34.68,34.68,0,0,1,371.77-4993.93Zm14.88,29.2a30.8,30.8,0,0,1-5.57-4.43,30.57,30.57,0,0,1-4.25-5.31l9.66-9.66,9.78,9.78Zm12.09-12.1L389-4986.6l9.78-9.79,9.78,9.79ZM411-4989.09l-9.79-9.77,9.79-9.78,9.77,9.78Zm2.48-22,9.77-9.77,9.78,9.77-9.78,9.79Zm12.25,12.27,9.78-9.78,9.78,9.78-9.78,9.77Zm16.74,16.73-4.48-4.48,9.78-9.78.22.23A44.33,44.33,0,0,1,442.48-4982.13Zm5.3-19.21-9.78-9.79,7.64-7.63a34.9,34.9,0,0,1,3.12,16.44Z" transform="translate(-327.85 5043.69)" />
                                    <path d="M428.85-4928.47a22.9,22.9,0,0,1-15.13-2.3,23,23,0,0,1-10.3-11.33,18.62,18.62,0,0,1,2.22-.83,18,18,0,0,1,13.86,1.37,18.23,18.23,0,0,1,9.35,13.09Z" transform="translate(-327.85 5043.69)" />
                                    <path d="M443.5-4959.12a18.07,18.07,0,0,1-13.86-1.36,18.32,18.32,0,0,1-9.35-13.1,22.93,22.93,0,0,1,15.14,2.3,22.9,22.9,0,0,1,10.29,11.33,19.77,19.77,0,0,1-2.22.83Z" transform="translate(-327.85 5043.69)" />
                                    <path d="M434-4930.06a23.37,23.37,0,0,0-11.94-16.2,23.38,23.38,0,0,0-17.9-1.76c-.74.22-1.48.49-2.2.78a23,23,0,0,1,2.4-14.64A22.91,22.91,0,0,1,415.18-4972a23.37,23.37,0,0,0,11.95,16.2A23.31,23.31,0,0,0,445-4954c.75-.22,1.49-.49,2.21-.78a22.89,22.89,0,0,1-2.41,14.64A23,23,0,0,1,434-4930.06Z" transform="translate(-327.85 5043.69)" />
                                </svg>
                            </div>
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b] text-fade-up ">
                                <p className="text-md font-bold mt-8">THƯƠNG MẠI</p>
                                <svg className="pt-6 pb-14 px-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.07 119.83">
                                    <path d="M429.39-4941.09l-3.85-58.2h11.52v5.79a2,2,0,0,0,1.95,2,2,2,0,0,0,2-2v-5.79h17.44v5.79a2,2,0,0,0,1.95,2,2,2,0,0,0,1.95-2v-5.79H470l3.84,58.2ZM399-5031.33V-5021a2,2,0,0,0,1.95,1.95,2,2,0,0,0,1.95-1.95v-10.37h29.52V-5021a2,2,0,0,0,1.95,1.95,2,2,0,0,0,2-1.95v-10.37h15.1l.95,14.36a13.61,13.61,0,0,0-2.65-.26,13.14,13.14,0,0,0-6.24,1.55,13.26,13.26,0,0,0-6.24-1.55,13,13,0,0,0-8.85,3.4,11.29,11.29,0,0,0-3.77,8.35v2.28H415.2a2,2,0,0,0-1.94,1.74l-6.4,60.36H388l-6-90.24Zm-11.3-8.38a12.76,12.76,0,0,1,4.28-9.41,15.44,15.44,0,0,1,10.48-4,16.2,16.2,0,0,1,3.06.29c-.34.27-.67.55-1,.83a16.65,16.65,0,0,0-5.54,12.28v4.49h-11.3Zm15.2,4.49v-4.49a12.76,12.76,0,0,1,4.28-9.41,14.91,14.91,0,0,1,2.88-2.06,14.91,14.91,0,0,1,2.88,2.06,12.76,12.76,0,0,1,4.28,9.41v4.49Zm14.76-17.89a15.48,15.48,0,0,1,10.48,4,12.76,12.76,0,0,1,4.28,9.41v4.48h-11.3v-4.48a16.65,16.65,0,0,0-5.54-12.28c-.32-.28-.64-.56-1-.83A16.2,16.2,0,0,1,417.63-5053.11ZM447-5012.93a9.45,9.45,0,0,1,2.74-.4,9.35,9.35,0,0,1,2.92.46l.64,9.67h-3.41v-2.27A11.21,11.21,0,0,0,447-5012.93Zm-6,7.46a7.48,7.48,0,0,1,2.48-5.48,7.48,7.48,0,0,1,2.48,5.48v2.27h-5v-2.27Zm-3.91,2.27h-8.57v-2.28A7.49,7.49,0,0,1,431-5011a9.22,9.22,0,0,1,6.22-2.36,9.45,9.45,0,0,1,2.74.4,11.21,11.21,0,0,0-2.89,7.45Zm21.35-2.27v2.27h-1.26l-.46-6.94A7.32,7.32,0,0,1,458.41-5005.47Zm19.45,66.21-4.1-62a2,2,0,0,0-1.95-1.95h-9.49v-2.27a11.33,11.33,0,0,0-3.77-8.36,13.22,13.22,0,0,0-2.21-1.62l-1.17-17.83a2,2,0,0,0-1.95-1.95H436.29v-4.48a16.65,16.65,0,0,0-5.54-12.28,19.39,19.39,0,0,0-13.12-5,19.7,19.7,0,0,0-7.6,1.51,19.74,19.74,0,0,0-7.6-1.51,19.37,19.37,0,0,0-13.12,5,16.65,16.65,0,0,0-5.54,12.28v4.49H368a2,2,0,0,0-1.94,1.75l-9.28,94.14v.21a2,2,0,0,0,2,1.93l26.35-.3a2,2,0,0,0,1,.3H476A2,2,0,0,0,477.86-4939.26Z" transform="translate(-356.79 5057.01)" />
                                </svg>
                            </div>
                            <div className="rounded-md bg-[#f1d6c4] text-center text-[#91473a] fill-[#91483b] hover:fill-white hover:text-white hover:bg-[#91483b] text-fade-left ">
                                <p className="text-md font-bold mt-8">GIẢI TRÍ</p>
                                <svg className="pt-6 pb-14 px-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.42 121">
                                    <path
                                        d="M452.13-5078.33l.55,11.63,11.63-.54a4.89,4.89,0,0,0,4.67-5.13,4.9,4.9,0,0,0-5.12-4.67l-1.84.09-.09-1.84a4.89,4.89,0,0,0-5.12-4.67A4.92,4.92,0,0,0,452.13-5078.33Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M470.53-5056.39a3.78,3.78,0,0,0-3.95,3.6l-.07,1.42-1.41-.07a3.77,3.77,0,0,0-4,3.6,3.77,3.77,0,0,0,3.6,3.95l9,.42.41-9A3.77,3.77,0,0,0,470.53-5056.39Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M458.69-5092.38a2.59,2.59,0,0,0,2.58-2.58,2.58,2.58,0,0,0-2.58-2.57,2.57,2.57,0,0,0-2.57,2.57A2.58,2.58,0,0,0,458.69-5092.38Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M474.14-5087.29a2.58,2.58,0,0,0-2.58,2.57,2.58,2.58,0,0,0,2.58,2.58,2.57,2.57,0,0,0,2.57-2.58A2.57,2.57,0,0,0,474.14-5087.29Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M451-5059a2.58,2.58,0,0,0-2.58,2.57,2.59,2.59,0,0,0,2.58,2.58,2.58,2.58,0,0,0,2.57-2.58A2.57,2.57,0,0,0,451-5059Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M370.69-5134.17l11.64.54.54-11.64a4.9,4.9,0,0,0-4.67-5.12,4.9,4.9,0,0,0-5.13,4.67l-.09,1.83-1.83-.08a4.9,4.9,0,0,0-5.13,4.67A4.9,4.9,0,0,0,370.69-5134.17Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M360.87-5119.38l.41,9,9-.41a3.78,3.78,0,0,0,3.6-4,3.77,3.77,0,0,0-4-3.6l-1.41.07-.07-1.42a3.78,3.78,0,0,0-3.95-3.6A3.78,3.78,0,0,0,360.87-5119.38Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <circle cx="18.02" cy="2.57" r="2.57" />
                                    <circle cx="2.57" cy="12.82" r="2.57" />
                                    <path
                                        d="M381.46-5123.33a2.57,2.57,0,0,0,2.57,2.57,2.58,2.58,0,0,0,2.58-2.57,2.58,2.58,0,0,0-2.58-2.58A2.57,2.57,0,0,0,381.46-5123.33Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M404.63-5129.71a6.44,6.44,0,0,0,6.43-6.44v-19.59l18-4.51V-5149a6.43,6.43,0,0,0-3.87-1.29,6.44,6.44,0,0,0-6.43,6.43,6.45,6.45,0,0,0,6.43,6.44,6.45,6.45,0,0,0,6.44-6.44v-18a1.28,1.28,0,0,0-.49-1,1.3,1.3,0,0,0-1.11-.24L409.47-5158a1.29,1.29,0,0,0-1,1.25v15.45a6.38,6.38,0,0,0-3.86-1.29,6.45,6.45,0,0,0-6.44,6.44A6.46,6.46,0,0,0,404.63-5129.71Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M392.68-5087a9,9,0,0,0-6.38,2.64,8.94,8.94,0,0,0-2.63,6.37,8.94,8.94,0,0,0,2.63,6.37,9,9,0,0,0,12.75,0,9,9,0,0,0,2.64-6.37,9,9,0,0,0-2.64-6.37A9,9,0,0,0,392.68-5087Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M404-5080.25a11.32,11.32,0,0,1,.22,2.26,11.47,11.47,0,0,1-3.39,8.19,11.54,11.54,0,0,1-8.19,3.39,11.54,11.54,0,0,1-8.19-3.39,11.5,11.5,0,0,1-3.4-8.19,11.51,11.51,0,0,1,3.4-8.19,11.6,11.6,0,0,1,10.45-3.17l29.84-29.84a21.74,21.74,0,0,0-25.71,3.87,21.73,21.73,0,0,0-5.84,10.49,1.27,1.27,0,0,1-1.37,1,29.55,29.55,0,0,0-23.74,8.54,29.65,29.65,0,0,0,0,41.87,29.63,29.63,0,0,0,41.87,0,29.54,29.54,0,0,0,8.54-23.73,1.29,1.29,0,0,1,1-1.38,21.87,21.87,0,0,0,10.5-5.83,21.77,21.77,0,0,0,3.86-25.72Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M454.56-5149l1.83-1.83-4.55-4.56a1.29,1.29,0,0,0-1.82,0,1.29,1.29,0,0,0,0,1.82C452.06-5151.5,453.51-5150,454.56-5149Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M461.85-5156.27l1.82-1.82-4.55-4.55a1.29,1.29,0,0,0-1.82,0,1.29,1.29,0,0,0,0,1.82Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M470-5135.33a1.27,1.27,0,0,0,0-1.82c-.17-.18.67.66-4.55-4.56l-1.82,1.83c4.89,4.92,4.77,4.92,5.46,4.92A1.28,1.28,0,0,0,470-5135.33Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path
                                        d="M477.33-5144.43l-4.55-4.56-1.83,1.83c5.05,5.07,4.84,4.92,5.47,4.92A1.29,1.29,0,0,0,477.33-5144.43Z"
                                        transform="translate(-358.29 5164.47)" />
                                    <path d="M397.67-5088.44a11.66,11.66,0,0,1,5.47,5.45l71.62-71.62-5.46-5.47Z"
                                        transform="translate(-358.29 5164.47)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="">
                <p className="bgUti01 bgParallax md:h-screen">
                </p>
                <div className="bg-white">
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-4 p-2 md:p-10 text-black text-fade-right">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Y tế</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Cư dân Alana City sẽ hoàn toàn yên tâm về sức khỏe khi
                                trung tâm y tế hiện đại, trang bị đầy đủ các thiết bị y tế tân
                                tiến tọa lạc ngay tại phân khu Saturn, chỉ cách một bước
                                chân. Với đội ngũ y bác sĩ giàu kinh nghiệm và các dịch vụ
                                khám chữa bệnh tiêu chuẩn quốc tế, cư dân có thể dễ
                                dàng tiếp cận các dịch vụ chăm sóc sức khỏe chất lượng
                                cao ngay tại nơi mình sống.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-8 md:mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/medical1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/medical2.png" alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 mt-20 md:mb-10">
                        <div className="order-2 md:order-1 col-span-12 md:col-span-8 md:mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/education1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/education2.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/education3.png" alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div className="order-1 md:order-2 col-span-12 md:col-span-4 p-2 md:p-10 text-black text-fade-left">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Giáo dục</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Alana City sở hữu hệ thống trường mầm non và trường
                                liên cấp đạt chuẩn, nơi các bé không chỉ được trang bị kiến
                                thức vững chắc mà còn được nuôi dưỡng tâm hồn, phát
                                triển thể chất và các kỹ năng sống cần thiết. Với môi
                                trường học tập hiện đại, chương trình học phong phú và
                                đội ngũ giáo viên giàu kinh nghiệm, hệ thống trường học
                                cam kết mang đến cho con em cư dân một nền tảng giáo
                                dục vững chắc cho tương lai.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <div className="">
                <p className="bgUti02 bgParallax md:h-screen">
                </p>
                <div className="bg-white">
                    <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-4 p-2 md:p-10 text-black text-fade-right">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Công viên</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Đắm chìm vào không gian xanh mát của công viên trung
                                tâm Astro Park, cùng hệ thống công viên nội khu bao
                                quanh, Alana City tạo nên một cuộc sống gần gũi với thiên
                                nhiên, gắn kết với cộng đồng. Tại đây, cư dân có thể thoải
                                mái tận hưởng những tiện ích đẳng cấp khác: từ khu vui
                                chơi trẻ em, gym power, quảng trường Milky Way nhộn
                                nhịp, đến những góc xanh yên tĩnh. Dù là người yêu thích
                                sự năng động hay ưa chuộng không gian riêng tư, Alana
                                City đều mang đến cho cư dân những trải nghiệm sống
                                trọn vẹn, phù hợp với mọi lứa tuổi.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-8 md:mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/park1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/park2.png"  alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 md:mt-20 mb-10">
                        <div className="order-2 md:order-1 col-span-12 md:col-span-8 ms:mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/sports1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/sports2.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/sports3.png" alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div className="order-1 md:order-2 col-span-12 md:col-span-4 p-2 mt-4 md:p-10 text-black text-fade-left">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Thể thao</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Tại Alana City, mỗi ngày của bạn đều là một ngày tận
                                hưởng. Bỏ lại những bộn bề cuộc sống sau lưng để đắm
                                mình dưới làn nước mát lành của hồ bơi Water Park, hay
                                hòa vào không khí sôi động của các sân thể thao đa năng.
                                Từ bóng đá, bóng rổ, cầu lông cho đến đường chạy
                                bộ,...mọi thứ đều sẵn sàng cho cư dân chăm sóc và rèn
                                luyện sức khỏe.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <div>
                <p className="bgUti03 bgParallax md:h-screen">
                </p>
                <div className="bg-white">
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-4 p-2 md:p-10 text-black text-fade-right">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Thương mại</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Alana City không chỉ là nơi an cư lý tưởng mà còn là thiên
                                đường mua sắm với Solar Mall và Solar Central. Nằm ngay
                                cổng chính Sky Gate và tọa lạc trên trục đường ĐT 741 sầm
                                uất, hai trung tâm thương mại này không chỉ đáp ứng nhu
                                cầu mua sắm đa dạng của cư dân mà còn là cơ hội đầu tư
                                sinh lời hấp dẫn cho các nhà đầu tư kinh doanh. Với không
                                gian mua sắm hiện đại, đa dạng các thương hiệu và dịch
                                vụ, Solar Mall và Solar Central chắc chắn sẽ trở thành điểm
                                đến sôi động nhất khu vực.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-8 mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/shopping1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/shopping2.png" alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="max-w-screen-xl mx-auto grid grid-cols-12 gap-8 mt-20 mb-10">
                        <div className="order-2 md:order-1 col-span-12 md:col-span-8 md:mt-10">
                            <Carousel >
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/game1.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/game2.png" alt="alana city"/>
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="w-full" src="/images/pages/tien-ich/game3.png" alt="alana city"/>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div className="order-1 md:order-2 col-span-12 md:col-span-4 px-2 md:p-10 text-black text-fade-left">
                            <h1 className={`text-4xl text-center ${th_leky.className}`}>Giải trí</h1>
                            <p className="text-justify mt-5 px-10 md:px-4">
                                Khu đô thị Alana City không chỉ mang đến không gian
                                sống hiện đại mà còn là thiên đường giải trí với vô vàn tiện
                                ích hấp dẫn. Từ những buổi nhâm nhi tách cà phê tại
                                khuôn viên Dream Park, khám phá thế giới ẩm thực đa
                                dạng tại phố ẩm thực Á - Âu, cho đến việc tìm về sự bình
                                yên tại vườn thiền healing. Đặc biệt, trung tâm tiệc cưới
                                Dione Palace sẽ mang đến những trải nghiệm khó quên
                                cho các sự kiện quan trọng của bạn và gia đình.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default TienIch