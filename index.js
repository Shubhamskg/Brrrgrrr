document.addEventListener('DOMContentLoaded', () => {
  const availableIngredients = [
    { name: 'Bread', price: 1.5 },
    { name: 'Meat', price: 3.0 },
    { name: 'Cheese', price: 2.0 },
    { name: 'Lettuce', price: 1.0 },
    { name: 'Tomato', price: 0.5 },
  ];

  const selectedIngredients = [];

  const renderIngredients = (containerId, ingredients, onClickHandler) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.className='li';
      li.textContent = `${ingredient.name} - $${ingredient.price.toFixed(2)}`;

      const button = document.createElement('button');
      button.className = 'remove';
      button.textContent = 'X';
      button.addEventListener('click', () => onClickHandler(ingredient));
      const cancel=document.getElementById('cancel');
      cancel.innerHTML='';
      li.appendChild(button);
      container.appendChild(li);
      const cancelButton = document.createElement('button');
      cancelButton.className = 'cancel';
      cancelButton.textContent = 'Cancel Order';
      cancelButton.addEventListener('click', () => {
        selectedIngredients.splice(0, selectedIngredients.length);
        renderIngredients('selectedIngredients', selectedIngredients, handleRemoveIngredient);
        updateBurgerPrice();
        cancel.innerHTML='';
      })
      
      cancel.appendChild(cancelButton);
    });
  };
  const addIngredients = (containerId, ingredients, onClickHandler) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    ingredients.forEach((ingredient) => {
      const button = document.createElement('button');
      button.className = 'add';
      button.textContent = `${ingredient.name}`;
      button.addEventListener('click', () => onClickHandler(ingredient));
      container.appendChild(button);
    });
  };

  const updateBurgerPrice = () => {
    const totalPrice = selectedIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
    document.getElementById('burgerPrice').textContent = `$${totalPrice.toFixed(2)}`;
  };

  const handleAddIngredient = (ingredient) => {
    selectedIngredients.push(ingredient);
    renderIngredients('selectedIngredients', selectedIngredients, handleRemoveIngredient);
    updateBurgerPrice();
  };

  const handleRemoveIngredient = (ingredient) => {
    const index = selectedIngredients.indexOf(ingredient);
    if (index > -1) {
      selectedIngredients.splice(index, 1);
    }
    renderIngredients('selectedIngredients', selectedIngredients, handleRemoveIngredient);
    updateBurgerPrice();
  };

  addIngredients('availableIngredients', availableIngredients, handleAddIngredient);
  updateBurgerPrice();
});

