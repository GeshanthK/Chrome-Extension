var select = document.querySelector('#years');
var date = new Date();
var year = date.getFullYear();
select.options.add(new Option(year));
for (i=0; i < 10; i++) {
    select.options.add(new Option(year+i));
}
document.body.style.minHeight = '500px';
document.body.style.minWidth = "500px";