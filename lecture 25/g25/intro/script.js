// const lis = document.querySelectorAll("li");

// for(li of lis)
// li.style.color="red"

// $("li").css("color","red")

// addClass(), removeClass(),toggleClass()
// classList.add(), classList.remove(), ...

// first(), last();

// $("li").first().css("color","red")
// $("li").last().css("color","red")

// creating element
// const flash = $("<li>Flash</li>")
// flash.text("flash");
// $("ul").append(flash)

// console.log($("input").attr("type"))
// console.log($("input").attr("type","radio"))


// ------todo using jquery-------------

$("input").on("keydown",function(event)
{
   let key = event.key;
   if(key=="Enter")
   {
    $("ul").append($(`<li>${event.target.value}</li>`))
    event.target.value="";
   }
   $("li").on("click",function(event)
   {
       event.target.remove();
   })
})
