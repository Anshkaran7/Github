const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

const input = document.getElementById("search-input");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
})

const generateProfile = (profile) => {
  return `
        <div id="profile-box">
                <div id="top-section">
                    <div id="left">
                        <div id="avatar">
                            <img src="${profile.avatar_url}" alt="avatar">
                        </div>
                        <div id="self">
                            <h1>${profile.name}</h1>
                            <h3>${profile.login}</h3>
                        </div>
                    </div>
                   <a href="${profile.html_url}" target="_blank"> <button class="primary-btn">Check Profile</button></a>
                </div>
                <div class="about">
                    <h1>About</h1>
                    <p>${profile.bio}</p>
                </div>
                <div class="status">
                    <div class="status-item">
                        <h1>Following</h1>
                        <p>${profile.following}</p>
                    </div>
                    <div class="status-item">
                        <h1>Repositories</h1>
                        <p>${profile.public_repos}</p>
                    </div>
                </div>
        </div>`;
};
const fetchProfile = async () => {
  const username = searchInputEl.value;

  loadingEl.innerText=" loading..";
  loadingEl.style.color="black";

  try {
    const res = await fetch(`${url}/${username}`);
    const data = await res.json();
    if(data.bio){
        loadingEl.innerText =""
        profileContainerEl.innerHTML=generateProfile(data)
    }else{
        loadingEl.innerHTML=data.message;
        loadingEl.style.color="red"
        profileContainerEl.innerText="";
    }
    console.log("data", data);
  } catch (error) {}
  console.log({ error });
  loadingEl.innerText=""
};
searchBtn.addEventListener("click", fetchProfile);
