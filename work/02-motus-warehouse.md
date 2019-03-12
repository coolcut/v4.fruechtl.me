---
title: Motus Warehouse
tags: projectFeature
company: REICHHART digital logistics
platform: Web
projectDuration: 2016 - 2018
role: Concepts, Design, Fontend Development and User Testing
previewBackgroundcolor: "#F1F1F3"
previewImage: work-item-motus-warehouse.png
heroImage: work-item-motus-warehouse.png
---

<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Overview</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>In the beginning of 2016, my team and I started thinking about one essential addition to the overall motus product family, motus warehouse. Motus itself is an industry and logistics software platform with a focus on fast, safe and more transparent logistic processes. The warehouse product was one of the critical building blocks towards the company goal of building more intuitive solutions for the entire logistics industry.</p>
        <p>The motus web application is primarily focused on managing different kinds of master records while maintaining the entire logistics process itself. <mark>To meet the needs of our users and the market, we needed to come up with a solution that can work on as many devices and operating systems as possible, while being flexible, user-friendly and accessible in many different scenarios.</mark></p>
        <p>During the development process, we came across different obstacles we successfully mastered. From my point of view, one key factor that contributed to the success of this initial iteration of the motus warehouse product was our component-based approach during the design and development of our user interface. This approach allowed us to move quickly while also building an in-depth documentation and internal design system that grew slowly but steadily.</p>
        <p>Furthermore, we gathered a lot of positive feedback and success stories during our own testing rounds. This open and continuous feedback loop was a crucial part during our development phase.</p>
      </div>
    </div>
  </div>
</section>
<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <div class="f-mb10 f-mb12-m cs-section cs-section--half">
      <div class="cs-section-content">
        <h2 class="area-title">Challenge</h2>
        <p>The logistics software market tends to be slow, conservative and principally offers isolated software solutions. Our approach with motus was the complete opposite. We wanted to build a generic base with modular, extendable plugins while always keeping a user-focused approach.</p>
        <p>Furthermore, our users generally are under immense stress and have to work quickly to meet the high rates of a successful logistics company. Tasks, like editing master records, overlooking statistics, and composing reports, have to be done as effective as possible and we needed to optimize for these specific use-cases.</p>
      </div>
    </div>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <h2 class="area-title">Approach</h2>
        <p>To handle all these different challenges successfully and be as beneficial to our users as possible, we built different prototypes and kept a close communication line to our customers to get their feedback early on. These prototypes were mostly static web applications that incorporated different ideas about fast and error-prone master record management.</p>
        <p>Early on, we also thought about introducing a component-based development approach. At first, we wanted to free up resources and speed up our overall development process, but at a second thought, we also saw the benefit in documenting user-interfaces.</p>
      </div>
    </div>
  </div>
</section>
<section class="cs-area f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Implementation</h2>
    <div class="cs-section cs-section--screens">
      <p>In our product development team, I was mainly responsible for the design process as well as the implementation of these designs as a frontend developer - the frontend development part was only through the first year. During this time, we were heavily relying on <a href="https://patternlab.io">Patternlab</a> to support our component-based design approach on the frontend side.</p>
      <figure>
        <img data-srcset="/static/images/contact-empty-state.jpg?nf_resize=fit&w=400 400w,
                          /static/images/contact-empty-state.jpg?nf_resize=fit&w=600 600w,
                          /static/images/contact-empty-state.jpg?nf_resize=fit&w=800 800w,
                          /static/images/contact-empty-state.jpg?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/contact-empty-state.jpg?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
        <figcaption>An example of an empty state view. Throughout the whole application, we tried to always communicate clearly what the possible actions for a user are. This is very important, especially for a none tech-savvy user-base.</figcaption>
      </figure>
      <p>The primary focus while developing the motus warehouse web application has been master data creation and content management - this web application is the central hub for all logistics management overviews. Because of this focus, we tested a lot of different approaches for desktop computers as well as mobile devices with our customers. The provided feedback during these tests was precious during different decision-making processes and helped us mainly.</p>
      <figure class="rev">
        <img data-srcset="/static/images/area-profile.jpg?nf_resize=fit&w=400 400w,
                          /static/images/area-profile.jpg?nf_resize=fit&w=600 600w,
                          /static/images/area-profile.jpg?nf_resize=fit&w=800 800w,
                          /static/images/area-profile.jpg?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/area-profile.jpg?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
        <figcaption>The area profile page presents all relevant data that corresponds to this selected area. It gives the user insights about boxes and their specific states.</figcaption>
      </figure>
      <h3>Playing Lego with the UI</h3>
      <p><mark>Visually, motus warehouse is very component-based and firmly integrates the metaphor of card-based design. Every component is made out of a card and is structured unambiguously.</mark> Nearly everything in this application is subtle and unintrusive - bright colors are very rare. The main reason behind that is the overall aim for a modest and supportive software that focuses on getting the job done.</p>
      <figure>
        <img data-srcset="/static/images/add-new-area-error.jpg?nf_resize=fit&w=400 400w,
                          /static/images/add-new-area-error.jpg?nf_resize=fit&w=600 600w,
                          /static/images/add-new-area-error.jpg?nf_resize=fit&w=800 800w,
                          /static/images/add-new-area-error.jpg?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/add-new-area-error.jpg?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
        <figcaption>A simple entering mask inside the motus application. For these screens, we wanted to minimize overhead and optimize for ease of use as well as excellent accessibility.</figcaption>
      </figure>
      <p>Furthermore, we decided early on that icons can make a difference in communicating with our users. Icons alone can't provide enough value on their own, but in combination with colors and labels, they can markedly enhance the overall experience and make different actions and components easier to understand. Therefore, we decided to build our icon library to have full control over the icon set and our style.</p>
      <figure>
        <img data-srcset="/static/images/module_icons.png?nf_resize=fit&w=400 400w,
                          /static/images/module_icons.png?nf_resize=fit&w=600 600w,
                          /static/images/module_icons.png?nf_resize=fit&w=800 800w,
                          /static/images/module_icons.png?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/module_icons.png?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
        <figcaption>Examples of some icons a talented colleague of mine, Nina König, did for our different modules within the warehouse product.</figcaption>
      </figure>
      <h3>Our own internal design system</h3>
      <p>As mentioned before, we wanted to improve our development output and overall documentation of how we build motus as a product. This thinking brought us to the idea of our own internal design system. I led the development of our own design system and contributed closely together with our product and development team.</p>
      <p><mark>As a company, we thought way beyond just components and more about values, principles and feedback methods that all would be part of this system. The broad and overall thinking about processes, feedback and overall alignment towards the company goals was very beneficial to us during this time.</mark></p>
      <p>On the component side of things, we were heavily invested in <a href="https://www.sketchapp.com">Sketch</a> libraries together with the power of <a href="https://www.goabstract.com">Abstract</a>. With this combination, we've built our new components in Sketch first and afterwards transformed them into code with the support of <a href="https://patternlab.io">Patternlab</a>.</p>    </div>
  </div>
</section>
<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">What I’ve Learned</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>Today, motus is a small logistics solution that is going to grow over the following months and years. The main takeaways for me during my time there were the following:</p>
        <h4>Component-based design  👍</h4>
        <p>A component-based approach while designing and developing user interfaces is the right way to go. It benefits both sides, design, and development, and is also a crucial part when it comes to design systems.</p>
        <h4>Own assumptions 🕵️‍♂️</h4>
        <p>Question your assumptions with real customers as early and often as you can. Your initial assumptions will mostly be wrong. Listen to users, their human problems and observe their day-to-day work and find solutions that benefit them.</p>
        <h4>Perfection in a early stage  👂+ 🚢+👂</h4>
        <p>Don't be overly precious and detail-oriented when it comes to shipping in the early stages of your product. Listen, develop, ship and listen again.</p>
        <h4>Design systems  🥰</h4>
        <p>It doesn't matter how big your company is, a design system has the potential to benefit every company. A design system is also much more than just a component library, just more a toolbox with different aspects of working together in a faster and more structured way. But don't overthink it too much, when you are small - it can be a rabbit hole if you are not careful and intentional in the construction of such a system.</p>
      </div>
    </div>
  </div>
</section>
