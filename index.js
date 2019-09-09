class MyElement extends HTMLElement {
	constructor(wix){
  	super()
    console.log(wix)
  }
  connectedCallback() {
    this.innerHTML = `
            <div>
                  <h1 class='title'>Web Component</h1>
                  <h2 style="margin-left: 23px">Getting Started:</h2>
                  <ul>
                    <li>Implement a Web component using the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">custom elements</a> standard.</li>
                    <li>In your code, Call <span class='code'>customElements.define(<i>element_name</i>, <i>web_component_class</i>);</span> 
                    - which is the standard way to register web components on the web.</li>
                    <li>Upload the web component code to a static file on the web and put the URL in the settings panel of the web component</li>
                    <li>Enter the <i>element_name</i> in the settings panel under tag name</li>
                    <li>Note: This component is available only for premium sites (without Wix Ads)</li>
                  </ul>
                </div>
                <style>
                * {
                font-family: sans-serif;
                  line-height: 30px
                }
              .code,i {
                  font-family: monospace;
                  background-color: #ececec;
                  padding: 3px;
                  color: black
              }
              .title {
                  background-color :lightblue;
                  padding: 10px
              }
            </style>
           `;
  }
}

customElements.define('custom-element', MyElement);
