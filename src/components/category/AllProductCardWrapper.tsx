import { useState } from 'react';
import ProductCard from '../home/ProductCard';
import { useNavigate } from 'react-router';
import rightArrow from "../../assets/images/icons/Arrow_Right_SM.png"
import leftArrow from "../../assets/images/icons/Arrow_Left_SM.png"
import SortByPrice from './SortByPrice';
import { Data } from '../../context';

interface Props {
    filterData: Data;
    onSortChange: (value: string) => void;
}
function AllProductCardWrapper({ filterData, onSortChange }: Props) {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 15;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filterData?.pets?.slice(indexOfFirstCard, indexOfLastCard) || [];
    const totalPages = Math.ceil((filterData?.pets?.length || 0) / cardsPerPage);

    // Function to change page
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleCardClick = (id: string) => {
        navigate(`/product/${id}`);
    };


    return (
        <div>
            <div className='sm:flex sm:items-center sm:justify-between'><h3 className='text-neutralColors-60 font-[500] text-[14px] font-SFPRO'>{filterData?.pets?.length} Puppies</h3>
                <div className='hidden sm:block'><SortByPrice onSortChange={onSortChange} /></div>
            </div>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 2xl:grid-cols-4'>
                {currentCards.map((item) => (
                    <div key={item?.id} onClick={() => handleCardClick(item?.id)} style={{ cursor: 'pointer' }}>
                        <ProductCard value={item} />
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex gap-[12px] mt-4 items-center justify-center">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <img src={leftArrow} alt="left arrow icon" loading="lazy" />
                    </button>
                    <div className="flex gap-[12px]">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                            <button
                                key={page}
                                className={`p-[8px] px-[16px] text-[16px]   rounded-[8px] ${currentPage === page ? 'bg-primaryColors-primaryDark text-white' : 'bg-gray-200'}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <img src={rightArrow} alt='right arrow icon' loading="lazy" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default AllProductCardWrapper;
