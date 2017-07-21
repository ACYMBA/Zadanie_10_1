var span = $("span");
    span.each(function(index, element) {
     if(index % 2 == 0) {
    $(element).css('color', 'red');
  };
});

var paragraphs = $ ('p');
  paragraphs.each(function(index , element){

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)
  });
$("button").click(function(){
  alert($(this).attr("data-tmp"));
});



/*
$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0)
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});

var paragraphs = $("p").css("color", "red");
console.log(paragraphs[0]);

console.log(paragraphs.eq(0));


$(function(){
  
  $("ul").append("<li>New element</li>")
  
  var firstItem = $('nav').find('li').first();
 
  console.log(firstItem.text());
  
  firstItem.css("color", "red")
 
 
});
*/