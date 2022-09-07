const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const membersMenu = document.querySelector('#members-page');
  const discographyMenu = document.querySelector('#discography-page');
  const extraMenu = document.querySelector('#songtierlist-page');

  let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600){
      homeMenu.classList.add('highlight');
      membersMenu.classList.remove('highlight');
      extraMenu.classList.remove('highlight');
      return;
    }
    else if(window.innerWidth > 960 && scrollPos < 1400){
      membersMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      discographyMenu.classList.remove('highlight');
      extraMenu.classList.remove('highlight');
      return;
    }
    else if(window.innerWidth > 960 && scrollPos < 2345){
      discographyMenu.classList.add('highlight');
      membersMenu.classList.remove('highlight');
      extraMenu.classList.remove('highlight');
      return;
    }
    else if(window.innerWidth > 960 && scrollPos > 2345){
      discographyMenu.classList.remove('highlight');
      membersMenu.classList.remove('highlight');
      extraMenu.classList.add('highlight');
      return;
    }

  if((elem && window.window.innerWidth > 960 && scrollPos < 600 || elem)){
    elem.classList.remove('highlight');
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);