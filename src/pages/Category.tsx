import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../context';
import AllProductCardWrapper from '../components/category/AllProductCardWrapper';
import FilterSide from '../components/category/FilterSide';
import filter from "../assets/images/icons/Filter.png"
import SortByPrice from '../components/category/SortByPrice';
import Overlay from '../components/home/Overlay';
import NavigationModal from '../components/header/NavigationModal';
import IntroBanner from '../components/category/IntroBanner';
import { Data } from '../context';
import BreadCrumb from '../components/category/BreadCrumb';
const Category = () => {
    const { data, isBurgerMenuOpen } = useContext(globalContext);

    const [filterData, setFilterData] = useState<Data>(data);

    const [sortOrder, setSortOrder] = useState<string>("default");
    useEffect(() => {
        if (data) {
            setFilterData(data);
        }
    }, [data]);

    const [isFilterOpen, setIsFilterOpen] = useState(false)


    // Sorting handler
    function handleSortChange(value: string) {
        setSortOrder(value);
    }
    console.log(sortOrder)
    return (
        <div className="">
            {isBurgerMenuOpen && (
                <>
                    <Overlay />
                    <div className="global-container absolute z-[99]">
                        <NavigationModal />
                    </div>
                </>)}
            <div className="global-container">
                <section className='py-[30px]'>
                    <BreadCrumb />
                    <IntroBanner />
                </section>
                <div className="text-[60px] text-[#002A48] font-[800] flex-col sm:flex-row flex gap-[20px] sm:gap-[80px] py-[40px]">
                    <section className="sm:w-[25%] ">
                        <div className='flex justify-between items-center sm:hidden pb-[20px]'>
                            <SortByPrice onSortChange={handleSortChange} /> <img onClick={() => setIsFilterOpen((prev) => !prev)} className='w-[20px] cursor-pointer' src={filter} alt="Filter Icon" /></div>

                        <div className={`${isFilterOpen ? "block" : "hidden"} sm:block`}>  <FilterSide setFilterData={setFilterData} sortOrder={sortOrder} /></div>
                    </section>
                    <section className="sm:w-[75%]">
                        <AllProductCardWrapper filterData={filterData} onSortChange={handleSortChange} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Category;
