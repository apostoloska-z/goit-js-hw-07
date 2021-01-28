const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listItems = ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    return itemRef;
});

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listItems);