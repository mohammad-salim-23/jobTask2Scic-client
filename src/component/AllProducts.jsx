import { useState, useEffect } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AllProducts = () => {
    const axiosPublic = useAxiosPublic();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        brand: '',
        category: '',
        minPrice: 0,
        maxPrice: Infinity,
    });
    const [sortBy, setSortBy] = useState({
        field: 'createdAt',
        order: 'desc',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosPublic.get('/products', {
                    params: {
                        search: searchTerm,
                        brand: filters.brand,
                        category: filters.category,
                        minPrice: filters.minPrice,
                        maxPrice: filters.maxPrice,
                        sortBy: `${sortBy.field}:${sortBy.order}`,
                        page: currentPage,
                        limit: itemsPerPage,
                    },
                });
                console.log(response.data);
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [searchTerm, filters, sortBy, currentPage]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        const [field, order] = e.target.value.split(':');
        setSortBy({ field, order });
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <input type="text" placeholder="Search products" value={searchTerm} onChange={handleSearchChange} />

            <div>
                <label>Brand:</label>
                <select value={filters.brand} onChange={handleFilterChange} name="brand">
                    <option value="">All Brands</option>
                    {/* Options for brands */}
                </select>
            </div>
            <div>
                <label>Category:</label>
                <select value={filters.category} onChange={handleFilterChange} name="category">
                    <option value="">All Categories</option>
                    {/* Options for categories */}
                </select>
            </div>
            <div>
                <label>Min Price:</label>
                <input type="number" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
            </div>
            <div>
                <label>Max Price:</label>
                <input type="number" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
            </div>

            <div>
                <label>Sort by:</label>
                <select value={`${sortBy.field}:${sortBy.order}`} onChange={handleSortChange}>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="createdAt:desc">Newest First</option>
                </select>
            </div>

            {/* Product list */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {products.map((product) => (
                <div key={product._id}>
                    {/* Product details */}
                    
                   
                    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={product.productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    <p>{product.productName}</p>
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='font-medium'>Category:{product.category}</p>
    <p className='font-bold'>price:{product.price}tk</p>
    <p>{product.description}</p>
    <p className='font-bold'>Ratings:{product.ratings}</p>
    <p className='font-medium'>CreationDateTime:{product.creationDateTime}</p>
  </div>
</div>
                </div>
            ))}
  </div>

            {/* Pagination */}
            <div className='flex justify-center gap-4 mt-3'>
                <button onClick={() => handlePageChange(currentPage - 1)} 
                className='btn btn-outline mx-1'
                disabled={currentPage === 1}>Previous</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)}
                 className="btn btn-outline mx-1"
                 disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default AllProducts;
