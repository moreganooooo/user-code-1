// Resume Page Structure Implementation
// This code sets up the resume page sections and configures the download button.

$w.onReady(function () {
    // HERO / INTRO SECTION
    // Set the intro text in your section (directly targeting a specific text element)
    $w('#introText').text = "Prefer a quick overview? Download my full resume below.";

    // DOWNLOAD BUTTON SECTION
    // Set button label
    $w('#downloadResumeButton').label = "Download Full Resume";
    // Set the link to the PDF file in the Wix media library
    // Replace the URL below with your actual PDF file URL from the Media Manager
    $w('#downloadResumeButton').link = "https://static.wixstatic.com/media/sample-resume.pdf";

    // Set the meta text below the button
    $w('#resumeMetaText').text = "PDF — 1 page — Last updated March 2026";

    // OPTIONAL "WHAT'S INSIDE" TEASER SECTION
    // You can choose between a paragraph or bullet points. Here is a minimal paragraph example:
    $w('#whatsInsideText').text =
        "Expertise: Lifecycle marketing, email strategy, CRM operations, sales enablement, content systems.\n" +
        "Key Results: 43% reply rates, 3M in recovered pipeline, 20-person team enablement, 1.5M in opportunities created.\n" +
        "Background: Nearly a decade building at TreeRing, agency experience at VML and Callahan Creek.";
});