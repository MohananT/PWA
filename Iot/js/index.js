var url = `https://lit-mountain-90611.herokuapp.com/api/status`;


async function _getDBContents() {
    let items = await fetch(url);
    let streamedContent = await items.json();
    console.log('Items', streamedContent);
}

