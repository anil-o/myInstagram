let posts = [
    {
        'author': 'dailyeconomy',
        'storyimage': 'img/dailyeconomystory.jpg',
        'location': 'New York',
        'image': 'img/dailyeconomynews.jpg',
        'description': 'Have you read the latest economic news?',
        'likePersons': ["dailystuff", "economyislife", "dailyinvestmenttips", "realestateinvestments"],
    },
    {
        'author': 'cars',
        'storyimage': 'img/mercedes.jpg',
        'location': 'Los Angeles',
        'image': 'img/oldtimer.jpg',
        'description': 'Do you want to go for a ride?',
        'likePersons': ["livefast", "ps", "pimpmyride"],
    },
    {
        'author': 'lifestyle',
        'storyimage': 'img/lifestyle.jpg',
        'location': 'Miami',
        'image': 'img/goodfriends.jpg',
        'description': 'Spend quality time with friends',
        'likePersons': ["goodtimes", "enjoyinglife", "happylife"],
    }
];

function load() {
    showStorys();
    suggestionNewPersons();
    showPosts();
}

/*
    * Show Story 
*/

function showStorys() {
    let storys = document.getElementById('story');

    storys.innerHTML = templateStorys();
}

function templateStorys() {
    return `<div class="profile-container">
    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/worldoffoods.jpg"></div>
        <div class="profile-description">worldoffoods</div>
    </div>

    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/thedailynews.png"></div>
        <div class="profile-description">thedailynews</div>
    </div>

    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/dailyeconomystory.jpg"></div>
        <div class="profile-description">dailyeconomy</div>
    </div>

    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/mercedes.jpg"></div>
        <div class="profile-description">cars</div>
    </div>

    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/lifestyle.jpg"></div>
        <div class="profile-description">lifestyle</div>
    </div>

    <div class="profile-container-child">
        <div class="story-try"><img class="profile" src="img/newyork-stock-exchange.jpg"></div>
        <div class="profile-description">NYSE</div>
    </div>
</div>`;
}

/*
    * Show suggestion persons
*/

function suggestionNewPersons() {
    let suggestion = document.getElementById('suggestion');
    suggestion.innerHTML = templatesuggestionNewPersons();
}

function templatesuggestionNewPersons() {
    return `
    <div class="box-vorschlag">
    <div class="vorschlag">Vorschläge für dich</div>
    <div class="alleansehen">Alle ansehen</div>
    </div>

    <div class="usernameandfollow">
    <div class="flex">
        <div><img class="profilevorschlaege" src="img/soocer.jpg"></div>
        <div class="vorschlaegeusername">streetfootball</div>
    </div>
    <div class="follow">Folgen</div>
    </div>
    
    <div class="usernameandfollow">
    <div class="flex">
        <div><img class="profilevorschlaege" src="img/travel.jpg"></div>
        <div class="vorschlaegeusername">travel</div>
    </div>
    <div class="follow">Folgen</div>
    </div>
    
    <div class="usernameandfollow">
    <div class="flex">
        <div><img class="profilevorschlaege" src="img/hotel.jpg"></div>
        <div class="vorschlaegeusername">hotel</div>
    </div>
    <div class="follow">Folgen</div>
    </div>`;
}

/*
    * Add comment  
*/

function addComment(addcomment, input) {
    let commentposition = document.getElementById(addcomment);
    let comment = document.getElementById(input);

    if (comment.value == ``) {
        alert(`Das Kommentarfeld ist leer! Bitte fügen Sie ein Kommentar hinzu!`);
    } else {
        commentposition.innerHTML += `<div><span class="usernamepostpercomment">anil_o9</span>${comment.value}</div>`;
        comment.value = ``;
    }
}

/*
    * show post
*/

function showPosts() {
    let post = document.getElementById('post');

    for (let i = 0; i < posts.length; i++) {
        post.innerHTML += templateShowPost(i);
    }
}

function templateShowPost(i) {
    let amountLikePersons = posts[i]['likePersons'].length;
    amountLikePersons = amountLikePersons - 1;
    return `<div class="wrapp-container-post">
        <div class="postone">
            <div class="imgusernameandlocation">
                <div class="poststory">
                    <img class="profilestory" src="${posts[i]['storyimage']}">
                </div>
                <div class="usernamepost">
                    <p class="bold font descriptionusername">${posts[i]['author']}</p>
                    <p class="font descriptionlocation">${posts[i]['location']}</p>
                </div>
            </div>

            <div class="dotsbox"><img class="dotspost" src="img/dots.png"></div>
        </div>

        <div>
            <img class="img-size" src="${posts[i]['image']}">
        </div>

        <div class="comment-container">
            <div class="comment-flex">
                <div class="flex">
                    <div class="distance-comment"><img class="size-comment-icons" src="img/favorite.png"></div>
                    <div><img class="size-comment-icons" src="img/chatbubble.png"></div>
                    <div><img class="size-comment-icons" src="img/send.png"></div>
                </div>

                <div><img class="distance-comment-save" src="img/save.png"></div>
            </div>

            <div class="likeuser">Gefällt <span class="usernamelike">${posts[i]['likePersons'][0]}</span> und <span
                class="usernamelike">${amountLikePersons} weiteren Personen</span></div>

            <div class="description">${posts[i]['description']}</div>

            <div id="addcomment${i}" class="addcomment">

            </div>

            <div class="comment-section">
                <div class="smileandcomment">
                    <div class="smile-container"><img class="smile" src="img/smile.png"></div>
                    <div><input onkeyup="bluebutton('button${i}', 'input${i}')" onkeyup="bluebutton(${i}, 'addcomment${i}', 'input${i}')" class="inputfield" type="text" name="comment"
                        placeholder="Kommentieren ..." id="input${i}"></div>
                </div>
                <div><button id="button${i}" onclick="addComment('addcomment${i}', 'input${i}')" class="bluebutton" type="button" disabled>Posten</button></div>
            </div>
        </div>
    </div>`;
}

/*
    * add not disabled button 
*/

function bluebutton(button, input) {
    let comment = document.getElementById(input);
    let disabledbutton = document.getElementById(button);
    if (comment.value.length >= 1) {
        disabledbutton.removeAttribute('disabled', '');
    } else {
        disabledbutton.setAttribute('disabled', '');
    }
}

/*
    * search function
*/

function filterPosts() {
    let search = document.getElementById('searchforfilter');
    search = search.value;
    search = search.toLowerCase();

    let postAfterFilter = document.getElementById('post');

    if (search == ``) {
        postAfterFilter.innerHTML = ``;
        showPosts();
    } else {
        for (let i = 0; i < posts.length; i++) {
            let postAuthor = posts[i]['author'];
            if (postAuthor.toLowerCase().includes(search)) {
                postAfterFilter.innerHTML = ``;
                postAfterFilter.innerHTML += templateShowPost(i);
            }
        }
    }
}