var loaderFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('new')
        output.style.display = 'block'
        output.style.backgroundImage = 'url(' + reader.result + ')'
    }
    reader.readAsDataURL(event.target.files[0])


}