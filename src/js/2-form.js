const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {email:'', message:''};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  console.log(formDataFromLS);
  

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    const email = feedbackFormEl.elements['email'].value.trim();
    const message = feedbackFormEl.elements['message'].value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }


  event.target.reset();
    localStorage.removeItem('feedback-form-data');
    formData = { email: "", message: "" };
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
