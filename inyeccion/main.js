class News{
    constructor(url, parameter){
        this.url = url + "/" + parameter;
    }

    async get(){
        let posts = await fetch(this.url)
        .then(response => response.json())
        .then(json => json);
        return posts;
    }
}

class Writer{
    
    constructor(news){
        this.news = news;
    }

    async show(){
        this.posts = await this.news.get();
        console.log(this.posts.title);
        /*this.posts.forEach(element => {
            console.log(element.title);
        });*/
    }
}

let news = new News("https://jsonplaceholder.typicode.com/todos/",2);
let writer = new Writer(news);
writer.show();