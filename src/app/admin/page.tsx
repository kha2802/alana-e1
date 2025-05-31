"use client"
import { useEffect, useState } from 'react';
import IArticle from '@/interfaces/model/IArticle';
import {  SuccessResponse } from "@/interfaces/IResponse";
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCookieClient, setCookieClient } from '@/utils/cookies';
import Tab from '@/components/tab/Tab';
import MultiSelectDropdown from '@/components/dropdown/MultiSelectDropdown';
import { ISelectImage } from '@/interfaces/ISelectImage';
import UploadImage from '@/views/update-image';

let id = ''


const AdminPage = () => {
  const router = useRouter()

  const [articles, setArticles] = useState<IArticle[]>([])

  const [select, setSelect] = useState(-1)

  useEffect(() => {
    const isAdmin = getCookieClient('isAdminALANA')
    if (!isAdmin) {
      const pw = window.prompt("Nhập mật khẩu đăng nhập của bạn vào đây")
      if (pw === "alanacity") {
        setCookieClient('isAdminALANA', 'admin', 3)
        loadData()
      }
      else router.push('/')
    } else if (isAdmin === 'admin')
      loadData()
  }, [])


  const loadData = async () => {
    const rs = await fetch(`/api/article/get-all`)
    if (!rs.ok) {
      toast.warning(`Response status: ${rs.status}`);
    }
    const result: SuccessResponse<IArticle[]> = await rs.json();
    setArticles(result.data)
    let params = new URLSearchParams(window.location.search);
    id = params.get('id') || ''
    if (id && id !== '') {
      const int = parseInt(id) || 0
      const index = result.data.findIndex(a => a.id === int)
      setSelect(index)
    }
  }
  const handleOnClickDelete = async () => {
    const cur = articles[select]
    if (window.confirm(`Bạn chắc chắn muốn xoá tin tức ${cur.title} này?`)) {
      const rs = await fetch(`/api/article/${cur.id}`, {
        method: 'DELETE'
      })
      if (!rs.ok) {
        toast.warning(`Response status: ${rs.status}`);
      }
      const result: SuccessResponse<string> = await rs.json();
      if (result.status === 'success') {
        toast.success("Xoá thành công.")
        const tempData = [...articles];
        tempData.splice(select, 1);
        setArticles(tempData)
      }
      else toast.warning('Lỗi xoá :' + result.message)
    }
  }

  return (
    <div className='pt-[6rem] max-w-screen-xl mx-auto '  >
      <Tab tabs={[
        {
          title: "Bài viết",
          content:
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12'>
                <h2 className='mx-4'>Nhấp vào bài viết cần chỉnh sửa hoặc
                  <Link href={'admin/add'} className='bg-[#0a3252] rounded-lg px-10 py-1 mx-4 text-[#e2ac8a] '>Thêm mới</Link>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-8 p-2">
                {select !== -1 && <>
                  <Link className='bg-[#0a3252] rounded-lg px-10 py-1 mx-4 text-[#e2ac8a] float-end' href={'/admin/' + articles[select]?.id}>Chỉnh sửa</Link>
                  <button className='bg-[#92493b] rounded-lg px-10 py-1 mx-4 text-[#e2ac8a] float-end' onClick={handleOnClickDelete}>Xoá</button>
                </>}
                <p dangerouslySetInnerHTML={{ __html: articles[select]?.content }}></p>
              </div>
              <div className="col-span-12 md:col-span-4 p-2 ">
                <div className="grid grid-cols-12 gap-4">
                  {articles && articles.map((a: IArticle, index: number) => (
                    <div key={a.id} onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      setSelect(index)
                    }}
                      className={`cursor-pointer col-span-6 md:col-span-full md:max-h-[200px] grid grid-cols-12 gap-5 px-2 border-b-2 border-b-[#91473a] text-[#91473a]  py-5 ${index === select ? 'bg-[#f1d7c4] text-[#92493b] rounded-xl mt-2 ' : ''}`}>
                      <div className="col-span-12 md:col-span-5">
                        <img className="w-full" src={a.avatar} alt="alana city" />
                      </div>
                      <div className="col-span-12 md:col-span-7">
                        <h2 className="text-sm " >{a.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        },
        {
          title: "Hình ảnh",
          content:
            <UploadImage/>
        }
      ]} />
    </div>)
}
export default AdminPage