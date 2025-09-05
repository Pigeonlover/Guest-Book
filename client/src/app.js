//
//

// TODO: collect users' data from the form and send it to the server

// 1) Select the form from the DOM
const guestbookForm = document.getElementById("guestbook-form");

// 2) Add a submit event to the form
guestbookForm.addEventListener("submit", handleSubmit);

// 3) Handle the submit event
async function handleSubmit(e) {
  // Prevent the data from going to the URL
  e.preventDefault();

  // Create a new template object using form inputs
  const formData = new FormData(guestbookForm); // This is the 'box' to store the input data

  // Fill the input data into the template object
  const formValues = Object.fromEntries(formData.entries());
  console.log(formValues);

  // Send data to the server
  // There is a POST route in server ready to receive form values
  await fetch("http://localhost:8080/guestbook/add-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });

  guestbookForm.reset();

  fetchData();
}

// All messages in the database are shown in a section below the form

const messagesSection = document.getElementById("messages-section");

// The client cannot communicate directly with the database, so we need to use the server

// Fetch messages from the server and display them

async function fetchData() {
  const res = await fetch("http://localhost:8080/guestbook", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const messages = await res.json();
  console.log("Fetched data:", messages);

  // Delete previous display ready for the new loop
  messagesSection.innerHTML = null;

  // Loop and display all messages
  messages.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `
      <p><strong>Name:</strong> ${msg.name}</p>
      <p><strong>Relationship:</strong> ${msg.relationship}</p>
      <p><strong>Preference:</strong> ${msg.preference}</p>
      <p><strong>Message:</strong> ${msg.message}</p>
    `;
    messagesSection.appendChild(messageDiv);
  });
}
// Fetch on page load
document.addEventListener("DOMContentLoaded", fetchData);
