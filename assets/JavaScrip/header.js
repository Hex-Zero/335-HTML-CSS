function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

document.getElementById("max-header").innerHTML = loadPage(
  "../Components/header.html"
);

const activeLinkName =
  ".max-" +
  window.location.pathname
    .replace(/^.*[\\\/]/, "")
    .split(".")
    .slice(0, -1)
    .join(".") +
  "-link";

$(activeLinkName).addClass("max-nav-active");
