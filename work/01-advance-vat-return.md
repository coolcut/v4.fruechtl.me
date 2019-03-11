---
title: Advance VAT Return
company: FastBill
platform: Web
projectDuration: Q4 - 2018
role: Concept, Design and User Testing
previewBackgroundcolor: "#BBE5CC"
---

<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">Overview</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>As one of the leading bookkeeping and invoicing SaaS product in Germany, for a long time, <a href="https://www.fastbill.com">FastBill</a> didn't support any advance VAT return (Umsatzsteuer-Voranmeldung) functionality. This needed to be changed! So, my team and I started thinking about possible solutions for this highly requested feature.</p>
        <p>In Germany, the official advance VAT return document from the German fiscal authority is very complex, large and often feels cumbersome. <mark>The goals with our implementation were to make it feel simple, fast and easy to use. To do this in a first iteration, we decided only to support the majority of all possible VAT use cases and ignored small edge-cases which are the reason for the complexity of the official document.</mark></p>
        <p>In a short amount of time, we conceptualized, designed, tested and developed this feature for our customers. Every step in this process was filled with different feedback loops as well as internal and external user-testing rounds for gathering real-life feedback from our customers.</p>
      </div>
      <aside class="cs-section-sidebar">
        <div class="cs-section-sidebar--aside">
          <h3>Aside</h3>
          <p>This was the first iteration of our general attempts to build a fully automated advance VAT return feature. We wanted to focus on small and incremental improvements with a focus on user benefit.</p>
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
        <p>Everything that is in relation to official fiscal authorities can feel a bit dangerous or threatening. Our primary challenge for this feature was to make the process feel simple, fast and easy to use.</p>
        <p>It would be crucial for us always to communicate possible actions or misleading entries to our users. This communication would make the overall process more transparent, easy to understand and hopefully increase trust in our product.</p>
      </div>
    </div>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <h2 class="area-title">Approach</h2>
        <p>Early on in the process, we set out some hypothesis we needed to validate before moving into a more detail-oriented design phase. One of these hypotheses was the question <em>"How many fields of the official German advance VAT return document do we need to implement to satisfy the majority of our users?"</em>.</p>
        <p>This hypothesis was validated very early on in the process, so we decided only to include the necessary fields from the official document and ignored multiple edge-cases for this first iteration.</p>
      </div>
    </div>
  </div>
</section>
<section class="cs-area f-mb10 f-mb12-m">
  <div class="wrapper">
  <h2 class="area-title">Implementation</h2>
    <div class="cs-section cs-section--screens">
      <p>After some initial discussions and briefings with our lead product manager, we tackled this project with a quick and iterative approach. One of the keys to the success of this project was the idea of a multi-step form flow. <mark>This idea seemed logical because we could split-up the complexity in smaller and manageable junks of information. This implementation would make the process more transparent and easy to understand.</mark></p>
      <p>We iterated and tested small prototypes with this idea in mind. After seeing the evident success of these prototypes, we quickly moved into a more detail-oriented phase of visual design.</p>
      <figure>
        <img alt="A screenshot from the advance VAT return history page. It shows a list with all the transmitted forms." src="https://fruechtl.me/media/pages/work/case-studies/advance-vat-return/1429081108-1549818934/ust-va-history.jpg">
        <figcaption>All of the past transmissions will be displayed in this table.</figcaption>
      </figure>
      <figure class="rev">
        <img alt="" src="https://fruechtl.me/media/pages/work/case-studies/advance-vat-return/453314216-1549818929/ust-va-form-step-two.jpg">
        <figcaption>The second screen of our three-step form. This is the main interaction area for our customers where they need to enter incoming and outgoing amounts of money for their VAT declaration.</figcaption>
      </figure>
      <h3>Users love transparent processes</h3>
      <p>In the beginning, I mentioned the idea of absolute transparency throughout the form wizard. We solved a considerable chunk of this challenge with the last step of our form wizard - the result screen. The purpose of this screen is mainly to show the user every entered input. Furthermore, they can also see the estimated amount of money they owe or get back from the fiscal authority.</p>
      <p><mark>With this final screen, we tried to lower the anxiety levels of our users, because everybody gets a clear picture of the specific data that will be transmitted. As a result of that, potential mistakes will become visible before it is too late. With this information in mind, everybody can make an informed decision about submitting the entered data to the fiscal authorities.</mark> During our usability tests, this screen performed exceptionally well, and users felt more empowered and informed about their transmission.</p>
      <figure>
        <img alt="" src="https://fruechtl.me/media/pages/work/case-studies/advance-vat-return/1440370454-1549818929/ust-va-form-step-three.jpg">
        <figcaption>The final screen during the submission process. It shows all entered data back to the user.</figcaption>
      </figure>
      <h3>User love test runs</h3>
      <p>Furthermore, we also implemented a way for our users to make a valid test run. This test run was a fully functional implementation and calls the official fiscal authority APIs, but it is never a "real submission". In our analysis and since the official launch, this feature was often used and also extremely positive in helping explore this feature for interested users.</p>
    </div>
  </div>
</section>
<section class="f-mb10 f-mb12-m">
  <div class="wrapper">
    <h2 class="area-title">What I’ve Learned</h2>
    <div class="cs-section cs-section--half">
      <div class="cs-section-content">
        <p>The advance VAT return feature was one of the best and smoothest features we did at FastBill for some time. <mark>During this process,  learned a lot about early hypothesis validation, the scope of MVPs and thoroughly thinking about the mindset of our users. It also became clear to me that testing ideas and concepts early and often is crucial for successful product design.</mark></p>
        <p>In some phases, during this project, I struggled with keeping the set constraints of the project. Sometimes it is hard to cut beloved features or improvements because they are not going to make it for the upcoming release. But as long as everything moves in small and steady improvement cycles, it will pay off in the long run. Keep in mind: the success and happiness of every human who is using our product is the ultimate goal.</p>
      </div>
      <aside class="cs-section-sidebar">
        <div class="cs-section-sidebar--aside">
          <figure>
            <img alt="" src="https://fruechtl.me/media/pages/work/case-studies/advance-vat-return/15076600-1549818929/learning-image.png">
          </figure>
        </div>
      </aside>
    </div>
  </div>
</section>
