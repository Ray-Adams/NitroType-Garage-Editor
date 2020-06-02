(async function(){
  var garage_sections = prompt('Enter the number of garage sections you would like to generate (NOTE: There are 30 individual garage slots per section):');

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
   if (parts.length == 2) return parts.pop().split(";").shift();
  };

  var uhash = getCookie('ntuserrem');
  var encoded_uhash = encodeURI(uhash);

  var body_content = "";
  var i;
  for (i = 0; i < garage_sections*30; i++) {
    body_content += "garage%5B" + i + "%5D=&";
  };

  body_content += "uhash=" + encoded_uhash;

  await fetch("https://www.nitrotype.com/api/cars-arrange", {
    "credentials": "include",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.5",
      "Prefer": "safe",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "referrer": "https://www.nitrotype.com/garage",
    "body": body_content,
    "method": "POST",
    "mode": "cors"
  });
  
  alert("Please logout and log back in to see changes.");
}());
