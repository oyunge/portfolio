import React from 'react';
// import '../Styles/categories.scss'

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat, i)=>{
                    return <button type="button" className="btn-port" onClick={()=> filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
