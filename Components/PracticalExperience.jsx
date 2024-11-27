import { useState } from 'react';
import PropTypes from 'prop-types';

export function PracticalExperience({formData, updateFormData}) {
    const [editForm, setEditForm] = useState(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setEditForm(!editForm);
        
    }    

    return (
        editForm ?
        <form onSubmit={handleSubmit} className='forms'>
            <div className="practicalExperience-container">
                <h1>Practical Experience</h1>
            <label htmlFor="companyName">Company Name: </label>
                    <input type="text"
                    id='companyName'
                    name='companyName'
                    placeholder='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    />
                    <label htmlFor="positionTitle">Position Title: </label>
                    <input type="text"
                    id='positionTitle'
                    name='positionTitle'
                    placeholder='Position Title'
                    value={formData.positionTitle}
                    onChange={handleChange}
                    />
                    <label htmlFor="responsabilities">Responsabilities: </label>
                    <input type="text"
                    id='responsabilities'
                    name='responsabilities'
                    placeholder='Responsabilities'
                    value={formData.responsabilities}
                    onChange={handleChange}
                    />
                    <label htmlFor="startingDate">Starting Date: </label>
                    <input type="date"
                    id='startingDate'
                    name='startingDate'
                    value={formData.startingDate}
                    onChange={handleChange}
                    />
                    <label htmlFor="endingDate">Ending Date: </label>
                    <input type="date"
                    id='endingDate'
                    name='endingDate'
                    value={formData.endingDate}
                    onChange={handleChange} 
                    />
                    <div className="buttons">
                        <button type="submit">Submit</button>
                    </div>
            </div>
        </form>
        :
        <form onSubmit={handleSubmit}>
            <div className="practicalExperience-container">
            <h1>Practical Experience</h1>
            <label htmlFor="companyName">Company Name: </label>
                    <h5>{formData.companyName}</h5>
                    <label htmlFor="positionTitle">Position Title: </label>
                    <h5>{formData.positionTitle}</h5>
                    <label htmlFor="responsabilities">Responsabilities: </label>
                    <h5>{formData.responsabilities}</h5>
                    <label htmlFor="startingDate">Starting Date: </label>
                    <h5>{formData.startingDate}</h5>
                    <label htmlFor="endingDate">Ending Date: </label>
                    <h5>{formData.endingDate}</h5>
                    <div className="buttons">
                        <button type="submit">Edit</button>
                    </div>
            </div>
        </form>
    )
}

PracticalExperience.propTypes = {
    formData: PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        positionTitle: PropTypes.string.isRequired,
        responsabilities: PropTypes.string.isRequired,
        startingDate: PropTypes.string.isRequired,
        endingDate: PropTypes.string.isRequired,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};