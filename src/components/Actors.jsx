import React, { useState, useEffect } from 'react';
import ConsultActors from './pure/ConsultActors';
import Actor from '../models/Actor';
import PopularActors from './PopularActors';

const Actors = () => {
    const [listActors, setListActors] = useState([new Actor()])
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(1)
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${count}`)
    
    useEffect(() => {
      setUrl(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${count}`)
    }, [count])
    
    const getListActors = (( listActors ) => {
        setListActors(listActors)
        setIsLoading(false)
    })

    const changePage = ((page) => {
        setCount(page)
        window.scrollTo({
            top: 0,
          })
    })

    return (
        <section className='actors'>
            <ConsultActors url={url} consult={getListActors}></ConsultActors>
            <div className='media_page'>
              <h3>Popular actors</h3>
              {!isLoading && <PopularActors className='container-fluid' listActors={listActors}></PopularActors>}
              {!isLoading &&
                  <div className='button-bar'>
                  {Array.from({ length: 10 }, (_, index) => (
                    <button className={`page-button page-${index+1}`} key={index+1} style={{backgroundColor: index+1 === count ? '#BBCCDE' : '#88A7C6', border: '1px solid #000', display : 'flex', alignItems : 'center', justifyContent : 'center'}} onClick={() => changePage(index + 1) }>
                      {index + 1}
                    </button>
                  ))}
                  </div>
              }
            </div>
        </section>
    );
}

export default Actors;
