

class SimpleWC extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
     let div = document.createElement('div');
     div.textContent = 'Simple Web Component';
     shadowRoot.append(div);
    
  }
}

customElements.define('simple-wc', SimpleWC);

