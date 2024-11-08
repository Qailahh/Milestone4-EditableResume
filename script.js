// Select the form and resume output elements
var form = document.getElementById('resume-form');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeEducation = document.getElementById('resume-education');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Ensure the form and elements are not null before proceeding
if (form && resumeName && resumeEmail && resumeEducation && resumeWorkExperience && resumeSkills) {
    // Handle form submission and dynamically generate the resume
    form.addEventListener('submit', function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
        // Capture user input values from the form
        var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        var email = (_d = (_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        var education = (_f = (_e = document.getElementById('education')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        var workExperience = (_h = (_g = document.getElementById('work-experience')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        var skills = (_k = (_j = document.getElementById('skills')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        // Update resume sections dynamically
        resumeName.textContent = name || 'Not filled';
        resumeEmail.textContent = email || 'Not filled';
        resumeEducation.textContent = education || 'Not filled';
        resumeWorkExperience.textContent = workExperience || 'Not filled';
        // Update the skills section (splitting by commas)
        resumeSkills.innerHTML = ''; // Clear any previous skills
        if (skills) {
            var skillList = skills.split(',').map(function (skill) { return skill.trim(); });
            skillList.forEach(function (skill) {
                var li = document.createElement('li');
                li.textContent = skill;
                resumeSkills.appendChild(li);
            });
        }
        else {
            var li = document.createElement('li');
            li.textContent = 'Not filled';
            resumeSkills.appendChild(li);
        }
    });
    // Make sections editable
    function makeEditable(element) {
        if (element) {
            element.addEventListener('click', function () {
                var currentText = element.textContent || '';
                var input = document.createElement('input');
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
    var skillItems = resumeSkills === null || resumeSkills === void 0 ? void 0 : resumeSkills.getElementsByTagName('li');
    if (skillItems) {
        Array.from(skillItems).forEach(function (item) { return makeEditable(item); });
    }
}
