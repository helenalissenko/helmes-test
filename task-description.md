# Front-end test V1.0

## Objectives

The idea of this test is to show the knowledge of the user in the following areas:
* HTML integration (conversion of design into HTML)
* Latest front-end languages (HTML 5, CSS 3 and JS)
* Latest front-end practices and technologies (responsive design)
* Professional development practices (code versioning, testing and building)

### Input
Designs provided in PSD/PNG for 3 sizes 360, 768, +:
* Home_page.psd / Home_page.png
* 768_HP.psd / 768_HP.png
* 320_HP.psd / 320_HP.png

### Requirements
Designs should be converted to one HTML 5 / CSS 3 / JS page following the rules below:
* The code needs to be hosted under a GitHub repository
* The page needs to be fluid responsive
* The code should rely as much as possible on bootstrap (v3+)
* The page produced should be compatible with / tested on:
  * IE 9+, FF and Chrome on the desktop
  * Android Browser,  Chrome on Android, Safari on iOS Mobile
* Customizations of the CSS should be written in LESS
* A build mechanism based on grunt or gulp or something else, should be put in place to:
  * Convert LESS to CSS
  * Assemble and minify all CSS files to one file
  * Assemble and minify all JS files to one file
Note: The files resulting from the build should be considered as “binaries” and not be added to the GitHub repository

## Outcomes
In order to evaluate the test we should only need to follow the steps below:
* Checkout the source from GitHub (readme in GitHub should contain instructions on how to build)
* Build using Grunt or Gulp or … to produce “binaries” i.e. assembled and minified scripts and styles
* Open the page in a browser
