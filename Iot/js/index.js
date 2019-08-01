var url = `https://lit-mountain-90611.herokuapp.com/api/status`;

async function _getDBContents() {
  let items = await fetch(url);
  let streamedContent = await items.json();
  // console.log('Items', streamedContent);
  return streamedContent;
}

_getDBContents().then(res => {
  // console.log('Items', res);
  let items = res.Items;
  let selector = document.querySelector("#write");
  console.log("Items", items);
  console.log("selector", selector);

  items.forEach(item => {
    // let div = document.createElement('div');
    // div.
  });

});

$(document).ready(function() {
  $(".collapsible").collapsible();
});
