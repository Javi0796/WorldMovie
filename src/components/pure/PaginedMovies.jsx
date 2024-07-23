import React, {useState, useTransition, useEffect} from 'react';
import PropTypes from 'prop-types';


const PaginedMovies = ( { items, itemsPerPage, length }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(length / itemsPerPage);

    const [imgList, setImgList] = useState(currentPage-1);

    const changePage = ((page) => {
        setCurrentPage(page)
        window.scrollTo({
            top: 0,
          })
    })

    useEffect(() => {
      setImgList((currentPage*itemsPerPage)-1)
      }, [currentPage])

    return (
        <div>
          {items?.slice(imgList, itemsPerPage).map((o, i) => {
          <div className='movie-list-gen' key={i}>
            <img src={`https://image.tmdb.org/t/p/w500${o.poster}`}></img>
          </div>
        })}
          <div className='button-bar'>
            {Array.from({ length: totalPage }, (_, index) => (
              <button className={`page-button page-${index+1}`} key={index+1} style={{backgroundColor: index+1 === currentPage ?
              '#BBCCDE' : '#88A7C6', border: '1px solid #000', display : 'flex', alignItems : 'center', justifyContent : 'center'}} onClick={() => changePage(index + 1) }>
              {index + 1}
            </button>
            ))}
          </div>
        </div> 
    );
};


PaginedMovies.propTypes = {

};


export default PaginedMovies;
