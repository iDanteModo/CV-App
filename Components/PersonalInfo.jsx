import { useState } from 'react';

export function PersonalInfo() {
    const [editForm, setEditForm] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
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