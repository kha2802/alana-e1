import Carousel, { CarouselItem } from "@/components/carousel/Carousel"

const Investor = () => {
  return (
    <div className="bg-cover bg-center py-20 p-2 md:p-10" style={{ backgroundImage: `url(/images/pages/bg-line.png)` }}>
      <div className="bg-[#f1d6c4] w-full max-w-screen-xl mx-auto py-4">
        <div className="grid grid-cols-12 md:gap-11 md:p-10">
          <div className="col-span-12 md:col-span-6 text-center">
            <h4 className="text-[#91473a] text-2xl">CHỦ ĐẦU TƯ</h4>
            <img className="mt-4 w-full mx-auto max-w-[300px] px-14 md:px-6" src="/images/pages/Logo-PTA.png" alt="Phương Trường An Group" />
          </div>
          <div className="col-span-12 md:col-span-6 text-center">
            <h4 className="text-[#91473a] text-2xl mt-8 md:mt-0">ĐƠN VỊ PHÂN PHỐI CHÍNH THỨC</h4>
            <img className="mt-4 w-full mx-auto max-w-[310px] px-14 md:px-6" src="/images/pages/Logo%20Maxreal.png" alt="Maxreal" />
          </div>
        </div>
        <hr className="h-0.5 my-8 mx-10 border-0 bg-[#e2ac8a]" />
        <div className="text-center pb-16 px-20 hidden md:block">
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
        <div className="text-center pb-16   md:hidden">
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
    </div>
  )
}
export default Investor