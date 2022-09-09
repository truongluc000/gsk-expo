$(document).ready(function(){
  $("#subsearch1").click(function(){
    var keyword1=$('#inputsearch1').val();
    if(keyword1=="")
    {
        alert("Vui lòng nhập tên sản phẩm cần tìm");
    }else{
      var op="search";
      $.ajax({
          type: "POST",
          url: "/ajax.php",
          dataType:"json",
          data:{op:op,keyword:keyword1},
          success: function(data){
            if(data['success'] == 1){
              window.location.href = '/search='+data['keyword']+'.html';
            }else{
              var formatkey1 = keyword1.toLowerCase().replace(/[&\/\\#,+()$~%'":*?<>{}®™]/g, "");
              var formatkey1x1 = formatkey1.replace(/[ .]/g, "-");
              window.location.href = '/search='+formatkey1x1+'.html';
            }
          }
      });
    }
    return false;
   });
 });

function searchProductIndex(){ 
    var catid = $("#searchproindex").val();
    var key = $("#inputsearch1").val();
    var length = 1;
    var op="searchproindex";
    if(key.length >=1){
      $.ajax({
      type: "POST",
      url: "/ajax.php",
      data:{op:op,catid:catid,key:key},
      success: function(data){
        // $(".search-ajax ").removeClass('d-none');
        $(".search-ajax").parents(".header__search__input").find(".header__search__suggest").show();
        $(".search-ajax").html(data);
      }
      });
    } else {
      $(".search-ajax").parents(".header__search__input").find(".header__search__suggest").hide();
    }
}
function LoadMoreGallery(ob){
  let num = $("#current-num").val();
  let op ="loadgallery";
  $.ajax({
    type: "POST",
    url: "/ajax.php",
    dataType:"json",
    data:{op,num},
    success: function(data){
      if(data['success'] == 1){
        if(data['data']){
          html =``;
          $.each(data['data'], function(key,data1){
            var srcToImg = "/upload/files/gallery/"+data1;
            html +=`<a href="${srcToImg}" class="list-pro__block" data-lity>
            <div class="list-pro__image" style="background-image: url(${srcToImg});"></div></a>
            `;
          });
          $('#load-gallery').append(html);
          if(data['max']){
            $("#current-num").val(data['max']);
          }
          if(data['numLeftx'] && data['numLeftx'] > 0){
            $("#num-left").text(data['numLeftx']);
          }else{
            $("#btn-load-gallery").hide();
          }
          // if(data['numLeftx'] && data['numLeftx'] > 0){
          // }
        }
      }
    }
  });
}