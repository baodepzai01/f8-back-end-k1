let serverUrl = "https://api.shrtco.de/v2/";

let linkShort = async function (url) {
  let response = await fetch(serverUrl + "shorten?url=" + url);
  let data = await response.json();
  if (data.ok) {
    console.log("Đường dẫn sau khi rút gọn: " + data.result.short_link);
  }
  return data.error;
};
linkShort("https://fullstack.edu.vn/");
