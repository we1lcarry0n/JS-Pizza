$(document).ready(function(){


    $("#login").click(function () {
        var loginID = prompt("Введiть ваш персональний ID", "");
        if (loginID != null) {
            $(".userID").css('visibility', 'visible').text("Ви увійшли як : " + loginID);
            $(this).css('visibility', 'hidden');
        }
    });

    $(".plus").click(function(){
        alert("fuck you");
        var price = Number($(this).parent().find(".rprice").text());
        var i = $(this).parent().find(".inp").val();
        i++;
        $(this).parent().find(".inp").val(i);
        var prev = Number($("#sumPrice").text());
        prev+=price;
        $("#sumPrice").text(prev);
    })

    $(".minus").click(function(){
        var i = $(this).parent().find(".inp").val();
        if(i==1)
            alert("Ви не можете зменшити кількість до нуля");
        else{
            var price = Number($(this).parent().find(".rprice").text());
            i--;
            $(this).parent().find(".inp").val(i);
            var prev = Number($("#sumPrice").text());
            prev-=price;
            $("#sumPrice").text(prev);
        }
    })

    $(".smallButton").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".smallPrice").text());
        name += "(Мала)";
        var ifExists = $(".md-2:contains("+ name +")");
        if(ifExists!=false){
            var i = $(".withSmth:contains("+ name +")").find(".inp").val();
            i++;
            $(".withSmth:contains("+ name +")").find(".inp").val(i);
            var prev = Number($("#sumPrice").text());
            prev += price;
            $("#sumPrice").text(prev);
        }
        else {
            var size = Number($(this).parent().parent().find(".smallSize").text());
            var weight = Number($(this).parent().parent().find(".smallWeight").text());
            var price = Number($(this).parent().parent().find(".smallPrice").text());
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(name);
            $(cloned).find(".rsize").text(size);
            $(cloned).find(".rweight").text(weight);
            $(cloned).find(".rprice").text(price);
            $(cloned).appendTo(".md-2");
            var prev = Number($("#sumPrice").text());
            prev += price;
            $("#sumPrice").text(prev);
        }
    })

    $(".largeButton").click(function(){
        var name = $(this).parent().parent().find(".name").text();
        var price = Number($(this).parent().parent().find(".largePrice").text());
        name+="(Велика)";
        var ifExists = $("md-2").is(".withSmth:contains("+ name +")");
        if(ifExists!=false){
            var i = $(".withSmth:contains("+ name +")").find(".inp").val();
            i++;
            $(".withSmth:contains("+ name +")").find(".inp").val(i);
            var prev = Number($("#sumPrice").text());
            prev += price;
            $("#sumPrice").text(prev);
        }
        else {
            var size1 = Number($(this).parent().parent().find(".largeSize").text());
            var weight1 = Number($(this).parent().parent().find(".largeWeight").text());
            var price = Number($(this).parent().parent().find(".largePrice").text());
            var cloned = $("#toBeCloned").clone(true).css('visibility', 'visible');
            $(cloned).css('position', 'relative');
            $(cloned).find(".rname").text(name);
            $(cloned).find(".rsize").text(size1);
            $(cloned).find(".rweight").text(weight1);
            $(cloned).find(".rprice").text(price);
            $(cloned).appendTo(".md-2");
            var prev = Number($("#sumPrice").text());
            prev += price;
            $("#sumPrice").text(prev);
        }
    })

    $(".remove").click(function(){
        var amount = $(this).parent().find(".inp").val();
        var price = Number($(this).parent().find(".rprice").text());
        var res = amount*price;
        var prev = Number($("#sumPrice").text());
        prev-=res;
        $(this).parent().remove();
        $("#sumPrice").text(prev);
    })

})

