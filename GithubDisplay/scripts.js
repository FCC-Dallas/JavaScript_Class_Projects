document.addEventListener("DOMContentLoaded", function(){
                                        //Username below
        var repoNames = [];
        fetch('https://api.github.com/users/BboyAkers/repos')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            var list = document.getElementById("list");
            myJson.forEach(function(item){
                repoNames.push(item.name);
                list.innerHTML += "<li>" + item.name + "</li>";
            })
            
            
        })
       
})

