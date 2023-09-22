function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-cfontent');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('show');
    }
  
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
  
    document.getElementById(tabName).classList.add('show');
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
  }
  