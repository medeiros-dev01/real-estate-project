
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
        location: "Ingleses"
    },
    {
        id: 4,
        image: "./img/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash.jpg",
        title: "Imóvel 4",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum.",
        location: "Barreiros"
    },
    {
        id: 5,
        image: "./img/mojibullah-shahir-SXeu2Cps5vM-unsplash.jpg",
        title: "Imóvel 5",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2.",
        location: "Centro"
    },
    {
        id: 6,
        image: "./img/sam-li-NBN5GvTDa1E-unsplash.jpg",
        title: "Imóvel 6",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum 2.",
        location: "Trindade"
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


  