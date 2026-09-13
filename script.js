const reels = [
  {
    isMuted: true,
    userName: "rahul_dev",
    likeCount: 12400,
    isLiked: true,
    commentCount: 342,
    caption: "Building something cool today 🚀",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 128,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "riya_creates",
    likeCount: 8700,
    isLiked: false,
    commentCount: 189,
    caption: "Coffee, code and a little creativity ☕✨",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 76,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "arjun.fitness",
    likeCount: 23100,
    isLiked: true,
    commentCount: 521,
    caption: "No excuses. Just consistency 💪",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 314,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "neha_travels",
    likeCount: 15600,
    isLiked: false,
    commentCount: 276,
    caption: "Another place added to the memories 🌄❤️",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 192,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "vishal.editz",
    likeCount: 9800,
    isLiked: true,
    commentCount: 143,
    caption: "Just wait for the transition 🔥",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 87,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "ananya.music",
    likeCount: 18700,
    isLiked: false,
    commentCount: 398,
    caption: "This song has been stuck in my head 🎶",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 241,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "dev_diaries",
    likeCount: 6300,
    isLiked: true,
    commentCount: 97,
    caption: "Debugging at 2 AM hits different 😂",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 54,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "simran.style",
    likeCount: 11200,
    isLiked: false,
    commentCount: 231,
    caption: "Simple outfit, big confidence ✨",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 105,
    isFollowed: false,
  },
  {
    isMuted: true,
    userName: "karan_foodie",
    likeCount: 20400,
    isLiked: true,
    commentCount: 467,
    caption: "Would you try this? 👀🍕",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 286,
    isFollowed: true,
  },
  {
    isMuted: true,
    userName: "meera_daily",
    likeCount: 7400,
    isLiked: false,
    commentCount: 128,
    caption: "Making ordinary days a little more special 🌸",
    video: "./reels/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 63,
    isFollowed: false,
  },
];

let allReels = document.querySelector(".all-reels");

function showReels() {
  let reelsHTML = "";

  reels.forEach((elem, idx) => {
    reelsHTML =
      reelsHTML +
      `<div class="reel">
            <video autoplay loop ${elem.isMuted ? "muted" : ""} src="${elem.video}"></video>
            <div class="mute" id="${idx}">
        ${elem.isMuted ? `<i class="ri-volume-mute-fill"></i>` : `<i class="ri-volume-up-fill"></i>`}
      </div>
      <div class="play-btn">
  <i class="ri-play-fill"></i>
</div>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                />
                <h4>${elem.userName}</h4>
                <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h5>
                ${elem.caption}
              </h5>
            </div>
            <div class="right">
              <div id="${idx}" class="like">
                <h4 class="icon">${elem.isLiked ? `<i class="ri-heart-3-fill love"></i>` : `<i class="ri-heart-3-line"></i>`}</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="icon"><i class="ri-send-ins-line"></i></h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
  });

  allReels.innerHTML = reelsHTML;
}

showReels();

allReels.addEventListener("click", (evt) => {
  if (evt.target.className === "like") {
    let index = evt.target.id;

    if (reels[index].isLiked === false) {
      reels[index].isLiked = true;
      reels[index].likeCount++;

      evt.target.querySelector("i").className = "ri-heart-3-fill love";

      evt.target.querySelector("h6").textContent = reels[index].likeCount;
    } else {
      reels[index].isLiked = false;
      reels[index].likeCount--;

      evt.target.querySelector("i").className = "ri-heart-3-line";

      evt.target.querySelector("h6").textContent = reels[index].likeCount;
    }
  }

  if (evt.target.className === "follow") {
    let index = evt.target.id;

    if (reels[index].isFollowed === false) {
      reels[index].isFollowed = true;
      evt.target.textContent = "Unfollow";
    } else {
      reels[index].isFollowed = false;
      evt.target.textContent = "Follow";
    }
  }

  if (evt.target.className === "mute") {
    let index = evt.target.id;
    let video = evt.target.parentElement.querySelector("video");

    if (reels[index].isMuted === false) {
      reels[index].isMuted = true;
      video.muted = true;
      evt.target.innerHTML = `<i class="ri-volume-mute-fill"></i>`;
    } else {
      reels[index].isMuted = false;
      video.muted = false;
      evt.target.innerHTML = `<i class="ri-volume-up-fill"></i>`;
    }
  }

  if (evt.target.tagName === "VIDEO" || evt.target.className === "play-btn") {

    let video = evt.target.parentElement.querySelector("video");

    if (video.paused) {
      video.play();
      evt.target.parentElement.querySelector(".play-btn").style.display = "none";
    } else {
      video.pause();
      evt.target.parentElement.querySelector(".play-btn").style.display = "flex";
    }

  }
});
