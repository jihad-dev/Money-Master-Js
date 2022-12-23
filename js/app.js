// step-1 :
document.getElementById('Calculate-button').addEventListener('click',function(){
const foodInputValue = document.getElementById('food-input-btn');
const foodInputValueString = foodInputValue.value;
const newFoodinputField = parseFloat(foodInputValueString);
foodInputValue.value = '';
// step-2 :
const rentInputField = document.getElementById('rent-field');
const rentInputFieldString = rentInputField.value;
const previousRentValue = parseFloat(rentInputFieldString);
rentInputField.value = '';
// step-3 :
const clothesInputField = document.getElementById('clothes-Input-Field');
const clothesInputFieldValueString = clothesInputField.value;
const newClothesValue = parseFloat(clothesInputFieldValueString);
clothesInputField.value = '';
// step -4 : 
const TotalInputValue = newFoodinputField + previousRentValue + newClothesValue;

// total expenses //
const TotalExpenses = document.getElementById('total-Expenses');
const TotalExpensesString = TotalExpenses.innerText;
const newTotalExpenses = parseFloat(TotalExpensesString);
//
const newTotal = TotalInputValue + newTotalExpenses;
TotalExpenses.innerText = newTotal;

// step-7: //
const incomeInputField = document.getElementById('income-Input-Field');
const incomeInputFieldString = incomeInputField.value;
const newincomeinputField = parseFloat(incomeInputFieldString);
incomeInputField.value = '';
//
const TotalExpensesValue = newincomeinputField - newTotal;

//
const balance = document.getElementById('balance-last');
const balanceString = balance.innerText;
const newBalance = parseFloat(balanceString);

//
balance.innerText = TotalExpensesValue;

})


