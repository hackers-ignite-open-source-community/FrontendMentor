cardNumber = document.querySelector(".card-number");
cardNumberField = document.getElementById("creditCardNumber");
holderName = document.getElementById("holder-name");
mm = document.getElementById("MM");
yy = document.getElementById("YY");
cvc = document.getElementById("CVC");
inputFields = document.querySelectorAll('input[type="text"]');
pFields = document.querySelectorAll("p");
userForm = document.querySelector(".user-form");
completedForm = document.querySelector(".completed");
continueBtn = document.querySelector(".continue-btn");

//Display info on card
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].oninput = function () {
    if (i == 0) {
      var value = inputFields[i].value.replace(/\D/g, "");
      var formattedValue = "";
      for (let i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) {
          formattedValue += " ";
        }
        formattedValue += value[i];
      }
    } else {
      var value = inputFields[i].value;
      var formattedValue = "";
      for (let i = 0; i < value.length; i++) {
        formattedValue += value[i];
      }
    }
    inputFields[i].value = formattedValue;
    if (inputFields[i].value == "") {
      pFields[i].innerHTML = inputFields[i].placeholder;
    } else {
      pFields[i].innerHTML = formattedValue;
    }
  };
}

//Form validation functions
const isError = (field, message) => {
  inputControl = field.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  field.classList.add("field-error");
  field.classList.remove("success");
};

const validate = () => {
  let validator = true;
  let months = parseInt(mm.value, 10);
  let years = parseInt(yy.value, 10);
  let cvcc = parseInt(cvc.value, 10);
  //Card number
  if (cardNumberField.value === "") {
    isError(cardNumberField, "Can't be blank");
    validator = false;
  } else if (cardNumberField.value.length < 19) {
    isError(cardNumberField, "Enter a valid number");
    validator = false;
  } else if (holderName.value === "") {
    isError(holderName, "Can't be blank");
    validator = false;
  } else if (mm.value === "") {
    isError(mm, "Can't be blank");
    validator = false;
  } else if (yy.value === "") {
    isError(yy, "Can't be blank");
    validator = false;
  } else if (months < 1 || months > 12 || isNaN(months)) {
    isError(mm, "Enter a valid month");
    validator = false;
  } else if (yy.value.length !== 2 || isNaN(years)) {
    isError(yy, "Enter a valid year");
    validator = false;
  } else if (cvc.value === "") {
    isError(cvc, "Can't be blank");
    validator = false;
  } else if (cvcc.toString().length !== 3 || isNaN(cvcc)) {
    isError(cvc, "Invalid cvc");
    validator = false;
  }

  return validator;
};

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    userForm.classList.add("hidden");
    completedForm.classList.remove("hidden");
  }
});

continueBtn.addEventListener("click", () => {
  userForm.classList.remove("hidden");
  completedForm.classList.add("hidden");
  location.reload();
});
