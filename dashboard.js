
	
let child = document.getElementById("childAcc");
let notifs = document.getElementById("notifications");
let voucher = document.getElementById("Voucher-section");
let purchases = document.getElementById("purchase-section");
let coin = document.getElementById("Point-section");
let sele = document.getElementById('Selected');
let profiles = document.getElementById('profile-section');
let banks = document.getElementById('bank-section');
let passwords = document.getElementById('password-section');
let notification = document.getElementById('notifications-section');

function openAcc() {
	child.classList.toggle("toogle-account-child");
	notifs.classList.remove("toogle-notif-child");
	sele.add("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	coin.classList.remove("Point-show");




}

function notif() {
	notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.add("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	promo.classList.remove("Promo-show");


}
function vouchers() {
	voucher.classList.add("Voucher-show");
	child.classList.remove("toogle-account-child");
	notifs.classList.remove("toogle-notif-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	coin.classList.remove("Point-show");




}

function purchase() {
	notifs.classList.remove("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.add("purchase-show");
	notification.classList.remove("notifications-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");




}
function coins() {
	notifs.classList.remove("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	notification.classList.remove("notifications-show");
	purchases.classList.remove("purchase-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.add("Point-show");



}





// show account child function
	
let profile = document.getElementById('profile-section');
let bank = document.getElementById('bank-section');
let password = document.getElementById('password-section');
let select = document.getElementById('Selected');


function showProfile() {
	profile.classList.add("profile-show");
	bank.classList.remove("bank-show");
	password.classList.remove("password-show");
	select.remove("Selected"); 
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");
	notification.classList.remove("notifications-show");



}
function showBank() {
	bank.classList.add("bank-show");
	profile.classList.remove("profile-show");
	password.classList.remove("password-show");
	select.remove("Selected");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");
	notification.classList.remove("notifications-show");

}
function showPassword() {
	password.classList.add("password-show");
	bank.classList.remove("bank-show");
	profile.classList.remove("profile-show");
	select.remove("Selected");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");
	notification.classList.remove("notifications-show");

}





// Show Notifiction child


	
let order = document.getElementById('Order-section');
let promo = document.getElementById('Promo-section');
let wallet = document.getElementById('Wallet-section');
let activity = document.getElementById('Activity-section');
let updates = document.getElementById('Update-section');


function showOrder() {
	order.classList.add("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	promo.classList.remove("Promo-show");
	// notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");



}

function showPromo() {
	promo.classList.add("Promo-show");
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	// notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");


}

function showWallet() {
	wallet.classList.add("Wallet-show");
	order.classList.remove("Order-show");
	updates.classList.remove("Update-show");
	activity.classList.remove("Activity-show");
	promo.classList.remove("Promo-show");
	// notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");


}

function showActivity() {
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.remove("Update-show");
	activity.classList.add("Activity-show");
	promo.classList.remove("Promo-show");
	// notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");


}

function showUpdates() {
	order.classList.remove("Order-show");
	wallet.classList.remove("Wallet-show");
	updates.classList.add("Update-show");
	activity.classList.remove("Activity-show");
	promo.classList.remove("Promo-show");
	// notifs.classList.toggle("toogle-notif-child");
	child.classList.remove("toogle-account-child");
	sele.remove("Selected"); 
	profiles.classList.remove("profile-show");
	banks.classList.remove("bank-show");
	passwords.classList.remove("password-show");
	purchases.classList.remove("purchase-show");
	notification.classList.remove("notifications-show");
	voucher.classList.remove("Voucher-show");
	coin.classList.remove("Point-show");


}

