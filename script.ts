// Select the form and resume output elements
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeName = document.getElementById('resume-name') as HTMLElement | null;
const resumeEmail = document.getElementById('resume-email') as HTMLElement | null;
const resumeEducation = document.getElementById('resume-education') as HTMLElement | null;
const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement | null;
const resumeSkills = document.getElementById('resume-skills') as HTMLElement | null;

// Ensure the form and elements are not null before proceeding
if (form && resumeName && resumeEmail && resumeEducation && resumeWorkExperience && resumeSkills) {
    // Handle form submission and dynamically generate the resume
    form.addEventListener('submit', function (e: Event) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Capture user input values from the form
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value ?? '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value ?? '';
        const education = (document.getElementById('education') as HTMLInputElement | null)?.value ?? '';
        const workExperience = (document.getElementById('work-experience') as HTMLInputElement | null)?.value ?? '';
        const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value ?? '';

        // Update resume sections dynamically
        resumeName.textContent = name || 'Not filled';
        resumeEmail.textContent = email || 'Not filled';
        resumeEducation.textContent = education || 'Not filled';
        resumeWorkExperience.textContent = workExperience || 'Not filled';

        // Update the skills section (splitting by commas)
        resumeSkills.innerHTML = ''; // Clear any previous skills
        if (skills) {
            const skillList = skills.split(',').map(skill => skill.trim());
            skillList.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                resumeSkills.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'Not filled';
            resumeSkills.appendChild(li);
        }
    });

    // Make sections editable
    function makeEditable(element: HTMLElement | null) {
        if (element) {
            element.addEventListener('click', function () {
                const currentText = element.textContent || '';
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentText;

                // Replace the element with an input field
                element.innerHTML = '';
                element.appendChild(input);

                input.addEventListener('blur', function () {
                    // When the input loses focus, save the value
                    element.textContent = input.value || 'Not filled';
                });

                input.focus();
            });
        }
    }

    // Make the already existing sections editable
    makeEditable(resumeName);
    makeEditable(resumeEmail);
    makeEditable(resumeEducation);
    makeEditable(resumeWorkExperience);

    // Also make skills list items editable after they are generated
    const skillItems = resumeSkills?.getElementsByTagName('li');
    if (skillItems) {
        Array.from(skillItems).forEach(item => makeEditable(item));
    }
}
