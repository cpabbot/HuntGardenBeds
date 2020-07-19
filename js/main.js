(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= -175) {
          element.classList.add('fade-in');
          element.classList.remove('hidden');
          // console.log(i + ": " + positionFromTop + " - " + windowHeight);
        }
      }
      
      if(window.scrollY > 0) {
        document.querySelectorAll('[shrink-on-scroll]')[0].classList.remove('padded');
      }
      else {
        document.querySelectorAll('[shrink-on-scroll]')[0].classList.add('padded');
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
  })();

function expandContentBelow(linkElement) {
  const content = linkElement.nextElementSibling;
  // content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  if(content.style.maxHeight) {
    content.style.maxHeight = null;
    linkElement.innerHTML = "See Options and Pricing";
  }
  else {
    content.style.maxHeight = content.scrollHeight + "px";
    linkElement.innerHTML = "Hide Options and Pricing";
  }
}
