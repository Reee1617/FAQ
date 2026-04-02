//  QAItem CLASS 
class QAItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  render() {
    const details = document.createElement("details");

    const summary = document.createElement("summary");
    summary.textContent = this.question;

    const answerDiv = document.createElement("div");
    answerDiv.textContent = this.answer;

    details.appendChild(summary);
    details.appendChild(answerDiv);

    return details;
  }
}

//  CREATE FAQ ITEMS 
const faqList = [
  new QAItem(
    "What is JavaScript?",
    "JavaScript is a programming language used to make websites interactive."
  ),
  new QAItem(
    "What is OOP?",
    "OOP stands for Object-Oriented Programming. It organizes code using objects and classes."
  ),
  new QAItem(
    "How does this FAQ work?",
    "Clicking a question expands or collapses the answer with smooth animations."
  )
];

//  RENDER FAQ 
const faqContainer = document.getElementById("faq");

faqList.forEach(item => {
  faqContainer.appendChild(item.render());
});