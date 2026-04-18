import React, { useState } from 'react';
import IconDate from "@/assets/icons/calendar.png";


const filterOptions = ['Day', 'Week', 'Month', 'Year', 'All Time',''] as const;
type FilterType = typeof filterOptions[number];

interface HeaderFilterProps {
    onFilterChange?: (filter: FilterType) => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('');
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const handleFilterChange = (filter: FilterType) => {
        setSelectedFilter(filter);
        onFilterChange?.(filter);
    };

    const DatePicker: React.FC<{ isOpen: boolean; onClose: () => void; onSelect: (date: string) => void }> = ({ isOpen, onClose, onSelect }) => {
        if (!isOpen) return null;
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
                <div className="bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-lg font-medium mb-4">Select Date</h3>
                    <input
                        type="date"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        onChange={(e) => onSelect(e.target.value)}
                    />
                </div>
            </div>
        );
    }

    const handleCalendarClick = () => {
        setIsDatePickerOpen(prev => !prev);
        setSelectedFilter(''); // Clear selected filter when calendar is opened
    }

    return (
        <div className="flex space-x-4 justify-end">
            {filterOptions.map((option) => {
                return option === '' ? null : (
                    <button
                        key={option}
                        onClick={() => handleFilterChange(option)}
                        className={`px-3 py-1 rounded-full text-sm ${selectedFilter === option ? 'bg-stone-200 text-black' : 'bg-transparent text-stone-200 hover:bg-stone-700'}`}
                        
                    >
                        {option}
                    </button>
                )
            })}
            <img src={IconDate} alt="Date Filter" className="w-6 h-6 self-center" onClick={handleCalendarClick} />
            <DatePicker isOpen={isDatePickerOpen} onClose={() => setIsDatePickerOpen(false)} onSelect={(date) => {
                console.log("Selected date:", date);
                setIsDatePickerOpen(false);
            }} />
        </div>
    );
};

export default HeaderFilter;