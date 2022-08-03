// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = function(){
    const numCategories = document.querySelectorAll('.item');
    console.log(`Number of categories: ${numCategories.length}`);
}

const catName = function(){
    const name = document.querySelector('#categories');
    const items = name.querySelectorAll('.item');

    for (const item of items){
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Category: ${item.lastElementChild.children.length}`)
    }
}

categories();
catName();


