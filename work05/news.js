$(document).ready(function () {
function get(page) {
    axios.get('http://mock-api.com/oKmrwGzX.mock/newslist?page=' + page)
        .then(function (res) {
            console.log("res", res.data);
            var i;
            var item;
            j = i + 1;
          r = String(page) + String(j);
          console.log(r);
          strhtml += "<img src='' alt=''><a href='' target='_blank' class='selectarcpost'><div class='bt'></div><div class='item'> <span class='time'></span></div><p></p></a>"
          $('.container').html(strhtml);


        })
        .catch(function (e) {
            console.log('e', e);
        });
}
get(1);
$('#pagination li').click(function (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var page = Number($(this).text());
    get(page);
    $('#pagination li').removeClass('active');
    $(this).addClass('active');
});
});
