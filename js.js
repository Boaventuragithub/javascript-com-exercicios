function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

function getEmail(){
    window.location.replace("https://forms.gle/DvuiadZLR1qcv8338");
}

function getComentario(){
    window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSetFHkBoCAQ78JIpClgWWnzjbGRdSsG5viLSB_g85boJMZVhQ/viewform?usp=sf_link");
}
