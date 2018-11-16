const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.wait = parseInt(wait, 10);

  this.txt = "";
  this.wordIndex = 0;
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  const currentIndex = this.wordIndex % this.words.length;
  const currentWord = this.words[currentIndex];
  let typeSpeed = 300;

  if (this.isDeleting) {
    this.txt = currentWord.substring(0, this.txt.length - 1);
    typeSpeed /= 2;
    if (this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
  } else {
    this.txt = currentWord.substring(0, this.txt.length + 1);
    if (this.txt === currentWord) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  setTimeout(() => {
    this.type();
  }, typeSpeed);

};

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
