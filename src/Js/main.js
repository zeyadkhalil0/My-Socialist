fetch("./json/socialist.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.social_platforms); 
    displaySocials(data.social_platforms); 
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

function displaySocials(dataArray) {
  const container = document.getElementById("Social-Container");

  dataArray.forEach(platform => {
    const card = document.createElement('div');
    card.className = "p-4 m-2 bg-green-300/20 rounded-lg shadow flex items-center space-x-4";

    card.innerHTML = `
      <img src="${platform.icon}" class="w-8 h-8" alt="${platform.name}" />
      <div>
        <h2 class="font-bold text-lg">${platform.name}</h2>
        <p class="text-gray-500">${platform.description}</p>
        
        </div>
    `;

    container.appendChild(card);
  });
}
