import React from 'react'

const Category = ({unique_category}) => {
    
    return (
        <li className='btn btn-outline-dark mx-2 text-capitalize' key={unique_category.index+1}>
            {unique_category.name}
        </li>
    )
}

export default Category