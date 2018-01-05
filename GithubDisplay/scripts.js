document.addEventListener("DOMContentLoaded", function(){
    var repoNames = [];

    fetch('https://api.github.com/users/SparksD2145/repos')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            var list = document.getElementById("list");

            myJson.forEach(function(item){
                repoNames.push(item.name);
                list.innerHTML += "<li>" + item.name + "</li>";
            })


        });

    fetch('https://api.github.com/users/SparksD2145')
        .then(function (response) {
            return response.json();
        })
        .catch(function () {
            document.getElementById('user').innerHTML = '<h1 style="color: red;">ERROR LOADING USER DATA</h1>';
        })
        .then(function (responseJson) {
            var userJson = JSON.stringify(responseJson, null, 4);

            var template = `
                <h1>${responseJson.login}</h1>
                <img width="100" src="${responseJson.avatar_url}" />
                <br /><pre>${userJson}</pre>
            `;

            document.getElementById('user').innerHTML = template;

            var test = document.getElementById('test');
            test.href = responseJson.html_url;
            test.innerHTML = responseJson.html_url;
        });
})
