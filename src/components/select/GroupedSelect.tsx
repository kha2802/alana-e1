import React, { useEffect, useState } from 'react';

interface Option {
    value: string;
    name: string;
    type: string;
    group: string;
}

interface GroupedSelectProps {
    reload?: number
    options: Option[];
    onChange: (v: Option) => void
}

const GroupedSelect: React.FC<GroupedSelectProps> = ({ options, onChange, reload }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [ver, setVer] = useState<number>(1)

    useEffect(() => {
        setVer(reload || 1)
    }, [reload])

    const groupedOptions = options.reduce((groups: Record<string, Option[]>, option) => {
        const group = option.group;
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(option);
        return groups;
    }, {});

    const filteredOptions = searchTerm
        ? options.filter((option) =>
            option.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : options;

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option)
    };

    return (
        <div className="relative w-full">
            <div
                className="border rounded-lg p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? (
                    <div className="flex items-center">
                        <img src={selectedOption.value + '?v=' + ver} alt={selectedOption.name} className="w-32 mr-2" />
                        <span>{selectedOption.name}</span>
                    </div>
                ) : (
                    <span>Chọn một mục...</span>
                )}
            </div>

            {isOpen && (
                <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-full max-h-[500px] overflow-y-auto z-10">
                    <input
                        type="text"
                        className="w-full p-2 border-b"
                        placeholder="Tìm kiếm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {Object.keys(groupedOptions).map((group, index: number) => (
                        <div key={index}>
                            <div className="bg-gray-200 px-2 py-1 text-sm font-semibold">{group}</div>
                            {filteredOptions
                                .filter((option) => option.group === group)
                                .map((option) => (
                                    <div
                                        key={option.value}
                                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        <img
                                            src={option.value}
                                            alt={option.name}
                                            className="w-32 mr-2"
                                        />
                                        <span>{option.name}</span>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GroupedSelect;
