// Website/src/scripts/recipes.js
document.getElementById('recipeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const title = event.target.title.value;
    const description = event.target.description.value;
    
    try {
      const response = await fetch('http://localhost:8080/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });
      if (response.ok) {
        alert('Recipe created successfully');
        event.target.reset();
      } else {
        alert('Failed to create recipe');
      }
    } catch (error) {
      alert(error.message);
    }
  });
  