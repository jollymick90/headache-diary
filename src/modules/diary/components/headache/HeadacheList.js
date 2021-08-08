import React from 'react';

const HeadacheList = props => {

    
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Zone</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.dataList.length > 0 ? 
                        (
                            props.dataList.map( (hData, i) => (
                                <tr key={i}>
                                    <td> { hData.level } </td>
                                    <td> { hData.zone } </td>
                                    <td> { hData.type } </td>
                                </tr>
                            ))
                        ) :  (
                            <tr>
                            <td>No Data</td>
                            </tr>
                        )

                    }
                </tbody>
            </table>            
        </div>
    )
}

export default HeadacheList;