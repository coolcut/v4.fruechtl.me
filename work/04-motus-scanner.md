---
title: Motus Scanner
company: REICHHART digital logistics
platform: Android
projectDuration: 2016 - 2018
role: Concepts, Design and User Testing
previewBackgroundcolor: "#E5D2BB"
previewImage: work-item-motus-scanner.png
heroImage: work-item-motus-scanner.png
heroImageAlt: Example screen for the Motus Scanner project.
---

<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Overview</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>Motus is an industry and logistic software with a focus on fast, safe, and more transparent logistic processes. One critical area of motus is the warehouse product. In another case study, I've already talked about the development of the web interface for managing warehouse processes with motus warehouse - but there is more to this story.</p>
        <p>Like Yin and Yang, motus warehouse exists of two parts. <mark>The web application for managing processes and the mobile application for scanning, verifying, and moving handling units through a warehouse. With that in mind, the Android app is the key to a fast, safe, and reliable logistic process.</mark></p>
        <p>In close collaboration with our customers, we developed a robust application that guides a professional warehouse worker.</p>
      </div>
      <aside class="cs-section-sidebar">
        <div class="cs-section-sidebar--aside">
          <figure>
            <img alt="" src="https://fruechtl.me/media/pages/work/case-studies/motus-scanner/955385374-1549818937/single-screen.png"
            width="256">
          </figure>
        </div>
      </aside>
    </div>
  </div>
</section>
<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <div class="f-mb10 f-mb12-m cs-section cs-section--half">
      <div class="cs-section-content">
        <h2 class="area-title">Challenge</h2>
        <p>The Android application is the daily driver and most essential tool for any worker inside a warehouse. With this app, a worker can see their upcoming orders, execute a particular order, and scan handling units, plots, etc. In other words, the Android application guides the logistician during a workday and tries to minimize any potential error while verifying every step during these operations.</p>
        <p>In a stressful and time-focused industry, human errors are inescapable and mostly pretty expensive. We had to build an application that would guide all workers and help them to minimize any chance of making mistakes during a process. This app had to become not only a helpful waymarker but also a supporting companion.</p>
        <p>These challenging goals are even harder to accomplish when you are designing for a specific device with outdated specs. As a consequence of the logistics industry and their particular requirements, we couldn't choose any standard smartphone as a target device. We needed a specific and industry robust device running Android.</p>
      </div>
    </div>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <h2 class="area-title">Approach</h2>
        <p>At first, we built many different prototypes to test our various strategies and ideas. In close communication with stakeholders and experts in the logistics area, we sat down to review our thoughts and findings.</p>
        <p>On the visual side of things, we wanted to stay as close to the Android platform as possible. Firstly, we deeply studied the <a href="https://material.io/design/introduction/">Material Design</a> Specs. Together with our mobile developers, we extracted the conceptual and development benefits from using this excellent design language.</p>
        <p>Prototyping played another massive role in this project. We developed different kinds of "Click-Dummy" applications to test the flow throughout the application.</p>
      </div>
    </div>
  </div>
</section>
  <section class="cs-area f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Implementation</h2>
    <div class="cs-section cs-section--screens">
      <p>During the development phase, I was part of the product development team. My primary responsibilities were the conceptual and visual design as well as in-depth prototyping of user flows and some specific interactions.</p>
      <p>The main idea behind the Android application is the segmentation of specific processes. Every process, like "Goods Receiving" or "Goods Outwards," is its own entity and acts completely independently. <mark>Furthermore, each process has its own visual theme, which helps the worker in different situations like, for example, recognition. With that in mind, the worker knows that process "X" always has the blue theme and is alarmed when he accidentally opens the wrong process.</mark></p>
      <figure>
        <img data-srcset="/static/images/motus-scanner-auslagerung.png?nf_resize=fit&w=400 400w,
                          /static/images/motus-scanner-auslagerung.png?nf_resize=fit&w=600 600w,
                          /static/images/motus-scanner-auslagerung.png?nf_resize=fit&w=800 800w,
                          /static/images/motus-scanner-auslagerung.png?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/motus-scanner-auslagerung.png?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
      </figure>
      <p>Besides visual clues, the application supports different kinds of direction through audio and vibration techniques. With these various cognitive elements, we tried to make the Android app into a companion that helps the worker with very subtle but distinct notifications.</p>
      <p>Another big idea behind this application is the so-called "Cargo List." A cargo list is more or less an abstraction of a shopping basket and displays any scanned handing unit and the corresponding information and destination. In this setting, a worker can select any order or handling unit inside a cargo list for further transfer.</p>
      <figure>
        <img data-srcset="/static/images/motus-scanner-screens.png?nf_resize=fit&w=400 400w,
                          /static/images/motus-scanner-screens.png?nf_resize=fit&w=600 600w,
                          /static/images/motus-scanner-screens.png?nf_resize=fit&w=800 800w,
                          /static/images/motus-scanner-screens.png?nf_resize=fit&w=1200 1200w"
              sizes="(min-width: 1000px) 800px, (min-width: 860px) 500px, 100vw"
              data-src="/static/images/motus-scanner-screens.png?nf_resize=fit&w=1200"
              alt=""
              class="f-db lozad">
      </figure>
      <h3>Prototyping Insides</h3>
      <p>Every idea and concept has to be tested and validated before handing it over to the developers. Prototyping is a great way to build a nearly realistic version of the design in a fraction of the real development time. With that in mind, I was deeply invested in different ways of prototyping ideas or mimicking user flows for further explanation or discussions.</p>
      <p>Our primary tools while prototyping were <a href="https://marvelapp.com">Marvel</a> and <a href="https://framer.com">Framer</a>. The overall user flows and click-dummies were made with Marvel, because of the faster setup process. When it comes to specific interactions and animations, I switched back to Framer. Framer gave us vast opportunities and flexibility in making interactions or animations. With Framer in our corner, we could develop some great interactive prototypes and eliminated some confusions.</p>
    </div>
  </div>
</section>
<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">What I’ve Learned</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>One hard challenge while designing the motus warehouse Android app was the decision-making process for some UI components. As I mentioned earlier, we didn't want to reinvent the wheel on every single pixel, because Google has great resources like Material Design for building Android apps. Sadly, in some situations, the Material Design components didn't fit as well as we were hoping for, and we had to make some components ourself to solve the different issues in a meaningful manner.</p>
        <p>One takeaway from this experience was definitely that one should build applications in the environment the platform gives you, but it's okay to break these boundaries when it benefits the user. Breaking boundaries don't mean moving in the complete opposite direction. It only means taking the problem you are trying to solve into account and finding a suitable solution.</p>
        <p>Another lesson I got from this project is early feedback with on-device prototyping. In nearly every situation, initial feedback is an excellent way to start, but when it comes to personal devices like smartphones, on-device testing is a real game changer. Testing different lighting situations, sounds, and more only works on the device and in action. Stakeholders and customers can see ideas and design on my fancy iMac, but the real usage and feeling only comes when they are using it on a real device. A prototype should feel like the real thing because only then seeking feedback can be really insightful.</p>      </div>
    </div>
  </div>
</section>
