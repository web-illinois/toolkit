# `il-call-to-action`

The **call to action** component is used to prompt visitors to perform a single action, such as subscribing to a newsletter or beginning an application. It should contain a link or group of links and may include an icon.

## Basic Use

```html
<il-call-to-action>
  <il-icon slot="icon">faq</il-icon>
  <h3>Get started today!</h3>
  <p>Enroll in a class after you are admitted as a non-degree student.</p>
  <ul class="il-buttons">
    <li><a href="#">Registration overview</a></li>
    <li><a href="#">Accessing email/Compass</a></li>
  </ul>
</il-call-to-action>
``````

The icon slot is optional. 

## Styling

You can use the `color` attribute to change the color of the component. Available options are blue (default), blue-gradient, orange, orange-gradient, gray, white.

```html
<il-call-to-action color='blue'>
   ...
</il-call-to-action>
``````

You can use the `align` attribute to change the alignment of the text to center. 

You can use this along with the `il-section` component to limit the margins of the component.