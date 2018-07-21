import React from "react";

export default () => (
  <div style={{ margin: "3rem 1rem" }}>
    <div style={{ margin: "0 auto", maxWidth: 600 }}>
      <h1>Warren Whipple</h1>
      <p>
        <a href="mailto:w@warrenwhipple.com">w@warrenwhipple.com</a>
      </p>
      <h2>
        <a href="https://bioethics.unc.edu" target="_blank" rel="noopener">
          UNC Center for Bioethics Website
        </a>
      </h2>
      <p>2012 March - 2018 February</p>
      <p>
        I migrated this HTML site to UNC’s WordPress server in 2012, then
        managed all content, CSS, and WP customization through 2016. From 2016
        to 2018 content and CSS was shared with a team, as I continued as the
        sole WP customizer.
      </p>
      <p>My contribution highlights:</p>
      <ul>
        <li>
          <a
            href="https://bioethics.unc.edu/regr/"
            target="_blank"
            rel="noopener"
          >
            Custom WPToolset types and templates for events
          </a>
        </li>
        <li>
          <a
            href="https://bioethics.unc.edu/publication-search/"
            target="_blank"
            rel="noopener"
          >
            Custom WPToolset types and templates for publications
          </a>
        </li>
        <li>
          <a
            href="https://bioethics.unc.edu/news/"
            target="_blank"
            rel="noopener"
          >
            Combined blog and publication masonry feed
          </a>
        </li>
        <li>
          <a
            href="https://github.com/warrenwhipple/zotero2wordpress"
            target="_blank"
            rel="noopener"
          >
            Python script for importing Zotero citations into WordPress
          </a>
        </li>
      </ul>
    </div>
  </div>
);
