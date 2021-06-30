
//array com os dados dos cards de imoveis em destaque

const posts = [
    {
        id: 1,
        image: "./img/fineas-anton-VV_AtjLknlA-unsplash.jpg",
        title: "Imóvel 1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum.",
        location: "Estreito"
    },
    {
        id: 2,
        image: "./img/moreau-tokyo-G1ZJWJY8Ux4-unsplash.jpg",
        title: "Imóvel 2",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2.",
        location: "Centro"
    },
    {
        id: 3,
        image: "./img/paul-volodin-IH-JP5szbAY-unsplash.jpg",
        title: "Imóvel 3",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2.",
        location: "Estreito"
    },
    
    
];

// mostrando dados na página

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
                        <span> ${posts[i].location}</span>
                    </div>
                
                <div>
            </section>
        `
    }

    // campo de pesquisa

    let btn = document.getElementById("search-btn");

    document.addEventListener('click', search);

    function search() {
        let inputSearch = document.getElementById("input-search").value;

        let results = posts.filter( function(post) {
            return post.location === inputSearch;
            
        });

        console.log(results)
        
    }

    


  