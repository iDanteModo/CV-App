import { useState } from 'react';
import PropTypes from 'prop-types';

export function PersonalInfo({formData, updateFormData}) {
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
        setEditForm(!editForm);
        console.log(formData);
        
    }    

    return (
        editForm ? 
        <form onSubmit={handleSubmit} className='forms'>
            <div className="personalInfo-container">
                <h1>Personal Info</h1>
                <label htmlFor="name">Name: </label>
                    <input type="text"
                    id='name'
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                    id='email'
                    name='email'
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel"
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    />
                <div className="buttons">
                        <button type="submit">Submit</button>
                    </div>
            </div>
        </form>
        :
        <form onSubmit={handleSubmit}>
            <div className="personalInfo-container">
                <h1>Personal Info</h1>
                <label htmlFor="name">Name: </label>
                    <h2>{formData.name}</h2>
                    <label htmlFor="email">Email: </label>
                    <h2>{formData.email}</h2>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <h2>{formData.phoneNumber}</h2>
                <div className="buttons">
                        <button type="submit">Edit</button>
                    </div>
            </div>
        </form>
    )
}

PersonalInfo.propTypes = {
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};