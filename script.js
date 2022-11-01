fetch("./manifest.json")
  .then((response) => response.json())
  .then((json) => console.log(json.name));

$(document).ready(function () {
  $(".btn").click(function () {
    alert("Value:" + $("#test").val());
  });
});
