function seeMore() {
  const dots = document.querySelector(".dots");
  const seeMoreBtn = document.querySelector("button.see-more");
  const firstParagraph = document.querySelector(".card-content p");
  const moreText = document.querySelectorAll(".more-text");

  seeMoreBtn.addEventListener("click", () => {
    moreText.forEach(text => {
      text.classList.remove("hidden");
      dots.textContent = ".";
      seeMoreBtn.style.visibility = "hidden";
    });
  });
}

function openDiscussionTopic() {
  const topics = document.querySelectorAll(".topic");

  topics.forEach(topic => {
    topic.addEventListener("click", (event) => {
      if(!topic.childNodes[7]) {
        alert("Esse tópico ainda não possui respostas");
      } else {
        topic.childNodes[7].classList.toggle("show-responses");
      }
    })
  });
}

function createPost() {
  const buttonCreate = document.querySelector(".create-discussions-infos button");
  const formCreate = document.querySelector(".form-create");
  const formCreateButton = document.querySelector(".form-create button");
  const createDiscussions = document.querySelector(".create-discussions");
  const topicCreated = document.querySelector(".topic-created");
  const topicCreatedButton = document.querySelector(".topic-created button");
  const topicDisabled = document.querySelector(".topic.disabled");


  buttonCreate.addEventListener("click", () => {
    formCreate.classList.add("actived");
    createDiscussions.classList.add("hidden");
  });

  formCreateButton.addEventListener("click", () => {
    topicCreated.classList.add("actived");
    formCreate.classList.remove("actived");
    topicDisabled.classList.remove("disabled");
  });

  topicCreatedButton.addEventListener("click", () => {
    formCreate.classList.add("actived");
    topicCreated.classList.remove("actived");
  });
}

seeMore();
openDiscussionTopic();
createPost();