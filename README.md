# Guestbook
---

## What did I achieve?
- A working form that allows the user to send their inputs.
- A working GET route for data to be sent to the server to then be stored in a database.
- A working POST route for data to be retrieved from the database and then be displayed on the DOM.
- Created dummy data in the SQL editor to use for testing.
- Tried for the first time to add ```linear-gradient``` in CSS, which was quite fun.
- Added box shadows on the two main containers of the site, which I thought went well with the site's style.
- I got the idea of showing messages from newest first, like it happens in chatrooms and forums and is much more intuitive... I thought it would be complicated, but i was surprisingly easy, just had to use an inbuilt JS method! :D

---

## What did I struggle on?
- My first struggle was on how to display the messages from the database onto the DOM. My first idea was by using a new function with a loop in it. But then after some research, I found out there was an easier way by just appending the data directly in the handleSubmit function.
- I eventually got it to work, but deploying on Render was very stressful. I had to retry it many times before I managed to sort it out.
- Surprisingly, I didn't struggle as much as I thought I would on the API connections, creating new routes, servers, databases, etc... However, I think I still don't 100% understand them concretely, so I will practise more on them and read about the topic.
- I briefly tried adding the stretch goal of deleting posts, however, I didn't manage to achieve it. I think I would have needed to create a new router in the server, but I wasn't exactly sure? Also, would all users visiting the site be able to delete any of the posts on there? I would prefer for a user to be able to only delete their own posts, but then that goes into the whole other realm of user authentication with accounts. 

---

## References
- This Stack Overflow thread which helped me with displaying data from a database --> https://www.codementor.io/@anthonyelam/displaying-database-content-on-a-web-page-using-html-css-and-javascript-2ejhvtl4cd
- For the ```reverse()``` method --> https://www.w3schools.com/jsref/jsref_reverse.asp
- For ```box-shadow``` ideas --> https://www.cssportal.com/css-properties/box-shadow.php, https://w3schools.tech/tutorial/css/css_box-shadow


---
