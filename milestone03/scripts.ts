//listing element
document.getElementById('resumeForm')?.addEventListener('submit' ,function(event){
    event.preventDefault();



    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const EducationElement = document.getElementById('Education') as HTMLInputElement;
    const ExperienceElement = document.getElementById('Experience') as HTMLInputElement;
    const SkillsElement = document.getElementById('Skills') as HTMLInputElement;

    
    if (nameElement && emailElement && phoneElement && EducationElement && ExperienceElement && SkillsElement) {
        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const education = EducationElement.value ;
        const experience = ExperienceElement.value ;
        const skills = SkillsElement.value ;
    
    
    
    // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number :</strong> ${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
     `;

     const resumeOutputElement = document.getElementById('ResumeOutput')
     if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
     }
     else {
        console.error('the resume output elements are missing')
     }
     
    }else  {
        console.error('one or more output elements are missing')
     }     
})