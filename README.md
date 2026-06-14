# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Sophia Munoz

**Email**: [mailto:munozsa@mail.uc.edu](munozsa@mail.uc.edu)

![Sophia's headshot](public/images/content/pfp.jpg)

# Individual Project 1 - Professional Profile Website and API Integration on github.io Cloud Service

## The Project's Overview

For Individual Project 1 there were three tasks. Task 1 has two parts. In Part `a`, I create and deployed a personal website using GitHub Pages, as in the GitHub Cloud. This website includes information about me, including background. In Part `b`, I created a link to a new HTML page \(`waph.html`) with the course overview and current projects.

Task 2 has two parts. In Part `a` I used React, Bootstrap, and Vite. I used an existing template to guide me in the implementation of my website. In Part `b` I integrated the google analytics page tracker into my `index.html` file to track user patterns.

Task 3 has three parts. In Part `a` I used jQuery and React to implement JavaScript code. This included a digital clock, analog clock, show/hide email function, and fact generator. In Part `b` I integrated two public Web APIs: jokeAPI \(every minute) and Weatherbit.io. In Part `c` I implemented JavaScript cookies to track users and welcome them with a notification.

Outcomes I learned from this project were the implentations of third-party APIs \(JokeAPI, Weatherbit.io, Useless Facts API) in React. I also made sure to keep security in mind by using env variables for API keys. I also learned about managing rate limits \(especially for Weatherbit.io). I also learned how to add new components to integrate my functions into the webpage.

Portfolio Website:[https://munozsophia.github.io](https://munozsophia.github.io)

Individual Project 1 Repository: [https://github.com/munozsophia/munozsophia.github.io](https://github.com/munozsophia/munozsophia.github.io)

### Task 1. General Requirements

#### a. Personal Website Deployment

I created my website by using a React-Bootstrap template. The About Me section includes my name and my background.

![About Me Section](public/images/content/project-1-homepage.png)
*About Me Section*

![Experience Section](public/images/content/project-1-experience.png)
*Experience Section*

#### b. WAPH HTML Page

I created another HTML page \(`waph.html`), which is an overview of the `Web Application Programming and Hacking` course. This page also covers current labs and hackathons in the course.

![WAPH Course Link in Portfolio](public/images/content/project-1-portfolio-waph-link.png)
*WAPH Course Link in Portfolio*

![WAPH Course Page](public/images/content/project-1-portfolio-waph-page.png)
*WAPH Course Page*

### Task 2. Non-Technical Requirements

#### a. Open-Source CSS Framework (Bootstrap)

As for the implementation of the template, the website is built using a React template. This template uses Bootstrap 5 for the layout and component styling. This framework was a great guide to implmenting my portfolio as professional and informative.

#### b. Page Tracker (Google Analytics)

I decided to integrate the page tracker using Google Analytics. The documentation had me paste the code below into the `index.html` file. Since Google Analytics doesn't provide a way to implement images withing a website I shared my Realtime Dashboard from Google Analytics of my website visits.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QMX396Z1QJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QMX396Z1QJ');
</script>
```

![Google Analytics Realtime Dashboard](public/images/content/project-1-google-analytics.png)
*Google Analytics Realtime Dashboard*

### Task 3. Technical Requirements

#### a. Basic JavaScript Code (jQuery and React)

##### i. Digital Clock

##### ii. Analog Clock

##### iii. showHide Email

##### iv. Random Fact Generator

#### b. Public Web API Integration

##### i. JokeAPI Integration

##### ii. Weatherbit API Integration

#### c. JavaScript Cookies