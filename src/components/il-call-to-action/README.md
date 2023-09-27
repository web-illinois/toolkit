# `il-call-to-action`

The **call to action** component is used to prompt visitors to perform a single action, such as subscribing to a newsletter or beginning an application. It should contain a link or group of links and may include an icon.

## Basic Use

```html
<il-call-to-action>
  <il-icon slot="icon">faq</il-icon>
  <il-content>
    <h3>Get started today!</h3>
    <p>Enroll in a class after you are admitted as a non-degree student.</p>
    <ul class="il-buttons">
      <li><a href="#">Registration overview</a></li>
      <li><a href="#">Accessing email/Compass</a></li>
    </ul>
  </il-content>
</il-call-to-action>
``````

The icon slot is optional. 

Note that the information in the `il-call-to-action` component is not styled, and will usually be in an `il-content` component. 

## Styling

The `il-call-to-action` component respects themes (il-theme-blue, il-theme-orange, etc.).

You can use the class il-align-center to center the text. The icon will always be centered. 

You can use this along with the `il-section` component to limit the margins of the component.