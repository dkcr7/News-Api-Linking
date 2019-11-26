function news(){
    var url = "https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=bdceeaeb320c4e2bafb98c5bad6375ad";
    var xtp = new XMLHttpRequest();
    xtp.open("GET", url, true);
    xtp.send();
    xtp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var result = this.responseText;
            //console.log(result);
            var jsonresult = JSON.parse(result);
            console.log(jsonresult);
            //let list = document.getElementById('list');
            let output= "";
            let latestNews =jsonresult.articles;
            for (var i in latestNews) {
                output += `<div class="col l4 m6 s12">
                            <div class="card medium hoverable">
                                <div class="card-image">
                                    <img src="${latestNews[i].urlToImage}" class="responsive-img" style="width:200px;height:200px;" alt="${latestNews[i].title}">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                                    <h6 class="truncate">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
                                    <p><b>Author</b>: ${latestNews[i].author} </p>
                                    <p><b>News source</b>: ${latestNews[i].source.name} </p>
                                    <p><b>Published</b>: ${latestNews[i].publishedAt} </p>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title"><i class="material-icons right">close</i></span>
                                    <p><b>Description</b>: ${latestNews[i].description}</p>
                                </div>

                                <div class="card-action">
                                    <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
                                </div>
                            </div>
                        </div>`;
            }
            if (output !== "") {
                $("#newsResults").html(output);
            }
        }
    }
}    