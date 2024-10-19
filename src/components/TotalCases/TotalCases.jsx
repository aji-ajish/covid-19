import React, { useEffect } from 'react'
import './TotalCases.css'
import Cases from '../Cases/Cases'
import { useDispatch, useSelector } from 'react-redux'
import { totalCases } from '../../redux/action/casesAction'
import Loader from '../loader/Loader'

const TotalCases = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalCases())
    }, [dispatch])

    const { totalCount, loading } = useSelector(state => state.covidState)


    return (
        <div> 
            <h3>Covid Cases in India</h3>
            {
                loading ? <div  className='totalCases'> <Loader /></div> : <Cases total={totalCount?totalCount.totalCases:0} active={totalCount?totalCount.activeCases:0} recover={totalCount?totalCount.recovered:0} death={totalCount?totalCount.deaths:0} />
            }

        </div>
    )
}

export default TotalCases
