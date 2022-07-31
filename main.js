let root = document.getElementById("practices");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      let div_icon = document.createElement("div");
      let div_text = document.createElement("div");

      let icon = data[i].icon;
      let title = data[i].title;
      let message = data[i].message;

      div_icon.innerHTML = `<span>${icon}</span>`;
      div_icon.setAttribute("class", "icon");
      div_text.innerHTML = `<h1>${title}</h1><hr/><p>${message}</p>`;
      div_text.setAttribute("class", "text");

      li.appendChild(div_icon);
      li.appendChild(div_text);

      root.appendChild(li);
    }
  });
