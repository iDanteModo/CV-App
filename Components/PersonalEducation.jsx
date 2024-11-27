import { useState } from 'react';
import PropTypes from 'prop-types';

export function PersonalEducation({formData, updateFormData}) {
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

    return(
        editForm ?
        <form onSubmit={handleSubmit} className='forms'>
            <div className="education-container">
            <h1>Personal Education</h1>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text"
                id='schoolName'
                name='schoolName'
                placeholder='School Name'
                value={formData.schoolName}
                onChange={handleChange}
                />
                <label htmlFor="titleOfStudy">Title Of Study: </label>
                <input type="text"
                id='titleOfStudy'
                name='titleOfStudy'
                placeholder='Title Of Study'
                value={formData.titleOfStudy}
                onChange={handleChange}
                />
                <div className="buttons">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
        :
        <form onSubmit={handleSubmit}>
            <div className="education-container">
            <h1>Personal Education</h1>
                <label htmlFor="schoolName">School Name:</label>
                <h5>{formData.schoolName}</h5>
                <label htmlFor="titleOfStudy">Title Of Study: </label>
                <h5>{formData.titleOfStudy}</h5>
            <div className="buttons">
                    <button type="submit">Edit</button>
                </div>
            </div>
        </form>
    )
}

PersonalEducation.propTypes = {
    formData: PropTypes.shape({
        schoolName: PropTypes.string.isRequired,
        titleOfStudy: PropTypes.string.isRequired,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};