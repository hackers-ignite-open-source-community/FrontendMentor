# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
This is a basic news homepage which has navigation for other pages on the site. There is a main section for a feature story, a section for "new" content, and a section for articles.

### The challenge

Users are able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
<br>

### Screenshots
#### Mobile View
<img src="https://github.com/famanakis/frontend-mentor/blob/main/news-homepage/src/assets/images/mobile.png" width="25%"><br>
#### Mobile Navigation Menu
<img src="https://github.com/famanakis/frontend-mentor/blob/main/news-homepage/src/assets/images/mobile-nav.png" width="25%"><br>

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-news-home-page-using-css-VQ7p0ULwsO](https://www.frontendmentor.io/solutions/responsive-news-home-page-using-css-VQ7p0ULwsO)
- Live Site URL: [https://9tfdev-fem-news-homepage.netlify.app/](https://9tfdev-fem-news-homepage.netlify.app/)

## My process
Approaching this page from a CSS Flexbox perspective, I found that designing for the mobile view was relatively straightforward due to the content being mostly in a column orientation. However, when working on the media query for the desktop view, I needed to add several div elements to the HTML to manipulate the CSS in the correct row/column directions, particularly in the Hero section of the webpage. With the correct orientation applied to the page in different views, I fine-tuned the padding and margins of the elements using REM and EM units.

After completing the visual aspect of the page, I proceeded to work on its functionality using JavaScript. This involved implementing user control over the navigation hamburger and close buttons that operate the mobile-navigation menu. By clicking on the hamburger, users can open the mobile-navigation menu, and they can also close it with the click of a close button. When users switch from mobile to desktop view, the hamburger image is replaced by a desktop version of the navigation menu.

By making the menu appear different in mobile versus desktop design, the user experience is enhanced and more user-friendly. Overall, I ensured that the page design and functionality were optimized for both mobile and desktop views.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Creating a responsive mobile-navigation menu can be a complex task. In this web page, achieving the correct positioning of the mobile-navigation menu was crucial for the success of the project. I am proud of the code that I developed to position the mobile navigation menu on the right side of the page and ensure it remains fixed even if the user scrolls down.

Here is the code for styling the mobile navigation menu.
```css 
.nav-desktop {
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4em;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    min-height: 100vh;
    width: 65vw;
    background-color: var(--off-white);
    padding-left: 5%;
    padding-top: 38%;
}
```
In order to make the mobile-navigation menu show, I used the following JavaScript code for when the user either clicked the hamburger icon:

```JavaScript
    navMobile.addEventListener('click', ()=> {
        navDesktop.style.display = "flex"
    })
``` 

or clicked the close button icon:

```JavaScript
    closeMenu.addEventListener('click', () => {
        navDesktop.style.display = "none"
    })
```


### Continued development

Although I completed this project using CSS Flexbox, I now realize that using CSS Grid may have been a better option due to the many row and column changes required between the mobile and desktop versions. Going forward, I plan to revisit this design and implement CSS Grid to see how it compares to the Flexbox solution. By doing so, I can determine which approach requires less CSS and is more efficient in achieving the desired design.

## Author

- Website - [Farrah Mamanakis](https://github.com/famanakis)
- Frontend Mentor - [@famanakis](https://www.frontendmentor.io/profile/famanakis)
- Twitter - [@FMamanakis](https://twitter.com/FMamanakis)
- LinkedIn - [fmamanakis](https://www.linkedin.com/in/fmamanakis/)

