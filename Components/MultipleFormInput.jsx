import React , { useState } from 'react';

export function MultipleInputForm() {
    let edit = true;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        schoolName: '', 
        titleOfStudy: '',
        typeOfStudy: '',
        companyName: '',
        positionTitle: '',
        responsabilities: '',
        startingDate: '',
        endingDate: '',
    })
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
        edit = false;
        
    }
    
    return (
        edit ? 
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='personalInfo-container'>
                    <h1>Personal Info</h1>
                    <label htmlFor="name">Name: </label>
                    <input type="text"
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                    name='email'
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel"
                    name='phoneNumber'
                    placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    />
                </div>
                <div className='education-container'>
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
                </div>
                <div className='practicalExperience-container'>
                    <h1>Practical Experience: </h1>
                    <label htmlFor="companyName">Company Name: </label>
                    <input type="text"
                    name='companyName'
                    placeholder='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    />
                    <label htmlFor="positionTitle">Position Title: </label>
                    <input type="text"
                    name='positionTitle'
                    placeholder='Position Title'
                    value={formData.positionTitle}
                    onChange={handleChange}
                    />
                    <label htmlFor="responsabilities">Responsabilities: </label>
                    <input type="text"
                    name='responsabilities'
                    placeholder='Responsabilities'
                    value={formData.responsabilities}
                    onChange={handleChange}
                    />
                    <label htmlFor="startingDate">Starting Date: </label>
                    <input type="date"
                    name='startingDate'
                    value={formData.startingDate}
                    onChange={handleChange}
                    />
                    <label htmlFor="endingDate">Ending Date: </label>
                    <input type="date"
                    name='endingDate'
                    value={formData.endingDate}
                    onChange={handleChange} />
                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button>Edit</button>
                    </div>
                </div>

            </form>
        </div>
        :
        <h1>HELLO</h1>
    )
}