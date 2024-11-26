import { useState } from 'react';

export function PersonalEducation() {
    const [editForm, setEditForm] = useState(true);
    const [formData, setFormData] = useState({
        schoolName: '',
        titleOfStudy: '',
    });
    
    const handleChange= (e) => {
        const {name, value} = e.target;
        setFormData(prevState  => ({
            ...prevState,
            [name]: value,
        }));
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
                name='schoolName'
                placeholder='School Name'
                value={formData.schoolName}
                onChange={handleChange}
                />
                <label htmlFor="titleOfStudy">Title Of Study: </label>
                <input type="text"
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