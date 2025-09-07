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
  await fetch("https://guest-book-l67k.onrender.com/guestbook/add-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  await fetchData();

  guestbookForm.reset();
}

//

// All messages in the database are shown in a section below the form

const messagesSection = document.getElementById("messages-section");

// The client cannot communicate directly with the database, so we need to use the server

// Fetch messages from the server and display them

async function fetchData() {
  const res = await fetch("https://guest-book-l67k.onrender.com/guestbook", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const messages = await res.json();
  console.log("Fetched data:", messages);
  // Newest message shows on top
  messages.reverse();

  // Delete previous display ready for the new loop
  messagesSection.innerHTML = null;

  // Loop and display all messages
  messages.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList = "message-box";

    const nameLabel = document.createElement("p");
    nameLabel.textContent = "Name: ";
    nameLabel.className = "label";
    const nameContent = document.createElement("p");
    nameContent.textContent = msg.name;
    nameContent.className = "content";

    const relationshipLabel = document.createElement("p");
    relationshipLabel.textContent = "Relationship: ";
    relationshipLabel.className = "label";
    const relationshipContent = document.createElement("p");
    relationshipContent.textContent = msg.relationship;
    relationshipContent.className = "content";

    const preferenceLabel = document.createElement("p");
    preferenceLabel.textContent = "Likes pigeons?: ";
    preferenceLabel.className = "label";
    const preferenceContent = document.createElement("p");
    preferenceContent.textContent = msg.preference;
    preferenceContent.className = "content";

    const messageLabel = document.createElement("p");
    messageLabel.textContent = "Message: ";
    messageLabel.className = "label";
    const messageContent = document.createElement("p");
    messageContent.textContent = msg.message;
    messageContent.className = "content";

    messageDiv.append(
      nameLabel,
      nameContent,
      relationshipLabel,
      relationshipContent,
      preferenceLabel,
      preferenceContent,
      messageLabel,
      messageContent
    );

    messagesSection.appendChild(messageDiv);
  });
}
// Fetch on page load
document.addEventListener("DOMContentLoaded", fetchData);
