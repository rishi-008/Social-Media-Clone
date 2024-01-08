const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainContentElement = document.querySelector("main")

initializeLikes()
renderPosts()


function initializeLikes() {
    for (let i = 0; i < posts.length; i++) {
        localStorage.setItem(`${posts[i].username}`,`${posts[i].likes}`)
    }    
}


function renderPosts() {
    
    for (let i = 0; i < posts.length; i++) {
         //Creating the HTML elements used and assigning them appropriate classes
         
        // Setup for article html element where all the content of the post will be placed 
        const postContainerElement = document.createElement("article")
        postContainerElement.className = "post"   
        
         //setup for oldgram post header
        const oldgramPostHeaderTextElementTop = document.createElement("h1")
        oldgramPostHeaderTextElementTop.textContent = posts[i].name
        const oldgramPostHeaderTextElementBottom = document.createElement("h2")
        oldgramPostHeaderTextElementBottom.textContent = posts[i].location
        const oldgramPostHeaderTextWrapperElement = document.createElement("div")
        oldgramPostHeaderTextWrapperElement.className = "post-information"
        oldgramPostHeaderTextWrapperElement.appendChild(oldgramPostHeaderTextElementTop)
        oldgramPostHeaderTextWrapperElement.appendChild(oldgramPostHeaderTextElementBottom)
        
        const oldgramPostHeaderImgElement = document.createElement("img")
        oldgramPostHeaderImgElement.className = "middle-content-header-img-element-left"
        oldgramPostHeaderImgElement.setAttribute("src", posts[i].avatar)
        
        const oldgramPostHeaderElement = document.createElement("header")
        oldgramPostHeaderElement.className = "oldgram-post-header"
        oldgramPostHeaderElement.appendChild(oldgramPostHeaderImgElement)
        oldgramPostHeaderElement.appendChild(oldgramPostHeaderTextWrapperElement)
        
        
        //Setup for post's main picture
        const oldgramPostMainImgElement = document.createElement("img")
        oldgramPostMainImgElement.className = "large-img-element"
        oldgramPostMainImgElement.setAttribute("src", posts[i].post)
        
        
        //Setup for post interaction tools
        const oldgramPostToolsWrapperElement = document.createElement("div")
        oldgramPostToolsWrapperElement.className = "post-interaction-tools"
        const oldgramPostToolsImgElement1 = document.createElement("img")
        oldgramPostToolsImgElement1.className = "img-element-small"
        oldgramPostToolsImgElement1.id = "likes-button"
        oldgramPostToolsImgElement1.setAttribute("src", "images/icon-heart.png")
        const oldgramPostToolsImgElement2 = document.createElement("img")
        oldgramPostToolsImgElement2.className = "img-element-small"
        oldgramPostToolsImgElement2.setAttribute("src", "images/icon-comment.png")
        const oldgramPostToolsImgElement3 = document.createElement("img")
        oldgramPostToolsImgElement3.className = "img-element-small"
        oldgramPostToolsImgElement3.setAttribute("src", "images/icon-dm.png")
        oldgramPostToolsWrapperElement.appendChild(oldgramPostToolsImgElement1)
        oldgramPostToolsWrapperElement.appendChild(oldgramPostToolsImgElement2)
        oldgramPostToolsWrapperElement.appendChild(oldgramPostToolsImgElement3)
        
        //Adding event listeners for the like button
        oldgramPostToolsImgElement1.addEventListener("click", function() {
            incrementLikes(posts[i].username)
        })
        
        //Setup for comments section of post
        const oldgramPostLikesTextElement = document.createElement("h3")
        oldgramPostLikesTextElement.className = "bolded-text"
        oldgramPostLikesTextElement.textContent = `${localStorage.getItem(posts[i].username)} Likes`
        
        const oldgramPostDescriptionTextElement = document.createElement("p")
        // oldgramPostDescriptionTextElement.textContent = posts[i].comment
        const oldgramPostDescriptionBoldedTextElement = document.createElement("span")
        oldgramPostDescriptionBoldedTextElement.className = "bolded-text"
        oldgramPostDescriptionBoldedTextElement.textContent = posts[i].username
        oldgramPostDescriptionTextElement.appendChild(oldgramPostDescriptionBoldedTextElement)
        oldgramPostDescriptionTextElement.insertAdjacentText('beforeend', ` ${posts[i].comment}`);
        
        
        //Adding the main elements onto the article html element
        postContainerElement.appendChild(oldgramPostHeaderElement)
        postContainerElement.appendChild(oldgramPostMainImgElement)
        postContainerElement.appendChild(oldgramPostToolsWrapperElement)
        postContainerElement.appendChild(oldgramPostLikesTextElement)
        postContainerElement.appendChild(oldgramPostDescriptionTextElement)
        mainContentElement.appendChild(postContainerElement)
    }
}

function incrementLikes(username) {
    const likesValue = Number(localStorage.getItem(username));
    const incrementedLikesValue = likesValue + 1;
    localStorage.setItem(`${username}`,`${incrementedLikesValue}`)
    
     clearContent()
     renderPosts()
}

function clearContent(){
    mainContentElement.innerHTML = "";
}