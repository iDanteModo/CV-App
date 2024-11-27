import { useState } from 'react';
import { PersonalInfo } from "./PersonalInfo";
import { PersonalEducation } from "./PersonalEducation";
import { PracticalExperience } from "./PracticalExperience";
import { CvDisplay } from './CvDisplay.jsx';

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
    <CvDisplay formData={formData}/>
    </>
)
}
