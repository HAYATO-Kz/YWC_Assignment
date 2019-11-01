async function getJson(url) {
  try {
    const response = await fetch(url);
    const json = response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

$(document).ready(async function() {
  let data = await getJson("https://panjs.com/ywc.json");
  console.log(data);
  data.navbarItems.forEach(element => {
    $("#navbarItem").append(
      `<li class="nav-item"><a class="nav-link prompt-font" href="${element.href}">${element.label}</a></li>`
    );
    $("#linkFooter").append(
      `<div class="col-sm-12 col-md-3 credit">
            <a href="${element.href}" class="prompt-font text-white " >${element.label}</a>
        </div>`
    );
  });
  $("#durationDate").append(`${data.duration}`);
  $("#detail").append(`${data.detail}`);
  $("#condition").append(`${data.condition}`);
});
