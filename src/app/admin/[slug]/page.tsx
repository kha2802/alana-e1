"use client"
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { title } from 'process';
import IArticle, { InitalDataArticle } from '@/interfaces/model/IArticle';
import { toast } from 'react-toastify';
import { SuccessResponse } from '@/interfaces/IResponse';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean']
  ]
}

const formats = [
  'header', 'font', 'list', 'bold', 'italic',
  'underline', 'strike', 'color', 'background',
  'align', 'link', 'image'
]

const DetailArticle = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()
  const [state, setState] = useState<IArticle>(InitalDataArticle)
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (params.slug !== 'add')
      loadData()
    else {
      setState(InitalDataArticle)
    }
  }, [])

  const loadData = async () => {
    const rs = await fetch(`/api/article/${params.slug}`)
    if (!rs.ok) {
      toast.warning(`Response status: ${rs.status}`);
    }
    const result: SuccessResponse<IArticle> = await rs.json();
    if (!result.data) router.push('/admin/add')
    setState(result.data)
  }

  const handleSaveArticle = async () => {
    // upload  file
    if (state.avatar === '' && !file) return;

    if (file) {
      const formData = new FormData();
      //@ts-ignore
      formData.append('file', file);
      formData.append('path', 'uploads/' + file?.name);
      try {
        const res = await fetch('/api/file', {
          method: 'POST',
          body: formData,
        });

        const result = await res.json();
        if (result.status !== 201)
          toast.warning("Tải file lên không thành công")
      } catch (error) {
        toast.warning("Lỗi vui lòng thử lại sau")
      }
    }

    const url = params.slug === 'add' ? '/api/article' : `/api/article/${params.slug}`
    const method = params.slug === 'add' ? "POST" : "PUT"
    const rs = await fetch(url,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state)
      }
    )
    if (!rs.ok) {
      toast.warning(`Response status: ${rs.status}`);
      return
    }
    const result: SuccessResponse<IArticle> = await rs.json();
    if (!result.data) {
      toast.warning(`Lỗi: ${result.message}`)
      return
    }
    toast.success('Đã lưu lại bài viết thành công')
    router.push(`/admin?id=${result.data.id}`)

  }

  const handleOnChange = (name: string, value: string) => {
    const newData: IArticle = { ...state, [name]: value } as IArticle
    setState(newData)
  }

  const handleOnChangeContent = (value: string) => {
    if (!state.avatar || state.avatar === '') {
      // Tạo đối tượng DOMParser
      const parser = new DOMParser();

      // Phân tích chuỗi HTML thành tài liệu DOM
      const doc = parser.parseFromString(value, 'text/html');

      // Lấy phần tử <img> đầu tiên từ tài liệu DOM
      const firstImage = doc.querySelector('img');

      const firstImageSrc = firstImage ? firstImage.getAttribute('src') : '/images/logos/favicon.png';
      const newData: IArticle = { ...state, avatar: firstImageSrc || '', content: value }
      setState(newData)
    }
    else
      handleOnChange('content', value)
  }
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setState({ ...state, avatar: `/uploads/${file.name}` })
      setFile(file);
    }
  }

  return (
    <div className='pt-[6rem] max-w-screen-xl mx-auto grid grid-cols-12 gap-4'  >
      <div className='col-span-12'>
        <button type="button" onClick={() => router.push(`/admin?id=${params.slug === 'add' ? '-1' : params.slug}`)} className="bg-gray-800 text-white rounded-l-xl ml-2 border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
          <div className="flex flex-row align-middle">
            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <p className="ml-2">Quay lại</p>
          </div>
        </button>
      </div>
      <div className='col-span-12 md:col-span-6'>
        <h2 className='w-full text-2xl'>Chỉnh sửa:</h2>
        <div className='w-full p-2 '>
          <h3 className='text-xl'>Tiêu đề:</h3>
          <input className='w-full p-2 border-b-2 border-gray-600 focus:border-0'
            placeholder='Nhập vào đây tiêu đề bài viết'
            value={state.title}
            onChange={(e: any) => handleOnChange('title', e.target.value)} />
        </div>
        <div className='w-full my-2'>
          <h3 className='text-xl'>Liên kế ảnh đại diện bài viết:</h3>
          <p className='text-sm text-gray-400'>Nếu không có thì tải hình lên phía bên dưới</p>
          <input className='w-full p-2 border-b-2 border-gray-600 focus:border-0'
            placeholder='Nhập liên kế ảnh'
            value={state.avatar}
            onChange={(e: any) => handleOnChange('avatar', e.target.value)} />
        </div>
        <div className='w-full my-4'>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 bg-[#f1d6c4] p-4 mt-4 text-[#e2ac8a]  border-dashed rounded-lg cursor-pointer  hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-[#091635]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                {state.avatar ? (
                  <p className='mb-2 text-sm text-[#091635]'>{state.avatar}</p>
                ) :
                  (<>
                    <p className="mb-2 text-sm text-[#091635]">
                      <span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-[#091635]">SVG, PNG, JPG or GIF</p>
                  </>
                  )}
              </div>
              <input id="dropzone-file" type="file"
                onChange={handleUploadFile} className="hidden" />
            </label>
          </div>
        </div>

        {typeof document !== "undefined" &&
          <ReactQuill theme="snow" modules={modules}
            formats={formats}
            value={state?.content}
            onChange={(value: string) => handleOnChangeContent(value)} />}
        <div className='w-full text-right mt-4'>
          <button onClick={handleSaveArticle}
            className='bg-[#091635] px-4 py-2 rounded-lg text-white font-bold '>
            Lưu bài viết
          </button>
        </div>
      </div>
      <div className='col-span-12 md:col-span-6'>
        <h2 className='text-2xl'>Dạng thu gọn:</h2>
        <div className='w-2/3'>
          <div
            className={`cursor-pointer col-span-6 md:col-span-full md:max-h-[200px] grid grid-cols-12 gap-5 px-2 border-b-2 border-b-[#91473a] text-[#91473a]  py-5`}>
            <div className="col-span-12 md:col-span-5">
              <img className="w-full" src={state.avatar} alt="alana city" />
            </div>
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-sm " >{state.title}</h2>
            </div>
          </div>
        </div>
        <h2 className='text-2xl mt-8'>Dạng chi tiết:</h2>
        <div className='w-full' dangerouslySetInnerHTML={{ __html: state?.content || "" }} />
      </div>
    </div>)
}
export default DetailArticle