let image1 = document.getElementById("img").src="./src/img/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash.jpg";

const posts = [
    {
        id: 1,
        image: image1,
        title: "title",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum."
    },
    {
        id: 2,
        image: image1,
        title: "title 2",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2."
    },
    {
        id: 2,
        image: image1,
        title: "title 3",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2."
    },
    
];

    let card = document.getElementById("card");
    
    card.innerHTML = " "; 
   
    for( i = 0; i < posts.length; i++) {
        card.innerHTML += `
            <section>
                <div class="article__card" >
                    
                <img id="img" src="${posts[i].image}">

                    <div>
                        <h3>  ${posts[i].title}  </h3>
                        <p> ${posts[i].text} </p>
                    </div>
                
                <div>
            </section>
        `
    }


  