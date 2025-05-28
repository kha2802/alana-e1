import { ISelectImage } from '@/interfaces/ISelectImage';
import { useState } from 'react';

interface MultiSelectDropdownProps {
  label: string;
  items: ISelectImage[];
}

const MultiSelectDropdown = ({ label, items }: MultiSelectDropdownProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<ISelectImage>();
  const [isOpen, setIsOpen] = useState(false);

  // Lọc các mục theo từ khóa tìm kiếm
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Thêm hoặc bỏ mục ra khỏi danh sách đã chọn
  const toggleItem = (item: ISelectImage) => {
    setSelectedItems(item);
  };
  // Đóng dropdown khi click ngoài component
  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150); // Delay nhỏ để cho phép chọn mục trước khi dropdown đóng
  };

  return (
    <div className="relative inline-block w-full" onBlur={handleBlur}>
      <button
        type="button"
        className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
          <input
            type="text"
            className="w-full py-2 px-3 border-b border-gray-300 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.value}
                className={`cursor-pointer  flex select-none relative py-2 pl-10 pr-4`}
                onClick={() => toggleItem(item)}
              >
                <img src={item.value} className='w-20' />
                <span
                  className={`block truncate font-normal`}
                >
                  {item.name}
                </span>
              </div>
            ))
          ) : (
            <p className="py-2 px-4 text-gray-500">Vui lòng chọn hình muốn thay đổi</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
