// $("#btn").on("click",function()
// {
//     $("div").animate({top:"50px"},3000)
//     $("div").animate({left:"50px"})
//     $("div").animate({top:"100px"})
//     $("div").animate({left:"100px"})

// })

// $("#stop").on("click",function(){
//     $("div").stop(true,true);

// })


$("#btn").click(function()
{
    $("div").fadeOut(3000);
    $("div").slideDown(3000);
})
