document.write('<div class="vege">');
const data = [{
        url: "./images/xg.png",
        title: '西瓜',
      },
      {
        url: "./images/mht.png",
        title: '猕猴桃',
      },
      {
        url: "./images/yt.png",
        title: '樱桃',
      },
      {
        url: "./images/yt.png",
        title: '樱桃',
      },
      {
        url: "./images/yt.png",
        title: '樱桃',
      },
      {
        url: "./images/yt.png",
        title: '樱桃',
      },
    ]
// const random = parseInt(Math.random() * data.length);
var html='';
for(var i = 0; i<data.length; i++){
  html += '<li class="l1">' + 
                        '<img src="' + list[i].src +'" alt="">' + 
                        '<span>'+
                             data[i].title + 
                        '</span>' + 
                    '<li>'
}

document.write(html);
 
document.write('</div>');