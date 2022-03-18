const reviews =[
    {
        id:1,
        name: "ramesh sakhare",
        job: "web devloper",
        img: "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil excepturi,lestiae blanditiis iusto ipsa numquam beatae harum! Dolore maiores vero a dolor ipsam ab aperiam perferendis rem deleniti! Aspernatur, molestias? Ad, reprehenderit, facilis recusandae voluptate veniam architecto error molestias necessitatibus delectus, incidunt assumendaciunt fugit error.",
        
    },
    {
        id:2,
        name:"rajesh khot",
        job: "web devloper",
        img: "https://th.bing.com/th/id/OIP.tx6PKKJiAdtdnw-Mz8CoAQHaHa?pid=ImgDet&w=480&h=480&rs=1",
        text: "Lorem ipsum  sit amet consectetur adipisicing elit. Minima nihil excepturi, molestiae blanditiis iusto ipsa numquam beatae harum! Dolore maiores vero a dolor ipsam ab aperiam perferendis rem deleniti! Aspernatur, molestias? Ad, reprehenderit, facilis recusandae voluptate veniam architecto error molestias necessitatibus delectus, incidunt assumendaciunt fugit error.",
        
    },
    {
        id:3,
        name:"moni lalle",
        job: "stack devloper",
        img: "https://i.pinimg.com/originals/9e/b1/70/9eb1702ab8178bb1235703928c247e07.png",
        text: "Lorem ipsum dolor  amet consectetur adipisicing elit. Minima nihil excepturi, molestiae blanditiis iusto ipsa numquam beatae harum! Dolore maiores vero a dolor ipsam ab aperiam perferendis rem deleniti! Aspernatur, molestias? Ad, reprehenderit, facilis recusandae voluptate veniam architecto error molestias necessitatibus delectus, incidunt assumendaciunt fugit error.",
        
    },
    {
        id:4,
        name:"kumar sonali",
        job: "design engg",
        img: "https://money-morphosis.com/wp-content/uploads/2018/03/ALEXANDRA-DOUWES.png",
        text: "Lorem ipsum dolor sit amet tur adipisicing elit. Minima nihil excepturi, molestiae blanditiis iusto ipsa numquam beatae harum! Dolore maiores vero a dolor ipsam ab aperiam perferendis rem deleniti! Aspernatur, molestias? Ad, reprehenderit, facilis recusandae voluptate veniam architecto error molestias necessitatibus delectus, incidunt assumendaciunt fugit error.",
        
    },
]

const img =document.getElementById("person-img");
const author =document.getElementById("author");
const job =document.getElementById("job");
const info =document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn");;
const randomBtn = document.querySelector(".random-btn");

let currentItem =1;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
    
});
function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0; }
    showPerson(currentItem);
})
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})
randomBtn.addEventListener("click", function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})