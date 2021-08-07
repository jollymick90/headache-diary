import React, { useState } from 'react';

import HButton from '../../../web-components/buttons/HButton';
import HeadacheList from './HeadacheList';
import NewHeadacheEvent from './NewHeadacheEvent';

const HeadacheModule = () => {

    const [ newEvent, setNewEvent ] = useState()
    const [ hDataList, setHData ] = useState([])


    const updateHData = (hData) => {
        console.log(hData)
        setHData([...hDataList, hData])

        setNewEvent(false)
    }
    

    return (
        <div className="p-5">

            <div className="headModule">
                <HButton onClick={ () => setNewEvent(!newEvent)} > <span>{newEvent ? "Lista" : "Nuovo evento"}</span>  </HButton>
            </div>
            <div>

                {
                    newEvent ? (
                        <NewHeadacheEvent updateHData={data => updateHData(data)} />
                    ) : (
                        <HeadacheList dataList={hDataList}/>
                    )
                }

            </div>


        </div>
    );
}

export default HeadacheModule;