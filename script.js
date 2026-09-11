const reels = [
  {
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
    userName: "riya_creates",
    likeCount: 8700,
    isLiked: false,
    commentCount: 189,
    caption: "Coffee, code and a little creativity ☕✨",
    video: "./reels/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 76,
    isFollowed: false
  },
  {
    userName: "arjun.fitness",
    likeCount: 23100,
    isLiked: true,
    commentCount: 521,
    caption: "No excuses. Just consistency 💪",
    video: "./reels/video3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 314,
    isFollowed: true
  },
  {
    userName: "neha_travels",
    likeCount: 15600,
    isLiked: false,
    commentCount: 276,
    caption: "Another place added to the memories 🌄❤️",
    video: "./reels/video4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 192,
    isFollowed: false
  },
  {
    userName: "vishal.editz",
    likeCount: 9800,
    isLiked: true,
    commentCount: 143,
    caption: "Just wait for the transition 🔥",
    video: "./reels/video5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 87,
    isFollowed: true
  },
  {
    userName: "ananya.music",
    likeCount: 18700,
    isLiked: false,
    commentCount: 398,
    caption: "This song has been stuck in my head 🎶",
    video: "./reels/video6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 241,
    isFollowed: false
  },
  {
    userName: "dev_diaries",
    likeCount: 6300,
    isLiked: true,
    commentCount: 97,
    caption: "Debugging at 2 AM hits different 😂",
    video: "./reels/video7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 54,
    isFollowed: true
  },
  {
    userName: "simran.style",
    likeCount: 11200,
    isLiked: false,
    commentCount: 231,
    caption: "Simple outfit, big confidence ✨",
    video: "./reels/video8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 105,
    isFollowed: false
  },
  {
    userName: "karan_foodie",
    likeCount: 20400,
    isLiked: true,
    commentCount: 467,
    caption: "Would you try this? 👀🍕",
    video: "./reels/video9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 286,
    isFollowed: true
  },
  {
    userName: "meera_daily",
    likeCount: 7400,
    isLiked: false,
    commentCount: 128,
    caption: "Making ordinary days a little more special 🌸",
    video: "./reels/video10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 63,
    isFollowed: false
  }
];
let allReels = document.querySelector(".all-reels");

let count = "";

reels.forEach((elem) => {
    count = count + `<div class="reel">
            <video autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                />
                <h4>${elem.userName}</h4>
                <button>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h5>
                ${elem.caption}
              </h5>
            </div>
            <div class="right">
              <div class="like">
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
          </div>`
});


allReels.innerHTML = count;