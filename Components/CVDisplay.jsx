import PropTypes from "prop-types";

export function Cvdisplay({formData}) {
    const {personalInfo, personalEducation, practicalExperience} = formData;
    return (
        <div className="cv-container">
            <div className="cv">
                <div className="left">
                    <div className="cv-left">
                        <div className="cvPersonal">
                            <img src="../src/assets/Logos/profile.jpeg" alt="" />
                            <div className="contact">
                                <h2 className="subTitle">Contact</h2>
                                <h3>{personalInfo.email}</h3>
                                <h3>{personalInfo.phoneNumber}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-right">
                    <div className="right">
                        <div className="name">
                            <h1>{personalInfo.name}</h1>
                            <h3>{practicalExperience.positionTitle}</h3>
                        </div>
                        <div className="cvEducation">
                            <h2 className="subTitle">Education</h2>
                            <h3><strong>School Name: </strong>{personalEducation.schoolName}</h3>
                            <h3><strong>Title of Study: </strong>{personalEducation.titleOfStudy}</h3>
                        </div>
                        <div className="cvExperience">
                            <h2 className="subTitle">Experience</h2>
                            <h3><strong>Company Name: </strong>{practicalExperience.companyName}</h3>
                            <h3><strong>Responsabilities: </strong>{practicalExperience.responsabilities}</h3>
                            <h3><strong>Starting Date: </strong>{practicalExperience.startingDate}</h3>
                            <h3><strong>Ending Date: </strong>{practicalExperience.endingDate}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 Cvdisplay.propTypes = {
    formData: PropTypes.shape({
        personalInfo: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
        }),
        personalEducation: PropTypes.shape({
            schoolName: PropTypes.string.isRequired,
            titleOfStudy: PropTypes.string.isRequired,
        }),
        practicalExperience: PropTypes.shape({
            companyName: PropTypes.string.isRequired,
            positionTitle: PropTypes.string.isRequired,
            responsabilities: PropTypes.string.isRequired,
            startingDate: PropTypes.string.isRequired,
            endingDate: PropTypes.string.isRequired
        })

    })
 };
