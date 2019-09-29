// Resizes all embedded YouTube videos if browser is too narrow
let videos = document.querySelectorAll("iframe.youtube-video");

for (let i = 0; i < videos.length; i++) {
   let originalWidth = videos[i].width;
   let originalHeight = videos[i].height;

   if (videos[i].width > window.innerWidth) {
      videos[i].width = window.innerWidth;
      videos[i].height = scaleRectangle(originalHeight, originalWidth,window.innerWidth); 
   }
}

function scaleRectangle(originalX, originalZ, newX) {
   return newX * originalX / originalZ;
}