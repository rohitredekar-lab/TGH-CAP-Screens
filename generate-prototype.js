const fs = require('fs');
const path = require('path');

const root = __dirname;
const assets = path.join(root, 'assets');
const pages = path.join(root, 'pages');
fs.mkdirSync(assets, { recursive: true });
fs.mkdirSync(pages, { recursive: true });

const screens = [
  ['01-list-my-assigned-entities-populated', 'List My Assigned Entities - Auditor', 'List My Assigned Entities', 'Audit', 'image1.png'],
  ['02-list-my-assigned-entities-search', 'List My Assigned Entities - Search Active', 'List My Assigned Entities', 'Audit', 'image2.png'],
  ['03-list-my-assigned-entities-manager', 'List My Assigned Entities - Audit Manager', 'List My Assigned Entities', 'Audit', 'image3.png'],
  ['04-list-my-assigned-entities-empty', 'List My Assigned Entities - Empty State', 'List My Assigned Entities', 'Audit', 'image4.png'],
  ['05-perform-audit-geo-locked', 'Perform Audit - Geo Tag Locked', 'Perform Audit', 'Audit', 'image5.png'],
  ['06-perform-audit-geo-captured', 'Perform Audit - Geo Tag Captured', 'Perform Audit', 'Audit', 'image6.png'],
  ['07-perform-audit-branch-details', 'Perform Audit - Branch Details', 'Perform Audit', 'Audit', 'image7.png'],
  ['08-perform-audit-open-observations', 'Perform Audit - Open Observations', 'Perform Audit', 'Audit', 'image8.png'],
  ['09-perform-audit-view-observation', 'Perform Audit - View Observation Dialog', 'Perform Audit', 'Audit', 'image9.png'],
  ['10-perform-audit-observation-dialog', 'Perform Audit - Perform Observation Dialog', 'Perform Audit', 'Audit', 'image10.png'],
  ['11-perform-audit-closed-observations', 'Perform Audit - Closed Observations', 'Perform Audit', 'Audit', 'image11.png'],
  ['12-perform-audit-detailed-observations', 'Perform Audit - Detailed Observations', 'Perform Audit', 'Audit', 'image12.png'],
  ['13-perform-audit-summary', 'Perform Audit - Summary', 'Perform Audit', 'Audit', 'image13.png'],
  ['14-perform-audit-final-submission', 'Perform Audit - Final Submission Download Prompt', 'Perform Audit', 'Audit', 'image14.png'],
  ['15-review-audit-list-manager', 'Review Audit - List Administrator / Audit Manager', 'Review Audit', 'Audit', 'image15.png'],
  ['16-review-audit-list-auditor', 'Review Audit - List Auditor', 'Review Audit', 'Audit', 'image16.png'],
  ['17-review-audit-geo-tag', 'Audit View - Geo Tag', 'Review Audit', 'Audit', 'image17.png'],
  ['18-review-audit-branch-details', 'Audit View - Branch Details', 'Review Audit', 'Audit', 'image18.png'],
  ['19-review-audit-open-observations', 'Audit View - Open Observations', 'Review Audit', 'Audit', 'image19.png'],
  ['20-review-audit-observation-trail', 'Audit View - Observation Detail with Audit Trail', 'Review Audit', 'Audit', 'image20.png'],
  ['21-review-audit-closed-observations', 'Audit View - Closed Observations', 'Review Audit', 'Audit', 'image21.png'],
  ['22-review-audit-detailed-observations', 'Audit View - Detailed Observations', 'Review Audit', 'Audit', 'image22.png'],
  ['23-list-open-observations-auditor', 'List Open Observations - Auditor', 'List Open Observations', 'Audit', 'image23.png'],
  ['24-list-open-observations-manager', 'List Open Observations - Administrator / Audit Manager', 'List Open Observations', 'Audit', 'image24.png'],
  ['25-list-open-observations-view', 'List Open Observations - View Observation Dialog', 'List Open Observations', 'Audit', 'image25.png'],
  ['26-list-open-observations-perform', 'List Open Observations - Perform Observation Dialog', 'List Open Observations', 'Audit', 'image26.png'],
  ['27-list-open-observations-download', 'List Open Observations - Bulk Download Dialog', 'List Open Observations', 'Audit', 'image27.png'],
  ['28-list-open-observations-upload', 'List Open Observations - Bulk Upload Dialog', 'List Open Observations', 'Audit', 'image28.png'],
  ['29-list-open-observations-summary', 'List Open Observations - Bulk Upload Summary', 'List Open Observations', 'Audit', 'image29.png'],
  ['30-list-closed-observations-manager', 'List Closed Observations - Administrator / Audit Manager', 'List Closed Observations', 'Audit', 'image30.png'],
  ['31-list-closed-observations-auditor', 'List Closed Observations - Auditor', 'List Closed Observations', 'Audit', 'image31.png'],
  ['32-list-closed-observations-view', 'List Closed Observations - View Observation Dialog', 'List Closed Observations', 'Audit', 'image32.png'],
  ['33-list-closed-observations-reopen', 'List Closed Observations - Reopen Observation Dialog', 'List Closed Observations', 'Audit', 'image33.png'],
  ['34-list-closed-observations-trail', 'List Closed Observations - View Observation with Audit Trail', 'List Closed Observations', 'Audit', 'image34.png'],
  ['35-list-all-entities-populated', 'List All Entities - Populated', 'List All Entities', 'Governance', 'image35.png'],
  ['36-list-all-entities-search', 'List All Entities - Search Active', 'List All Entities', 'Governance', 'image36.png'],
  ['37-list-all-entities-empty', 'List All Entities - Empty State', 'List All Entities', 'Governance', 'image37.png']
];

const sections = [
  ['01-list-my-assigned-entities-populated', 'List My Assigned Entities', 'Four role and state variations for assigned branches.'],
  ['05-perform-audit-geo-locked', 'Perform Audit', 'The tab-based audit workflow from geo-tag capture through submission.'],
  ['15-review-audit-list-manager', 'Review Audit', 'Audit history lists and read-only audit views.'],
  ['23-list-open-observations-auditor', 'List Open Observations', 'Observation review, closure, and bulk upload workflows.'],
  ['30-list-closed-observations-manager', 'List Closed Observations', 'Closed observation review, reopening, and audit trail.'],
  ['35-list-all-entities-populated', 'List All Entities', 'Administrator view of all configured branches.']
];

const pageTemplate = (screen, index) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${screen[1]} | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="screen-page" data-screen="${screen[0]}">
  <main class="screen-shell">
    <div class="screen-frame"><img src="../assets/${screen[4]}" alt="${screen[1]} interface screen"></div>
  </main>
</body>
</html>`;

screens.filter(screen => screen[0] !== '01-list-my-assigned-entities-populated').forEach((screen, index) => fs.writeFileSync(path.join(pages, `${screen[0]}.html`), pageTemplate(screen, index)));
fs.writeFileSync(path.join(pages, '02-perform-audit.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Perform Audit - Auditor | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app perform-audit-page">
  <script src="../perform-audit.js"></script>
</body>
</html>`);
fs.writeFileSync(path.join(pages, '03-list-open-observations.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>List Open Observations - Auditor | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app open-observations-page">
  <script src="../list-open-observations.js"></script>
</body>
</html>`);
fs.writeFileSync(path.join(pages, '04-list-closed-observations.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>List Closed Observations - Auditor | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app closed-observations-page">
  <script src="../list-closed-observations.js"></script>
</body>
</html>`);
fs.writeFileSync(path.join(pages, '05-list-my-assigned-entities-manager.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>List My Assigned Entities - Audit Manager | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app manager-page">
  <script src="../audit-manager.js"></script>
</body>
</html>`);
fs.writeFileSync(path.join(pages, '06-perform-audit-review.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Perform Audit Review - Audit Manager | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app manager-review-page">
  <script src="../perform-audit-review.js"></script>
</body>
</html>`);
fs.writeFileSync(path.join(pages, '07-review-audit-manager.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Review Audit - Audit Manager | Finarya</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="cap-app review-audit-page">
  <script src="../review-audit-manager.js"></script>
</body>
</html>`);

const index = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Finarya Screen Library</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="index-page">
  <header class="library-header"><div><p class="eyebrow">Finarya / Reimagine Governance</p><h1>Screen library</h1><p class="intro">Role-based navigation for audit work.</p></div><div class="header-stat"><strong>07</strong><span>navigation</span></div></header>
  <main class="library-main"><p class="eyebrow library-section-label">Auditor</p><div class="section-grid"><a class="section-card" href="pages/01-list-my-assigned-entities-populated.html"><span class="section-number">01</span><div><h2>List My Assigned Entities - Auditor</h2><p>View assigned branches, audit statuses, filters, and audit actions.</p><span class="open-label">Open navigation &#8594;</span></div></a><a class="section-card" href="pages/02-perform-audit.html"><span class="section-number">02</span><div><h2>Perform Audit - Auditor</h2><p>Complete the audit workflow using the built-in tabs from Geo Tag to Summary.</p><span class="open-label">Open navigation &#8594;</span></div></a><a class="section-card" href="pages/03-list-open-observations.html"><span class="section-number">03</span><div><h2>List Open Observations - Auditor</h2><p>Review, filter, close, download, and bulk-process observations across audits.</p><span class="open-label">Open navigation &#8594;</span></div></a><a class="section-card" href="pages/04-list-closed-observations.html"><span class="section-number">04</span><div><h2>List Closed Observations - Auditor</h2><p>View and track closed observations across audits in read-only mode.</p><span class="open-label">Open navigation &#8594;</span></div></a></div><p class="eyebrow library-section-label manager-label">Audit Manager</p><div class="section-grid"><a class="section-card" href="pages/05-list-my-assigned-entities-manager.html"><span class="section-number">01</span><div><h2>List My Assigned Entities - Audit Manager</h2><p>Monitor branch-level audit lifecycle and review work awaiting manager action.</p><span class="open-label">Open navigation &#8594;</span></div></a><a class="section-card" href="pages/06-perform-audit-review.html"><span class="section-number">02</span><div><h2>Perform Audit Review - Audit Manager</h2><p>Review closed observations and approve or request rework before final submission.</p><span class="open-label">Open navigation &#8594;</span></div></a><a class="section-card" href="pages/07-review-audit-manager.html"><span class="section-number">03</span><div><h2>Review Audit - Audit Manager</h2><p>Browse audit history and inspect complete audit details in read-only mode.</p><span class="open-label">Open navigation &#8594;</span></div></a></div></main>
</body>
</html>`;
fs.writeFileSync(path.join(root, 'index.html'), index);
console.log(`Generated ${screens.length} pages.`);
