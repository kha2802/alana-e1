import GroupedSelect from '@/components/select/GroupedSelect';
import { ISelectImage } from '@/interfaces/ISelectImage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const items: ISelectImage[] = [
    { name: 'Hình chạy đầu trang 1', value: 'images/pages/home/bg-top1.png', group: 'Trang chủ', type: 'png' },
    { name: 'Hình chạy đầu trang 2', value: 'images/pages/home/bg-top2.png', group: 'Trang chủ', type: 'png' },
    { name: 'Hình chạy đầu trang 3', value: 'images/pages/home/bg-top3.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 1', value: 'images/pages/home/carousel1.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 2', value: 'images/pages/home/carousel2.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 3', value: 'images/pages/home/carousel3.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 4', value: 'images/pages/home/carousel4.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 5', value: 'images/pages/home/carousel5.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 6', value: 'images/pages/home/carousel6.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 7', value: 'images/pages/home/carousel7.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 8', value: 'images/pages/home/carousel8.png', group: 'Trang chủ', type: 'png' },
    { name: 'Carousel Bản giao hưởng 9', value: 'images/pages/home/carousel9.png', group: 'Trang chủ', type: 'png' },
    { name: 'Nền Thành phố ánh sáng', value: 'images/pages/home/bg-center.png', group: 'Trang chủ', type: 'png' },
    { name: 'Ảnh chuyển động vị trí', value: 'videos/address.gif', group: 'Trang chủ', type: 'gif' },
    { name: 'Phân khu bản PC', value: 'images/pages/home/bg-bottom.png', group: 'Trang chủ', type: 'png' },
    { name: 'Phân khu bản Mobile', value: 'images/pages/home/bg-bottom-mobile.png', group: 'Trang chủ', type: 'png' },
    { name: '6 lý do sở hữu', value: 'images/pages/home/6lydo.jpg', group: 'Trang chủ', type: 'jpg' },

    { name: 'Logo chủ đầu tư', value: 'images/pages/Logo-PTA.png', group: 'Khác', type: 'png' },
    { name: 'Logo đơn vị phát triển', value: 'images/pages/Logo-HHTA.png', group: 'Khác', type: 'png' },
    { name: 'Ảnh nền chân trang', value: 'images/pages/footer/footer.png', group: 'Khác', type: 'png' },

    { name: 'Sao kim 1', value: 'images/pages/gioi-thieu/venus1.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao kim 2', value: 'images/pages/gioi-thieu/venus2.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao mộc 1', value: 'images/pages/gioi-thieu/jupiter1.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao mộc 2', value: 'images/pages/gioi-thieu/jupiter2.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao thủy 1', value: 'images/pages/gioi-thieu/mercury1.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao thủy 2', value: 'images/pages/gioi-thieu/mercury2.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao hỏa 1', value: 'images/pages/gioi-thieu/themars1.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao hỏa 2', value: 'images/pages/gioi-thieu/themars2.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao thổ 1', value: 'images/pages/gioi-thieu/saturn1.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Sao thổ 2', value: 'images/pages/gioi-thieu/saturn2.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Ý tế', value: 'images/pages/1949_image003.png', group: 'Giới thiệu', type: 'png' },
    { name: 'Giáo dục', value: 'images/pages/hotel.jpg', group: 'Giới thiệu', type: 'jpg' },
    { name: 'Thương mại', value: 'images/pages/258886f853_01_CIFIChangde_RetailMall_Interi.jpg', group: 'Giới thiệu', type: 'jpg' },
    { name: 'Thẻ thao', value: 'images/pages/fitness-center-with-view-pool-center-is-equipped-with-treadmills-ellipticals.jpg', group: 'Giới thiệu', type: 'jpg' },
    { name: 'Không gian xanh', value: 'images/pages/tien-ich/bg-top.png', group: 'Tiện ích', type: 'png' },
    { name: 'Thư viện (ảnh nền)', value: 'images/pages/tien-ich/bg-book.png', group: 'Tiện ích', type: 'png' },
    { name: 'Trường học (ảnh nền)', value: 'images/pages/tien-ich/bg-education.png', group: 'Tiện ích', type: 'png' },
    { name: 'Cổng chào (ảnh nền)', value: 'images/pages/tien-ich/bg-house.png', group: 'Tiện ích', type: 'png' },

    { name: 'Carousel Ý tế 1', value: 'images/pages/tien-ich/medical1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Ý tế 2', value: 'images/pages/tien-ich/medical1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giáo dục 1', value: 'images/pages/tien-ich/education1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giáo dục 2', value: 'images/pages/tien-ich/education2.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giáo dục 3', value: 'images/pages/tien-ich/education3.png', group: 'Tiện ích', type: 'png' },

    { name: 'Carousel Công viên 1', value: 'images/pages/tien-ich/park1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Công viên 2', value: 'images/pages/tien-ich/park2.png', group: 'Tiện ích', type: 'png' },

    { name: 'Carousel Thể thao 1', value: 'images/pages/tien-ich/sports1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Thể thao 2', value: 'images/pages/tien-ich/sports2.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Thể thao 3', value: 'images/pages/tien-ich/sports3.png', group: 'Tiện ích', type: 'png' },


    { name: 'Carousel Thương mại 1', value: 'images/pages/tien-ich/shopping1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Thương mại 2', value: 'images/pages/tien-ich/shopping2.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giải trí 1', value: 'images/pages/tien-ich/game1.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giải trí 2', value: 'images/pages/tien-ich/game2.png', group: 'Tiện ích', type: 'png' },
    { name: 'Carousel Giải trí 3', value: 'images/pages/tien-ich/game3.png', group: 'Tiện ích', type: 'png' },

    { name: 'Dư án Phương Trường An Tân Định', value: '/images/pages/luxury.png', group: 'Thư viện', type: 'png' },
    { name: 'Dự án Phương Trường An 5', value: 'images/pages/ptp.png', group: 'Thư viện', type: 'png' },
    { name: 'Dự án FC Trường An', value: 'images/pages/rectangle.jpg', group: 'Thư viện', type: 'jpg' },
    { name: 'PDF BROCHURET', value: 'docs/AlanaCity.pdf', group: 'Thư viện', type: 'pdf' },
];

const UploadImage = () => {
    const [select, setSelect] = useState<ISelectImage>()
    const [file, setFile] = useState<File|null>()
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [reload, setReload] = useState(1);
    useEffect(() => {

    }, [reload])

    const onChangeSelect = (v: ISelectImage) => {
        setSelect(v)
        setPreviewUrl(null)
        setFile(null)
    }
    const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            if (!file || file === null) return
            const type = select ? select.type : 'png'
            setFile(file)
            const fileUrl = URL.createObjectURL(file);
            setPreviewUrl(fileUrl);
        }
    }
    const handleOnSave = async () => {
        const formData = new FormData();
        //@ts-ignore
        formData.append('file', file);
        formData.append('path', select?.value || 'uploads');
        try {
            const res = await fetch('/api/file', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            debugger
            if (result.status !== 201)
                toast.warning("Tải file lên không thành công")
            else {

                toast.success("Đã cập nhật thành công")
                setReload(reload + 1)
            }
        } catch (error) {
            toast.warning('Lỗi cập nhật lại file');
        }
    }
    return (

        <div className="container mx-auto p-4 grid grid-cols-12 gap-2">
            <div className='col-span-12 md:col-span-5'>
                <h1 className="text-2xl font-bold mb-4">Thay đổi hình</h1>
                <GroupedSelect reload={reload} options={items} onChange={onChangeSelect} />
            </div>
            <div className='col-span-12 md:col-span-7'>
                <div className="flex items-center justify-center w-full mt-8">
                    {select && select.name && (<label className="flex flex-col items-center justify-center w-full h-48 border-2 bg-[#f1d6c4] p-4 mt-4 text-[#e2ac8a]  border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-[#091635]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>

                            <>
                                <p className="mb-2 text-sm text-[#091635]">
                                    <span className="font-semibold">Nhấp vào đẩy để tải file lên</span></p>
                                <p className="text-xs text-[#091635]">{select?.type}</p>
                            </>

                        </div>
                        <input id="dropzone-file" type="file" accept={`.${select.type}`} onChange={handleUploadFile} className="hidden" />

                    </label>)}
                </div>
                {previewUrl !== null && (
                    <div className='mt-6'>
                        <div className='w-full text-right mt-4'>
                            <button onClick={handleOnSave}
                                className='bg-[#091635] px-4 py-2 rounded-lg text-white font-bold '>
                                Lưu hình ảnh
                            </button>
                        </div>
                        <img className='w-full mt-6' src={previewUrl} />
                    </div>
                )}
            </div>
        </div>

    );
};

export default UploadImage;
