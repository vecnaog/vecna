function previewEmbed() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;
  const color = document.getElementById("color").value;

  document.getElementById("preview").innerHTML = `
    <div style="
      background:#2f3136;
      border-left:5px solid ${color};
      padding:15px;
      border-radius:8px;
      margin-top:15px;
    ">
      <h3>${title || "Embed Title"}</h3>
      <p>${description || "Embed Description"}</p>
      ${image ? `<img src="${image}" style="width:100%;border-radius:8px;margin-top:10px;">` : ""}
    </div>
  `;
}

function sendEmbed() {
  alert("Backend abhi connect nahi hua hai.\nNext step me Discord bot se real embed send karenge.");
}
