
function onSubmit() {

  let request = new XMLHttpRequest();

  request.open('GET', 'https://data.police.uk/api/leicestershire/NC04/boundary' true);

  request.onload = function () {
    let data = JSON.parse(this.response);


  if (request.status >= 200 && request.status < 400) {
    console.log (data);
  });
} else {
  console.log ('error');
}
  }

  request.send();


  }
