
var siteName = document.getElementById("siteTitle");
var siteUrl = document.getElementById("siteUrl");
var siteContainer = [];







if (localStorage.getItem("siteBookmark") !== null) {
    siteContainer = JSON.parse(localStorage.getItem("siteBookmark"));

    display();
}




function addsite() {
    var siteBookmark = {
        name: siteName.value,
        url: siteUrl.value

    }

    siteContainer.push(siteBookmark);

    clearForm();
    display();
    localStorage.setItem("siteBookmark", JSON.stringify(siteContainer));


}





function clearForm() {

    siteName.value = null;
    siteUrl.value = null;

}






function display() {
    var cartoona = '';
    for (var i = 1; i < siteContainer.length; i++) {
        cartoona += `<tr >
        <th scope="row">${i}</th>
        
        <td>${siteContainer[i].name}</td>
        <td><button type="button" class="btn btn-outline-danger " onclick="viewUrl ( '${siteContainer[i].url}')"><i class="fa-solid fa-eye me-2"></i>View</button></td>
        <td><button type="button" class="btn btn-outline-danger " onclick="deleteSite ( ${i})"><i class="fa-solid fa-trash-can me-2"></i>Delete</button>
        </td>
        
        
      </tr>`
    }

    document.getElementById("content").innerHTML = cartoona;

}






function deleteSite(deletedIndex) {

    siteContainer.splice(deletedIndex, 1);
    localStorage.setItem("siteBookmark", JSON.stringify(siteContainer));
    display();

}






function viewUrl(url) {

    window.open(url, '_blank');

}