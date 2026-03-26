# FAQ<br>
Simple FAQ – OOP JavaScript

This project is a Simple FAQ (Frequently Asked Questions) web page built using HTML, CSS, and JavaScript with an Object-Oriented Programming (OOP) approach. Users can click on a question to show or hide its answer.

📌 Features
Clean and simple FAQ layout
Clickable questions that toggle answers
Uses JavaScript classes (OOP)
No external libraries required
Beginner-friendly and easy to understand
🛠️ Technologies Used
HTML – Structure of the page
CSS – Styling and layout
JavaScript (OOP) – Dynamic behavior and logic <br>
📂 Project Structure
index.html

All code (HTML, CSS, and JavaScript) is contained in a single file for simplicity.<br>

🧠 How It Works
1. QAItem Class

Each FAQ item is represented by a QAItem class:

question → stores the question text
answer → stores the answer text
render() → creates and returns the HTML elements
2. Click Interaction
Clicking a question toggles the answer’s visibility
Uses addEventListener("click")
Answers are hidden by default using CSS
3. FAQ List

An array of QAItem objects is created and rendered dynamically into the page.<br>

▶️ How to Run the Project
Save the file as index.html
Open it in any modern web browser
Click on a question to see its answer

No setup or installation required.<br>

✏️ Customization

You can easily:

Add more FAQ items by creating new QAItem objects
Change styles in the <style> section
Improve animations (e.g., slide effects)
Add icons or accordion behavior
