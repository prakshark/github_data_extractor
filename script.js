document.querySelector("#submit").addEventListener("click", () => {
    let userName = document.querySelector("#userName").value;
    let url
    if(userName === "") {
        alert("Please enter your name");
        location.reload();
    }
    else {
        url = `https://api.github.com/users/${userName}`;
        console.log(url);
    }

    // Variable declaration :-
    let location;
    let email;
    let bio;
    let publicRepos;
    let publicGists;
    let followers;
    let following;
    let lastUpdated;

    // API Call :-
    const requestUrl = url;
        let req = new XMLHttpRequest();
        req.open('GET', requestUrl);

        req.onreadystatechange = () => {
            if(req.readyState === 4) {

                // Now, to get the data from API Call, like followers :-
                data = JSON.parse(req.responseText);

                location = data.location
                if(location === null) location = "Not mentioned by user";

                email = data.email
                if(email === null) email = "Not mentioned by user";

                bio = data.bio
                if(bio === null) bio = "Not mentioned by user";

                publicRepos = data.public_repos

                publicGists = data.public_gists

                followers = data.followers

                following = data.following


                // DOM Manipulation :-
                document.querySelector("#username").innerHTML = `Username: ${userName}`;
                document.querySelector("#location").innerHTML = `Location: ${location}`;
                document.querySelector("#email").innerHTML = `Email: ${email}`;
                document.querySelector("#bio").innerHTML = `Bio: ${bio}`;
                document.querySelector("#publicRepos").innerHTML = `Public Repos: ${publicRepos}`;
                document.querySelector("#publicGists").innerHTML = `Public Gists: ${publicGists}`;
                document.querySelector("#followers").innerHTML = `Followers: ${followers}`;
                document.querySelector("#following").innerHTML = `Following: ${following}`;
                
                // JSON.parse is used to convert the API into an object, as it is mostly receives as a string
            }
        }
        req.send();
        

    
}, false)