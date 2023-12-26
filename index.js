
const form=document.getElementById("form")
const amount=document.getElementById('amount')
const description=document.getElementById("description")
const category=document.getElementById("category")
const list=document.getElementById("userlist")


form.addEventListener("submit",addexpenses)


function addexpenses(e){
   e.preventDefault()
const Amount= amount.value
const Description=description.value
const Category=category.value

const data={
    Amount,
    Description,
    Category
}
showData(data)


}



function showData(data) {
    // Create a new list item
    const listItem = document.createElement('li');

    // Populate the list item with expense data
    listItem.innerHTML = `
        <strong>Amount:</strong> ${data.Amount}, 
        <strong>Description:</strong> ${data.Description}, 
        <strong>Category:</strong> ${data.Category}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    // Add an event listener to delete the item when the button is clicked
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    // Add an event listener for editing (you can implement this logic)
    editButton.addEventListener("click", function() {
        // Implement edit logic here
        console.log("Edit clicked");
    });

    // Append the buttons to the list item
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    // Append the list item to the unordered list
    list.appendChild(listItem);
}
