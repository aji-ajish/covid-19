import React, { useEffect, useState } from 'react';
import './State.css';
import Cases from '../Cases/Cases';
import { useDispatch, useSelector } from 'react-redux';
import { stateCases, stateList, totalCases } from '../../redux/action/casesAction';
import Loader from '../loader/Loader';
import Map from '../Map/Map';


const State = () => {
    const [selectedState, setSelectedState] = useState("India");
    const [selectedStateId, setSelectedStateId] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(stateList());
        dispatch(totalCases());
    }, [dispatch]);

    const handleStateChange = (e) => {
        const selectedId = e.target.value;

        setSelectedStateId(selectedId);
        dispatch(stateCases(selectedId));
    };

    const { stateLists, totalCount, stateCount, loading } = useSelector((state) => state.covidState);

    // Use useEffect to update selectedState only when stateCount changes
    useEffect(() => {
        if (!loading && stateCount) {
            setSelectedState(stateCount.name);
        }
    }, [stateCount, loading]);

    return (
        <div className='state'>
            <div className='state__title'>
                <label className='label' htmlFor="stateSelect">Choose your State:</label>
                <select
                    id="stateSelect"
                    value={selectedStateId}
                    onChange={(e) => handleStateChange(e)}
                >
                    <option value={0}>Select State</option>
                    {
                        loading ? <option>Loading...</option> : stateLists?.map((state) => (
                            <option key={state.id} value={state.id}>{state.name}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <h3>Covid Cases in {selectedStateId != 0 ? selectedState : 'India'}</h3>
                {
                    loading ? <div className='totalCases'> <Loader /></div> : stateCount?.data && selectedStateId != 0 ? <Cases total={stateCount.data ? stateCount.data.totalCases : 0} active={stateCount.data ? stateCount.data.activeCases : 0} recover={stateCount.data ? stateCount.data.recovered : 0} death={stateCount.data ? stateCount.data.deaths : 0} /> : <Cases total={totalCount ? totalCount.totalCases : 0} active={totalCount ? totalCount.activeCases : 0} recover={totalCount ? totalCount.recovered : 0} death={totalCount ? totalCount.deaths : 0} />
                }
                <Map  selectedStateId={selectedStateId} setSelectedStateId={setSelectedStateId} />
            </div>
        </div>
    );
};

export default State;
