const images = [
    {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

   //option  - 1 .. не по заданию :( 

// images.forEach(image => {
//     const createImgRef = document.createElement("img")
//     createImgRef.setAttribute("src", image.url)
//     createImgRef.setAttribute("alt", image.alt)
//     createImgRef.setAttribute("width", 420)
//     createImgRef.setAttribute("height", 250)

//     const itemRef = document.createElement("li")
//     itemRef.appendChild(createImgRef)

//     const categRef = document.querySelector("#gallery")
//     // categRef.insertAdjacentHTML('afterbegin', itemRef)
//     categRef.appendChild(itemRef)
// })


//option  - 2
const categRef = document.querySelector('#gallery');
    
images.forEach(elem => {
   const createImg = `<li class="gallery-item"> <image src="${elem.url}" alt="${elem.alt}" width="420" height="250" </li>`;
    categRef.insertAdjacentHTML('afterbegin', createImg);
});

categRef.classList.add("gallery-categ")
