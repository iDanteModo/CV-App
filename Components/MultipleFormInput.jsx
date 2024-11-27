import { useState } from 'react';
import { PersonalInfo } from "./PersonalInfo";
import { PersonalEducation } from "./PersonalEducation";
import { PracticalExperience } from "./PracticalExperience";
import { CVDisplay } from './CvDisplay';

export function MultipleInputForm() {
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            email: '',
            phoneNumber: '',
        },
        personalEducation: {
            schoolName: '',
            titleOfStudy: '',
        },
        practicalExperience: {
            companyName: '',
            positionTitle: '',
            responsabilities: '',
            startingDate: '',
            endingDate: '',
        }
    })

    const updateSection = (section, updatedData) => {
        setFormData((prev) => ({
          ...prev,
          [section]: updatedData,
        }));
      };

return (
    <>
    <div className="form-container">
        <PersonalInfo
          formData={formData.personalInfo}
          updateFormData={(data) => updateSection('personalInfo', data)}
        />
        <PersonalEducation
          formData={formData.personalEducation}
          updateFormData={(data) => updateSection('personalEducation', data)}
        />
        <PracticalExperience
          formData={formData.practicalExperience}
          updateFormData={(data) => updateSection('practicalExperience', data)}
        />
    </div>
    <CVDisplay formData={formData}/>
    </>
)
}
// const [editForm, setEditForm] = useState(true);
// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     schoolName: '', 
//     titleOfStudy: '',
//     typeOfStudy: '',
//     companyName: '',
//     positionTitle: '',
//     responsabilities: '',
//     startingDate: '',
//     endingDate: '',
// })
// const handleChange= (e) => {
//     const {name, value} = e.target;
//     setFormData(prevState  => ({
//         ...prevState,
//         [name]: value,
//     }));
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setEditForm(!editForm);
    
// }
// return (
//     editForm ? 
//     <div className='form-container'>
//         <form onSubmit={handleSubmit}>
//             <div className='personalInfo-container'>
//                 <h1>Personal Info</h1>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text"
//                 name='name'
//                 placeholder='Full Name'
//                 value={formData.name}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="email">Email: </label>
//                 <input type="email"
//                 name='email'
//                 placeholder='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input type="tel"
//                 name='phoneNumber'
//                 placeholder='Phone Number'
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 />
//             </div>
//             <div className='education-container'>
//                 <h1>Personal Education</h1>
//                 <label htmlFor="schoolName">School Name:</label>
//                 <input type="text"
//                 name='schoolName'
//                 placeholder='School Name'
//                 value={formData.schoolName}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="titleOfStudy">Title Of Study: </label>
//                 <input type="text"
//                 name='titleOfStudy'
//                 placeholder='Title Of Study'
//                 value={formData.titleOfStudy}
//                 onChange={handleChange}
//                 />
//             </div>
//             <div className='practicalExperience-container'>
//                 <h1>Practical Experience: </h1>
//                 <label htmlFor="companyName">Company Name: </label>
//                 <input type="text"
//                 name='companyName'
//                 placeholder='Company Name'
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="positionTitle">Position Title: </label>
//                 <input type="text"
//                 name='positionTitle'
//                 placeholder='Position Title'
//                 value={formData.positionTitle}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="responsabilities">Responsabilities: </label>
//                 <input type="text"
//                 name='responsabilities'
//                 placeholder='Responsabilities'
//                 value={formData.responsabilities}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="startingDate">Starting Date: </label>
//                 <input type="date"
//                 name='startingDate'
//                 value={formData.startingDate}
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="endingDate">Ending Date: </label>
//                 <input type="date"
//                 name='endingDate'
//                 value={formData.endingDate}
//                 onChange={handleChange} />
//                 <div className="buttons">
//                     <button type="submit"
//                     onClick={setEditForm}>Submit</button>
//                 </div>
//             </div>

//         </form>
//     </div>
//     :
//     <div className='form-container'>
//         <form onSubmit={handleSubmit}>
//             <div className='personalInfo-container'>
//                 <h1>Personal Info</h1>
//                 <label htmlFor="name">Name: </label>
//                 <h3>{formData.name}</h3>
//                 <label htmlFor="email">Email: </label>
//                 <h3>{formData.email}</h3>
//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <h3>{formData.phoneNumber}</h3>
//             </div>
//             <div className='education-container'>
//                 <h1>Personal Education</h1>
//                 <label htmlFor="schoolName">School Name:</label>
//                 <h3>{formData.schoolName}</h3>
//                 <label htmlFor="titleOfStudy">Title Of Study: </label>
//                 <h3>{formData.titleOfStudy}</h3>
//             </div>
//             <div className='practicalExperience-container'>
//                 <h1>Practical Experience: </h1>
//                 <label htmlFor="companyName">Company Name: </label>
//                 <h3>{formData.companyName}</h3>
//                 <label htmlFor="positionTitle">Position Title: </label>
//                 <h3>{formData.positionTitle}</h3>
//                 <label htmlFor="responsabilities">Responsabilities: </label>
//                 <h3>{formData.responsabilities}</h3>
//                 <label htmlFor="startingDate">Starting Date: </label>
//                 <h3>{formData.startingDate}</h3>
//                 <label htmlFor="endingDate">Ending Date: </label>
//                 <h3>{formData.endingDate}</h3>
//                 <div className="buttons">
//                     <button type='submit'>Edit</button>
//                 </div>
//             </div>

//         </form>
//     </div>
// )