# Home Investors  

Welcome to the README file for the code that powers the website of Home Investors. In this README, we'll explore my code structure and highlight the innovative techniques used to create a fully CSS-based navigation bar.  

## Innovative Navigation Bar

### CSS-Only Navigation

One of the standout features of this website is the navigation bar, which has been implemented entirely with CSS, without relying on JavaScript. This technique uses the newly added :has css selector to add functionality to a simple checkbox input.  

Here's how it works:  
 - **psuedo-classes** - I used psuedo-classes on a checkbox to make and style the hamburger menu
 - **:has** - I then use the :has selector to check if the checkbox is checked in order to animate the hamburger menu
 - **:has +** - Finally I added on the nav bar using the :has selector to make it slide out

While this is more of a proof-of-concept rather than a practical implementation, it really shows the power of css.  

*This project was already finished before I made the Github repository.  I have not used Github much in the past because I have always worked by myself. However, I will be adding projects in the future to display that I do in fact know how to properly use git.
