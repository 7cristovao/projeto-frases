// local reviews data
const reviews = [
    {
      id: 1,
      name: "blaise pascal",
      job: "matemático",
      img:
        "https://paintingandframe.com/uploadpic/others/big/blaise_pascal_(1623-1662).jpg",
      text:
        "O homem é visivelmente feito para pensar. Aí reside toda a sua dignidade e todo o seu mérito, onde todo seu dever é pensar com acerto",
    },
    {
      id: 2,
      name: "joseph weizenbaum",
      job: "cientista da computação",
      img:
        "https://www.harvardsquarelibrary.org/wp-content/uploads/2012/08/wiezenbaum_joseph-300x225.jpg",
      text:
        "Existe a crença de que só se pode programar o que se compreende perfeitamente. Essa crença ignora a evidência de que a programação, como qualquer outra forma de escrita, é um processo experimental. Programamos como redigimos, não porque compreendemos, mas para chegar a compreender.",
    },
    {
      id: 3,
      name: "gottfried wilhelm von leibniz",
      job: "físico",
      img:
        "https://4.bp.blogspot.com/-zoiFMdMLIfs/WIjrTlozmnI/AAAAAAAAIxw/pfJuycK5zNgUnGAFDmxmmvYWN0uwni97ACLcB/s1600/36_173426-portrait-of-gottfried-wilhelm-leibniz-%25281646-1716%2529.jpg",
      text:
        "A matemática é a honra do espírito humano.",
    },
    {
      id: 4,
      name: "george boole",
      job: "matemático",
      img:
        "https://clube.spm.pt/files/files/Captura%20de%20Ecra%20%284422%29.png",
      text:
        "Nós não necessitamos mais associar Lógica e Metafísica, mas sim Lógica e Matemática",
    },
    {
        id: 5,
        name: "albert einstein",
        job: "físico",
        img: "https://i.redd.it/g39au73fdir01.jpg",
        text: "Nem tudo que pode ser contado conta e nem tudo que conta pode ser contado.",
    },
    {
        id: 6,
        name: "aristóteles",
        job: "filósofo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
        text: "A dúvida é o princípio da sabedoria"
    },
    {
        id: 7,
        name: "terêncio",
        job: "poeta",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Terence_cropped.png",
        text: "Saber como se faz uma coisa é fácil; fazê-la é que é difícil."
    },
    {
        id: 8,
        name: "leonardo da vinci",
        job: "pintor",
        img: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2017/10/m_LeonardoVinciAutorretrato.jpg?resize=457%2C450",
        text: "Quem pensa pouco, erra muito."
    },
    {
        id: 9,
        name: "confúcio",
        job: "filósofo",
        img: "https://amenteemaravilhosa.com.br/wp-content/uploads/2016/11/confucio-2-768x485.jpg",
        text: "Eu não procuro saber as respostas, procuro compreender as perguntas."
    },
    {
        id: 10,
        name: "pierre-simon de laplace",
        job: "matemático",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Pierre-Simon_Laplace.jpg",
        text: "Leiam Euler, leiam Euler, é o mestre de todos nós."
    },
    {
      id: 11,
      name: "leonardo fibonacci",
      job: "matemático",
      img: "https://sites.google.com/site/leonardofibonacci7/_/rsrc/1468751024356/biografia/1-leonardo-fibonacci-granger.jpg",
      text: "Estes são nove símbolos dos hindús: 9, 8, 7, 6, 5, 4, 3, 2, 1. Com eles, mais o símbolo 0, que em árabe é chamado de ZÉFIRO, qualquer número pode ser escrito."
    },
    {
      id: 12,
      name: "leonhard euler",
      job: "matemático",
      img: "http://www.ime.unicamp.br/~apmat/wp-content/uploads/elementor/thumbs/euler2-ouu6ljlicvfngzt5mbovwtuuxklbgcfikwis3h3vfi.png",
      text: "Eu posso fazer o que eu desejo (em minha pesquisa)... O rei me chama de o seu professor e eu penso que eu sou o homem mais feliz do mundo."
    },
    {
      id: 13,
      name: "isaac newton",
      job: "físico",
      img: "https://www.infoescola.com/wp-content/uploads/2008/09/isaac-newton-328x450.jpg",
      text: "Se enxerguei mais longe foi porque me apoiei sobre ombros gigantes."
    },
    {
      id: 14,
      name: "brian kernighan",
      job: "cientista da computação",
      img: "https://www.cs.princeton.edu/~bwk/bwk.carolines.crop.jpg",
      text: "Nossa experiência mostra que a legibilidade é o único e melhor critério para a qualidade de um programa: se um programa é fácil de ler, ele é provavelmente um bom programa, se ele é difícil de ler, provavelmente ele não é bom."
    },
    {
      id: 15,
      name: "voltaire",
      job: "filósofo",
      img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/8F26/production/_99364663_0662c7a8-3bfc-4afb-9d35-6f8ce127da79.jpg",
      text: "Vivi certa vez em um país onde um professor de Matemática, somente por ter sido grande em sua vocação, foi enterrado como um rei que proporcionou o bem a seus súditos."
    },
    {
      id: 16,
      name: "sêneca",
      job: "filósofo",
      img: "https://midias.correiobraziliense.com.br/_midias/png/2022/11/02/675x450/1_seneca-26775398.png?20221102141552?20221102141552",
      text: "Os progressos obtidos por meio do ensino são lentos; já os obtidos por meio de exemplos são mais imediatos e eficazes."
    },
    {
      id: 17,
      name: "johann goethe",
      job: "diplomata",
      img: "https://2.bp.blogspot.com/-Krmhy9-U8rg/WvS1Khs0MRI/AAAAAAAACTs/ZXaZkSyC2tMF_UnklNVobgnKmDo8ZOovACLcBGAs/s320/Tom%2BGoethe%2B1.jpg",
      text: "O homem que sabe reconhecer os limites da sua própria inteligência está mais perto da perfeição."
    },
    {
      id: 18,
      name: "dennis ritchie",
      job: "cientista da computação",
      img: "https://www.freebsdbrasil.com.br/img/Dennis.png",
      text: "O Unix é muito simples, mas ele precisa de um gênio para entender a sua simplicidade."
    },
    {
      id: 19,
      name: "aldous huxley",
      job: "escritor",
      img: "https://images.virgula.com.br/2013/11/22/2558884402-aldous-huxley-2.jpg",
      text: "Experiência não é o que acontece com um homem: é o que um homem faz com o que lhe acontece."
    },
    {
      id: 20,
      name: "bjarne stroustrup",
      job: "cientista da computação",
      img: "https://www.linuxjournal.com/files/linuxjournal.com/linuxjournal/articles/070/7099/7099f1.jpg",
      text: "Linguagem C faz com que dar um tiro no pé seja fácil; Linguagem C++ torna isso mais difícil, mas quando nós o fazemos rebenta com a perna toda."
    },
    {
      id: 21,
      name: "sébastien-roch chamfort",
      job: "jornalista",
      img: "https://www.citador.pt/images/autorid00015.jpg",
      text: "A sociedade é composta por duas grandes classes: aqueles que têm mais jantares que apetite e os que tem mais apetite que jantares."
    },
    {
      id: 22,
      name: "niklaus wirth",
      job: "cientista da computação",
      img: "https://ieeecs-media.computer.org/wp-media/2018/04/06222125/niklaus-wirth-e1523053333539.jpg",
      text: "Um programa é uma formulação concreta de um algoritmo abstrato, baseado em representações e estruturas específicas de dados."
    },
    {
      id: 23,
      name: "donald ervin knuth",
      job: "cientista da computação",
      img: "https://www.premiosfronterasdelconocimiento.es/wp-content/uploads/sites/2/2019/06/FBBVA-10-tic-Knuth.jpg",
      text: "Previna-se contra erros do código anterior; eu apenas provei que ele está correto, não tentei executá-lo."
    },
    {
      id: 24,
      name: "carl friedrich gauss",
      job: "matemático",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg",
      text: "A matemática é a rainha das ciências e a teoria dos números é a rainha das matemáticas."
    },
    {
      id: 25,
      name: "nicômaco de gerasa",
      job: "filósofo",
      img: "https://iiif.wellcomecollection.org/image/V0004298/full/300,/0/default.jpg",
      text: "Todas as coisas foram arranjadas pela natureza, segundo um plano hábil, aparecem, tanto individual como coletivamente, como se fossem separadas e postas em ordem pela Previsão e pela Razão, que criaram tudo segundo o Número, concebível apenas para a mente e portanto completamente imaterial; entretanto, real; o realmente real, o eterno."
    },
    {
      id: 26,
      name: "linus trovalds",
      job: "cientista da computação",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
      text: "A maioria dos bons programadores programa não porque espera ser pago ou adulado pelo público, mas porque é divertido programar."
    },
    {
      id: 27,
      name: "rené descartes",
      job: "filósofo",
      img: "https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2019/08/rene-descartes.jpg.webp",
      text: "Deus criou o mundo segundo leis matemáticas e colocou em nosso espírito ciências de verdade"
    },
    {
      id: 28,
      name: "filolaus",
      job: "fílósofo",
      img: "http://www.percepolegatto.com.br/wp-content/uploads/2012/03/Filolau-1.jpg",
      text: "Todas as coisas que podem ser conhecidas tem número: por isso não é possível que  sem número alguma coisa possa ser concebida ou conhecida."
    },
  ];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
