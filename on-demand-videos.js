// JavaScript Document
$(document).ready(function($) {

  var videos = {
    "TAB1": [
      {
        title: "From My Window",
        description: "",
        authors: [""],
        link: "https://vimeo.com/518404753",
        image: ""
      },
      {
        title:
          "What's your Everest",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=Qt_9dBAj9Xw",
      },
      {
        title: "Kristian's Summit Journey",
        description:
          "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=BnYmgLIrkdo",
      },
      {
        title:
          "Barbara's Summit Journey",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=AYQQAmw0TmA",
      },
      {
        title: "REN: A story about what we overcome",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=DdcB-sipM2k",
      },
      {
        title: "No Barriers Nugget: Erik Weihenmayer | Illuminate What We Have Inside",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=y5XymVwucak",
      },
        {
        title: "No Barriers Nugget: J.R. Martinez | How to Be Positive in the Face of Adversity",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=k1vW948yzkc",
      },
      {
        title: "No Barriers Nugget: Mandy Harvey | Small Painful Steps Make All the Difference",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=9-i2WHqKA6o",
        lang: 'en',
      },
    ],
    "TAB2": [
      {
        title:
          "Nugget de No Barriers: Erik Weihenmayer | Iluminemos lo que llevamos dentro",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=ZyrWJ2gN_Dw",
      },
        {
        title: "Nugget de No Barriers: J.R. Martinez | CÃ³mo ser positivo ante la adversidad",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=gy8dmrNWVAQ",
      },
       {
        title: "Nugget de No Barriers: Mandy Harvey | Los pequeÃ±os pasos mÃ¡s dolorosos marcan la diferencia",
        description: "",
        authors: [""],
        link: "https://www.youtube.com/watch?v=2B2PvFlEHNg",
      },
    ],
    "TAB3": [
     
    ],
    "TAB4": [
      
    ],
  };

  var video_id = "";
  const vimeoPrefix = "https://vimeo.com/";
  const esFlagUrl = "https://www.nobarriers.live/wp-content/uploads/spanishflag.png";
  for (var tabName in videos) {
    for (var i = 0; i < videos[tabName].length; ++i) {
      if (videos[tabName][i].link.includes("youtube")) {
        video_id = videos[tabName][i].link.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1 ){
          video_id = video_id.substring(0, ampersandPosition);
        }
      } else {
        var regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
        var match = videos[tabName][i].link.match(regExp);
        if (match){
            video_id = match[2]; 
        }
      }
      const template = $('.templates .video-link').clone();
      const video = videos[tabName][i];
      template.attr('video-url', video.link);
      template.find('.title').text(video.title);
      template.find('.description').text(video.description);
      template.find('.authors').text(video.authors.join(', '));
      if (videos[tabName][i].link.includes("youtube")) {
        template.find('.thumbnail').attr('src', 'https://img.youtube.com/vi/'+ video_id +'/mqdefault.jpg');
      } else {
        template.find('.thumbnail').attr('src', 'https://i.vimeocdn.com/video/' + video_id);
      }
      $('#' + tabName.toLowerCase() + ' .videos-grid').append(template);
    }
  }

  //-- On Demand Videos
  $(".videos-grid .video-link").each(function () {
    $(this).videoPopup({
      autoplay: 1,
      width: "80%",
    });
  });

});