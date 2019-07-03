<template>
  <div>
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">
            Cloudflare Sanity Tests
          </h1>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
          </p>
          <p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>
          </p>

          <!-- CATEGORIES -->
          <div class="row">
            <div class="col">
              <div class="badge-category badge badge-success">
                Coding
              </div>
              <div class="badge-category badge badge-success">
                Success
              </div>
            </div>
          </div>
          <!-- END CATEGORIES !-->
        </div>
      </div>

      <!-- CUSTOM VARIABLE -->
      <div class="container badge-row-wrapper">
        <div class="row">
          <div class="col">
            <div class="alert alert-info mb-0">
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Action
                </div>
                <div class="badge-text">
                  assign_variable
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Selector
                </div>
                <div class="badge-text">
                  .badge-category:first
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Name
                </div>
                <div class="badge-text">
                  badge_category
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Method
                </div>
                <div class="badge-text">
                  inner_text
                </div>
              </div>
              <div class="rule-details">
                Sets the value of the custom variable
                <strong>{{ badge_category }}</strong> to
                <strong>Coding</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END INSERT H1 -->

      <!-- INSERT H1 -->
      <div class="container badge-row-wrapper">
        <div class="row">
          <div class="col">
            <div class="alert alert-info">
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Action
                </div>
                <div class="badge-text">
                  insert
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Location
                </div>
                <div class="badge-text">
                  .h1-wrapper
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Value
                </div>
                <div class="badge-text">
                  H1 Tag Inserted
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Insert Method
                </div>
                <div class="badge-text">
                  append
                </div>
              </div>
              <div
                class="rule-details"
              >
                H1 with the content "H1 Tag Inserted" should be inserted below
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div data-cy="inserted-h1-wrapper" class="col h1-wrapper"></div>
        </div>
      </div>
      <!-- END INSERT H1 -->

      <!-- INSERT VARIABLE -->
      <div class="container badge-row-wrapper">
        <div class="row">
          <div class="col">
            <div class="alert alert-info">
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Action
                </div>
                <div class="badge-text">
                  insert
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Location
                </div>
                <div class="badge-text">
                  .custom-variable-append
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Value
                </div>
                <div
                  class="badge-text"
                >
                  {{ badge_category }} - badge_category Custom Variable Appended!
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Insert Method
                </div>
                <div class="badge-text">
                  append
                </div>
              </div>
              <div class="rule-details">
                Div with
                <strong>Coding - badge_category Custom Variable Appended!</strong>
                should be inserted below "Existing Content"
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            data-cy="inserted-custom-variable-wrapper"
            class="col h1-wrapper custom-variable-append"
          >
            <h3>Existing Content</h3>
          </div>
        </div>
      </div>
      <!-- END INSERT h1 -->

      <!-- MODIFY H2 -->
      <div class="container badge-row-wrapper">
        <div class="row">
          <div class="col">
            <div class="alert alert-info">
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Action
                </div>
                <div class="badge-text">
                  modify
                </div>
              </div>
              <div class="rule-info-row">
                <div class="badge badge-row badge-secondary">
                  Selector
                </div>
                <div class="badge-text">
                  h2
                </div>
              </div>
              <div class="rule-details">
                This H2 should be changed to "H2 Modified Successfully"
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2 data-cy="unaltered-h2">
              Unaltered H2
            </h2>
          </div>
        </div>
      </div>
      <!-- END MODIFY H2 -->
    </main>

    <div class="container pb-3">
      <section data-cy="inline-js-section" class="inline-js-section"></section>
    </div>

    <footer class="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </div>
</template>
