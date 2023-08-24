# il-footer

The footer component implements the standard campus footer. It contains information about the website and its organization, as well as a standard set of links to campus resources.

## Basic usage

```html
<il-footer>
  
  <h2>College of Examples</h2>
  
  <div slot="contact">
    <div>600 W. Wright St.</div>
    <div>Champaign, IL 61820</div>
    <div>217 555-5555</div>
    <div><a href="mailto:mail@example.com">mail@example.com</a></div>
  </div>
  
  <il-nav slot="social">
    <ul>
      <li><a href="https://facebook.com/">Facebook</a></li>
      <li><a href="https://youtube.com/">YouTube</a></li>
    </ul>
  </il-nav>
  
  
  
</il-footer>
```

## Content slots

