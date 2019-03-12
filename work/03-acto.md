---
title: Acto
company: Hackathon
platform: iOS
projectDuration: 28 hours
role: Concept, Design and Frontend (React Native)
previewBackgroundcolor: "#BFC1E3"
previewImage: acto-preview.png
heroImage: work-item-acto.png
---

<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Overview</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>I do a lot of work on the Web. Occasionally, I get the chance to work on iOS or Android apps, but this sadly is not the majority of my day-to-day work. Sometimes, events like hackathons can be a good way of tinkering with such technologies again.</p>
        <p>For me, Acto was such a project. Together, with two colleagues from work, I attended <a href="https://symbioticon.de/de/">Symbioticon 2018</a> in Frankfurt am Main. Our goal as a team was to develop an application that automates your bank account. Inspired by the <a href="https://support.apple.com/de-de/guide/shortcuts/welcome/ios">iOS Shortcuts</a> application, we wanted to trigger user-created actions based on activities that happen on your bank account.</p>
        <figure>
          <img alt="" src="https://fruechtl.me/media/pages/work/case-studies/acto/729991825-1549818935/action-screen.png">
        </figure>
        <p>For example, if my grandma sends me 50€ every other month, I could set up a trigger to look for this specific transaction and trigger a task that, e.g., sends a text message to my grandma thanking her. (Please don't try this at home – thank your grandma personally, seriously).</p>
        <p><mark>In theory, one action can have as many triggers, and tasks a user wants. This is the main beauty of this application. At first, it seems very limiting, but with the flexibility of chaining together as many things as a user wants, this ultimately becomes powerful.</mark></p>
        <h3>28 hours of work</h3>
        <p>We started the 28 hours of this hackathon completely from scratch, without any previous concepts in mind. As a group of three, we quickly sketched out possible ideas and came up with our goal as described above.</p>
        <p>After some initial thoughts and a rough idea of real potential use-cases, we started to focus on delivering a functional application for one of these particular use-cases.</p>
        <p>To speed up our frontend development for the iOS application, we chose <a href="https://facebook.github.io/react-native/">React Native</a> and <a href="https://expo.io">Expo</a> as our main frontend stack. This decision was hugely influenced by the short time we had. <mark>In hindsight, we probably shouldn't have chosen this frontend stack because of some React Native–specific problems we got stuck on after a promising start. These problems vanished all our hopes of saving time during the development phase.</mark></p>
        <figure class="cs-vscode">
          <img data-srcset="/static/images/vs-code.jpg?nf_resize=fit&w=400 400w,
                          /static/images/vs-code.jpg?nf_resize=fit&w=600 600w,
                          /static/images/vs-code.jpg?nf_resize=fit&w=800 800w,
                          /static/images/vs-code.jpg?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/vs-code.jpg?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
          <figcaption>Some React Native code from the final prototype.</figcaption>
        </figure>
        <h3>Assumption based design</h3>
        <p>One of my strengths is systematic thinking and looking at problems from different angles. This isn't possible in 28 hours. I needed to come up with a basic design idea that solved our stated problem scope as quickly as possible.</p>
        <p><mark>From my point of view, the most critical factors to the success of this application would be the overview of actions and the creation process of one specific action. With this in mind, I optimized the whole app for these two factors.</mark> To optimize for usability and speed, I also tried to be as close to the <a href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/">iOS HIG</a> as possible.</p>
        <figure>
          <img data-srcset="/static/images/sketch.png?nf_resize=fit&w=400 400w,
                          /static/images/sketch.png?nf_resize=fit&w=600 600w,
                          /static/images/sketch.png?nf_resize=fit&w=800 800w,
                          /static/images/sketch.png?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/sketch.png?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
          <figcaption>An early sketch I did on my iPad during the ideation phase at the hackathon.</figcaption>
        </figure>
        <p>All these decisions helped us in moving quickly towards this tight deadline. After some rough design ideas, I promptly moved more into the code and helped my teammates with the visual implementation for the necessary screens.</p>
        <h3>Personal takeaways</h3>
        <p>Despite our small problems with React Native, we managed to finish our first functional version in time and could proudly present a functional piece of software.</p>
        <p>We had a lot of fun, and once again I noticed that design and development could only perform at maximum capacity if both are in sync and connected as closely as possible. Furthermore, designing directly in code can be super beneficial in environments like this.</p>
      </div>
    </div>
  </div>
</section>
