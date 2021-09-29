var loaderFile = function (event) {
    var reader = new FileReader();

    reader.onload = function () {
        
        if ($(window).width() < 501) {
            var output = document.getElementById('new2')
        } else {
            var output = document.getElementById('new3')
        }
        output.style.display = 'block'
        output.style.backgroundImage = 'url(' + reader.result + ')'
    }
    reader.readAsDataURL(event.target.files[0])


}