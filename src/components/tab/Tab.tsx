import { useState } from 'react';

interface TabProps {
    tabs: { title: string; content: React.ReactNode }[];
}

const Tab = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Tab Header */}
            <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === index
                                ? 'border-b-2 border-blue-500 text-blue-500'
                                : 'text-gray-500 hover:text-blue-500'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className="py-4">
                {tabs[activeTab] && (
                    <div className="text-gray-700">{tabs[activeTab].content}</div>
                )}
            </div>
        </div>
    );
};

export default Tab;
