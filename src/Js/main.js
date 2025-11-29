fetch("./json/socialist.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.social_platforms);
    displaySocials(data.social_platforms);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

function displaySocials(dataArray) {
  const container = document.getElementById("Social-Container");

  dataArray.forEach((platform) => {
    const card = document.createElement("div");
    card.className =
      "p-4 m-2 bg-green-300/20 rounded-lg shadow flex items-center space-x-4 hover:scale-110 transition-transform duration-300";

    card.innerHTML = `
      <img src="${platform.icon}" class="w-8 h-8" alt="${platform.name}" />
      <div>
        <h2 class="font-bold text-lg">${platform.name}</h2>
        <p class="text-gray-500">${platform.description}</p>
         <a 
          href="${platform.link}" 
          target="_blank"
          class="mt-2 inline-block bg-green-300/50 hover:bg-blue-700 text-gray-900 text-sm px-4 py-2 rounded-lg transition">
          ${platform.button}
        </a>
        </div>
    `;

    container.appendChild(card);
  });
}


// Contact Btn

let ContactBtn = document.getElementById("Contact-btn")
ContactBtn.onclick = ()=>{
  location.href = "mailto:codezee.contact@gmail.com?subject=Hello%20CodeZee&body=I%20want%20to%20contact%20you";
}