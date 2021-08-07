import React, { useState } from 'react';

const HForm = (props) => {


    const [hDataEvent, setUser] = useState(props.hDataEvent);
    
    const handleInputChange =  event => {
        const { name, value } = event.target;

        setUser({ ...hDataEvent, [name]: value });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.updateHData()
    }

    const selectedValue = (event) => {
        console.log("selectedValue", event)
    }

    return (
        <form
            onSubmit={onSubmitForm}
        >
            <label>Level</label>
            <select value={selectedValue}>
                <option value="h-level-1">lieve</option>
                <option value="h-level-2">medio</option>
                <option value="h-level-3">forte</option>
            </select>

            <label>Zone</label>
            <input type="string" name="zone" value={hDataEvent.zone} onChange={handleInputChange} />

            <label>Tipo</label>
            <input type="string" name="type" value={hDataEvent.type} onChange={handleInputChange} />

        </form>
    )
}

export default HForm;