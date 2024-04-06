// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likebtns = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
likebtns.forEach(span => span.addEventListener ('click', handleHeartClick));

function handleHeartClick(e) {
// console.log(e.target);
mimicServerCall()
.then(() => handleSuccess(e.target))
.catch(handleError)
}
function handleSuccess(liked){
  if(liked.textContent === EMPTY_HEART) {
 liked.textContent = FULL_HEART;
 liked.classList.add('activated-heart')
  } else {
    liked.textContent = EMPTY_HEART;
    liked.classList.remove('activated-heart')
  }
}
function handleError(message){
  modal.classList.remove('hidden')
  modalMessage.textContent = message;
  setTimeout(() => modal.classList.add('hidden'), 3000)

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
