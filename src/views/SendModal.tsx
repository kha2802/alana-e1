"use client"
import { toast } from "react-toastify";
import { getCookieClient, setCookieClient } from "@/utils/cookies";
import { useEffect, useState, FormEvent } from "react";

const SendModal = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const openmoal = getCookieClient('openmoal') !== 'false';
        setOpen(openmoal);
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fullName = formData.get('fullName');
        const phone = formData.get('phone') || '';
        const email = formData.get('email') || '';

        if (fullName === '' || (email === '' && phone === '')) {
            toast.warning("Không được để trống. Vui lòng nhập đủ thông tin");
            return;
        }

        const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (phone !== '' && !phoneNumberPattern.test(phone as string)) {
            toast.warning("Số điện thoại của bạn chưa đúng. Vui lòng nhập lại");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xnndkeja", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName,
                    phone,
                    email
                })
            });

            if (response.ok) {
                toast.success("Cám ơn bạn đã để lại thông tin. Chúng tôi sẽ sớm liên hệ với bạn");
                //@ts-ignore
                e.target.reset && e.target.reset();
                setCookieClient('openmoal', 'false', 90);
                handleOnClose();
            } else {
                toast.warning("Gửi không thành công. Vui lòng thử lại sau.");
            }
        } catch (error) {
            toast.error("Lỗi khi gửi dữ liệu.");
        }
    };

    const handleOnClose = () => {
        setOpen(false);
    };

    return (open ?
        <div data-modal-backdrop="static" aria-hidden="true" className={`bg-[#000000a3] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto mt-20">
                <div className="relative bg-[#e2ac8a] text-[#0a3252] rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl text-center font-bold text-[#0a3252]">NHẬN CHÍNH SÁCH ƯU ĐÃI</h3>
                        <button onClick={handleOnClose} type="button" className="bg-transparent hover:bg-gray-200 text-[#0a3252] rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4 bg-[#e2ac8a] text-[#0a3252]">
                        <h6 className="text-sm mt-4 ">Quý khách vui lòng để lại thông tin theo mẫu bên dưới để chúng tôi có thể hỗ trợ tốt hơn các thông tin về dự án.</h6>
                        <form onSubmit={handleSubmit} className="col-span-12 md:col-span-4 p-8">
                            <div className="bg-[#f1d6c4] rounded-lg p-4 mt-4 text-[#e2ac8a] ">
                                <input type="text" name="fullName" className="w-full mt-4 bg-[#f1d6c4] border-b-2 border-[#e2ac8a] text-black placeholder:text-[#e2ac8a] focus:outline-none" placeholder="Họ và tên" />
                                <input type="tel" name="phone" className="w-full  mt-4 bg-[#f1d6c4] border-b-2 border-[#e2ac8a] text-black placeholder:text-[#e2ac8a] focus:outline-none" placeholder="Số điện thoại" />
                                <input type="email" name="email" className="w-full  mt-4 bg-[#f1d6c4] border-b-2 border-[#e2ac8a] text-black placeholder:text-[#e2ac8a] focus:outline-none" placeholder="Email" />
                                <div className="w-full items-center text-center">
                                    <button type="submit" className="bg-[#0a3252] rounded-lg px-10 py-0.5 mx-auto mt-8 " >Gửi</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        : <></>
    )
}

export default SendModal;
