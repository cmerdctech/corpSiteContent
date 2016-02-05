$('body')
.prepend("<div style='margin: 0px 0px 8% 0px;padding:5px;border:1pt solid gray;/* distribute horizontally */ display: -webkit-flex; display: flex; -webkit-flex-direction: row; flex-direction: row; -webkit-justify-content: space-between; justify-content: space-between;'><a href='#ninjaIntro'>Ninja Intro</a>&nbsp;<a href='#planningNinja'>Planning Ninja</a>&nbsp;<a href='#currentTool'>Current Tool Perspective</a></div>")
.css({
padding:"0% 20%",
"font-family":"sans-serif"
});

$('a').css({
color:'green'
});



var tmp=$('head').append("<style>a:hover{background:#cff;}</style>");
