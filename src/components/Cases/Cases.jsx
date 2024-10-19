import React from 'react'
import './Cases.css'
import PropTypes from 'prop-types';

const Cases = ({ total, active, recover, death }) => {
    return (
        <div className='details'>
            <div className='casesTitle blue'>TotalCases: <span className='casesCount'>{total}</span></div>
            <div className='casesTitle yellow'>ActiveCases: <span className='casesCount'>{active}</span></div>
            <div className='casesTitle green'>Recovered: <span className='casesCount'>{recover}</span></div>
            <div className='casesTitle red'>Deaths: <span className='casesCount'>{death}</span></div>
        </div>
    )
}


Cases.propTypes = {
    total: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    recover: PropTypes.number.isRequired,
    death: PropTypes.number.isRequired,
}

export default Cases
