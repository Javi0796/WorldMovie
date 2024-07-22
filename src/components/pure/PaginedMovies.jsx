import React, {useState, useTransition} from 'react';
import PropTypes from 'prop-types';


const PaginedMovies = ( { items, itemsPerPage, length }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="items">
                
            </div>
            <div className="pagination">

            </div>
        </div>
    );
};


PaginedMovies.propTypes = {

};


export default PaginedMovies;
