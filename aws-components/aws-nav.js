class AWSNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow( { mode: "open" } );
    this.topNav;
    this.mainNav;
    this.shadowRoot.innerHTML = /*html*/`
      <style>
        

        #top {
          display: none;
          align-items: center;
          height: 42px;
          background-color: var(--top-nav-background-color);
          padding: var(--nav-padding);
        }

        #main {
          display: flex;
          align-items: center;
          height: 56px;
          background-color: var(--main-nav-background-color);
          padding: var(--nav-padding);
        }
      </style>
      <nav>
        <div id="top">
          <slot name="top-nav-icon"></slot>
          <slot name="top-nav-items"></slot>
        </div>
        <div id="main">
          <slot name="main-nav-icon"></slot>
          <slot name="main-nav-items"></slot>
        </div>
      </nav>
    `;
  }

  connectedCallback() {
    this.topNav = this.shadowRoot.querySelector('#top');
    this.mainNav = this.shadowRoot.querySelector('#main');
    
    this.checkTopNav();
    this.checkSpaceBetween();

  }

  checkTopNav() {
    if (this.hasAttribute('top-nav')) {
      this.topNav.style.display = 'flex'
    }
  }

  checkSpaceBetween() {
    if (this.hasAttribute('space-between-top')) {
      this.topNav.style.justifyContent = 'space-between';
    }
    if (this.hasAttribute('space-between-main')) {
      this.mainNav.style.justifyContent = 'space-between';
    }
    if (this.hasAttribute('space-between')) {
      this.topNav.style.justifyContent = 'space-between';
      this.mainNav.style.justifyContent = 'space-between';
    }
  }

}

customElements.define('aws-nav', AWSNav);