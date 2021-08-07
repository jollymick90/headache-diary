import React, { useState } from 'react';
import HButton from '../../../web-components/buttons/HButton';


const NewHeadacheEvent = (props) => {
    const defaultHeadacheEvent = {
        level: "h-level-1",
        zone: "",
        type: ""
    }

    const [hDataEvent, setHDataEvent] = useState(defaultHeadacheEvent || {});

    const handleInputChange = event => {

        const { name, value } = event.target;

        if (hDataEvent) {
            setHDataEvent({ ...hDataEvent, [name]: value });

        } else {
            setHDataEvent({ [name]: value });

        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.updateHData({ ...hDataEvent })
    }

    const selectedValue = (event) => {

        setHDataEvent({ ...hDataEvent, "level": event.target.value });
    }

    return (
        <form
            onSubmit={onSubmitForm}
        >
            <div className="grid grid-cols-1">
                <div className="my-4 grid grid-cols-2">
                    <label>Level</label>
                    <select value={hDataEvent.level} onChange={selectedValue}>
                        <option value="h-level-1">lieve</option>
                        <option value="h-level-2">medio</option>
                        <option value="h-level-3">forte</option>
                    </select>
                </div>
                <div className="my-4 grid grid-cols-2">
                    <label>Zone</label>
                    <input type="string" name="zone" value={hDataEvent.zone} onChange={handleInputChange} />
                </div>
                <div className="my-4 grid grid-cols-2">
                    <label>Tipo</label>
                    <input type="string" name="type" value={hDataEvent.type} onChange={handleInputChange} />
                </div>
            </div>
            <div className="my-2 flex justify-center">
                <HButton> ADD </HButton>
            </div>

        </form>
    )
};


export default NewHeadacheEvent;