let account = document.getElementById("Account");

function openAccount() {
	account.classList.toggle("toggle-account");
}


// checot script function

let credit = document.getElementById("credit1");
let debit = document.getElementById("debit1");
let paypal = document.getElementById("paypal1");
let gcash = document.getElementById("gcash1");


let creditform = document.getElementById('credit-form');
let debitform = document.getElementById('debit-form');
let paypalform = document.getElementById('paypal-form');
let gcashform = document.getElementById('gcash-form');

function credit1() {

		// showing the form that I hide 
	creditform.classList.add('credit-form-click');

	// debitform.classList.remove('debit-form-click');
	paypalform.classList.remove('paypal-form-click');
	gcashform.classList.remove('gcash-form-click');


	// adding border effect by classlist*(form css)
	credit.classList.add('credit-click');
	debit.classList.remove('debit-click');
	paypal.classList.remove('paypal-click');
	gcash.classList.remove('gcash-click');


}
function debit1() {
		// showing the form that I hide 
	// debitform.classList.add('debit-form-click');
	creditform.classList.remove('credit-form-click');
	paypalform.classList.remove('paypal-form-click');
	gcashform.classList.remove('gcash-form-click');

	// adding border effect by classlist*(form css)
	credit.classList.remove('credit-click');
	debit.classList.add('debit-click');
	paypal.classList.remove('paypal-click');
	gcash.classList.remove('gcash-click');
}
function paypal1() {

		// showing the form that I hide 
	paypalform.classList.add('paypal-form-click');
	creditform.classList.remove('credit-form-click');
	// debitform.classList.remove('debit-form-click');
	gcashform.classList.remove('gcash-form-click');
	
	// adding border effect by classlist*(form css)
	credit.classList.remove('credit-click');
	debit.classList.remove('debit-click');
	paypal.classList.add('paypal-click');
	gcash.classList.remove('gcash-click');
}
function gcash1() {

	// showing the form that I hide
	creditform.classList.remove('credit-form-click');
	// debitform.classList.remove('debit-form-click');
	paypalform.classList.remove('paypal-form-click');
	gcashform.classList.add('gcash-form-click'); 
	

	// adding border effect by classlist*(form css)
	credit.classList.remove('credit-click');
	debit.classList.remove('debit-click');
	paypal.classList.remove('paypal-click');
	gcash.classList.add('gcash-click');
}


// account popup modal
let modal = document.getElementById('Modal-Popup');
let close = document.getElementById('Modal-Popup');
let save = document.getElementById('Modal-Popup');


function openModal() {
	modal.classList.add('open-modal');
}

function closeModal() {
	close.classList.remove('open-modal');
}
function saveModal() {
	close.classList.remove('open-modal');
}

// popup recipt function
let reciept = document.getElementById('reciept-popup');


function openRec() {
	reciept.classList.add('toggle-reciept');
}

let closecheck = document.getElementById('reciept-popup');
function closeCheck() {
	closecheck.classList.remove('toggle-reciept');
}