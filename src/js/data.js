let image1 = document.getElementById("img").src="/src/img/mojibullah-shahir-SXeu2Cps5vM-unsplash.jpg";

const posts = [
    {
        id: 1,
        image: image1,
        title: "title",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum."
    },
    {
        id: 1,
        image: image1,
        title: "title",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corrupti. Reprehenderit autem rerum."
    }
];

    let imagem = document.getElementById("img");
    let titulo = document.getElementById("title"); 
    let texto = document.getElementById("text");

    titulo.innerHTML = "";
    texto.innerHTML = "";
    imagem.innerHTML = "";

   for(let i=0; i< posts.length; i++) {
        titulo.innerHTML += "<h3>"+posts[i].title+"</h3>";
        texto.innerHTML += "<p>"+posts[i].text+"</p>";
        imagem.innerHTML += "<img src="+posts[i].imagem+"/>"
   }


