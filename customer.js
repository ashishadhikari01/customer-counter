let count = 0
function increment() {
    let showEl = document.getElementsByClassName("show")[0]
   count += 1
    // Using [0] to access the first element with the class "show"
    showEl.innerText= count
}

function save() {
    let entriesEl = document.querySelector('.entries');
    countstr=count+ "-"
    entriesEl.innerText=entriesEl.innerText+countstr
    let showEl=document.querySelector(".show")
    showEl.innerText=0
    count=0
   
    // entriesEl.innerText += count + '-';

}
    //entriesEl.innerText means keep the things as it is whatever already there and +(concate) the new things from countstr.

    // entriesEl.innerText means whatever is written on the paper keep it there and add new thingsfrom where it left.


