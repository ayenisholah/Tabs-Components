
class TabLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
    this.link = link;
    
    // Get the custom data attribute on the Link
    // this.data;
    const tabItem = document.querySelector(`.tabs-item[data-tab='${link.dataset.link}']`)
    this.tabItem = new TabItem(tabItem)
    link.addEventListener('click', () => this.onLinkSelect())
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the select method on click

  };

  onLinkSelect() {
    this.tabItem.select()
  }
}

class TabItem {
  constructor(item) {
    // Assign this.element to the passed in element
    this.tabItem = item
    this.allLinkItem = document.querySelectorAll('tabs-item-description')
  }

  select() {

    allLinkItem.forEach(function(content){
      content.classList.remove('tabs-item-selected')
    })

    this.tabItem.classList.add('tabs-item-selected')
  }
}

const links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));

 