const url ="https://api.github.com/users";
const searchInputEl= document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

const generateProfile=(profile)=>{
    return(
        `
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
                   <a href="${profile.repos_url}"> <button class="primary-btn">Check Profile</button></a>
                </div>
                <div class="about">
                    <h1>About</h1>
                    <p>Frontend developer HTML5, CSS3, TailWind CSS & Javascript</p>
                </div>
                <div class="status">
                    <div class="status-item">
                        <h1>Following</h1>
                        <p>10000</p>
                    </div>
                    <div class="status-item">
                        <h1>Repositories</h1>
                        <p>1000</p>
                    </div>
                </div>`
    )

}
const fetchProfile= async () => {
    const username = searchInputEl.value
    try{
        const res = await fetch(`${url}/${username}`)
        const data = await res.json()
        console.log("data",data)
    }catch (error){}
    console.log({ error })

}
searchBtn.addEventListener('click', fetchProfile)