let tasks = [
	{ task: "Wash Car", price: 10 },
	{ task: "Mow Lawn", price: 20 },
	{ task: "Pull Weeds", price: 30 },
];
const btnWrapper = document.getElementById("btn-wrapper");
const selectedWrapper = document.getElementById("selected-wrapper");
const totalEl = document.getElementById("total-el");
let totalPrice = 0;
const invoiceBtn = document.getElementById("invoice-btn");

// render task buttons
let taskBtn = "";
for (let i = 0; i < tasks.length; i++) {
	taskBtn += `<button id='${i}' class='task-btn' onclick='addTask(this.id)' >${tasks[i].task}: $${tasks[i].price}</button>`;
}
btnWrapper.innerHTML = taskBtn;
// render task buttons

// add task to list if not repeated
function addTask(taskNumber) {
	if (document.getElementById("selected" + taskNumber)) {
		return;
	}

	selectedWrapper.innerHTML += `<div id="selected${taskNumber}" class="flex-wrapper full-width">
							            <div class="flex-wrapper">
								            <p>${tasks[taskNumber].task}</p>
								            <button class="remove-btn" onclick="removeTask(${taskNumber})">Remove</button>
							            </div>
							            <p>$${tasks[taskNumber].price}</p>
						           </div>`;

	updatePrice(tasks[taskNumber].price);
}
// add task to list

// remove task from list
function removeTask(taskNumber) {
	document.getElementById("selected" + taskNumber).remove();
	updatePrice(-tasks[taskNumber].price);
}
// remove task from list

// update total amount price
function updatePrice(price) {
	totalPrice += price;
	totalEl.textContent = "$" + totalPrice;
}
// update total amount price

// "send invoice" and reset selected tasks
invoiceBtn.addEventListener("click", function (e) {
	totalPrice = 0;
	updatePrice(0);
	selectedWrapper.innerHTML = "";
});
// "send invoice" and reset selected tasks
