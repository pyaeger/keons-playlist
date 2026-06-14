Keon's Playlist — Claims Verification & Deployment Notes
Prepared June 2026. This document is the evidence file for the app. It is intentionally kept separate from the app itself so the app stays clean and this stays auditable. Confidence labels: H = high, M = medium, L = low (L/M explained).
1. Device compatibility
Claim
Verified result
Confidence
Source
iPhone 8 runs the app
Yes. iPhone 8 caps at iOS 16.7.x and cannot install iOS 17+. The app targets iOS 16, so it runs.
H
Apple Support community; Macworld iOS support guide
iPhone 8 can "update to iOS 17 soon"
No — this is not possible. The iPhone 8 (A11 chip) is permanently limited to iOS 16. iOS 17 requires A12 (iPhone XS or newer). The 8 stays on 16.
H
Apple Support community; Wikipedia iOS 17 supported-devices
iPhone 13 runs the app
Yes, and better. The 13 runs iOS 17 and well beyond (current iOS line).
H
Apple support lists
iOS 16 still gets security patches
Yes, as of May 2026 Apple was still issuing iOS 16 security updates for the iPhone 8/X generation, though this is not expected to continue much past September 2026.
M
Macworld (3 days old at time of writing)
Implication: the two-phone split is real and permanent — the 8 is iOS 16 forever, the 13 is the modern one. Nudge Keon to keep the 13 updated; the 8 is fine but increasingly out of long-term support.
2. App capability claims
Claim
Verified result
Confidence
Notes
"Add to Home Screen" gives an app-like, full-screen launch on iOS 16/17
True. Supported well before iOS 16. Install is manual (Share → Add to Home Screen); iOS shows no automatic install prompt.
H
Standard iOS behaviour; multiple PWA references
Works offline
Only true with a service worker — which the app now includes (sw.js). Without it, a home-screen page shows "No internet connection" when offline. Offline works after the first online load caches the page.
H
Apple Developer Forums thread documents the no-service-worker failure; this is why sw.js was added
Saved data (checklist ticks, unlocked Afters tab) persists
True via localStorage. iOS can clear site data under storage pressure or long disuse; home-screen apps are more protected than plain Safari tabs, but persistence is not guaranteed. Safari 17 added a Persistent Storage API and larger quotas.
M
PWA-on-iOS 2026 references. M because eviction behaviour varies by iOS version and usage.
Visuals (gradients, blur glow, slide-up sheet, fl/grid layout) render on iOS 16
True. All are long-supported in iOS 16 Safari (WebKit).
H
—
Countdown, quiz, filters, secret unlock
True. Plain JavaScript, nothing version-sensitive.
H
—
Smooth on the older iPhone 8
Expected yes. The animated glow is the only demanding element; the app now auto-disables the glow animation if it measures a low frame rate on load, and respects reduced-motion.
M
M because performance is device-state dependent; the safeguard is insurance, not a guarantee.
No accounts by design. Because there is no server, each phone stores its own progress. The checklist and the unlocked Afters tab do not sync between the iPhone 8 and the iPhone 13. (H)
3. Festival dates — confirmed vs projected
Only organiser-announced dates are labelled Confirmed. Future years marked Projected use each festival's long-standing scheduling pattern and are not official.
Festival
2026
2027
2028
2029
2030
Confidence on confirmed rows
Tomorrowland (Boom)
Jul 17–19 & 24–26 ✅
Jul 16–18 & 23–25 ✅
late July (proj)
late July (proj)
late July (proj)
H
Glastonbury (Worthy Farm)
None — fallow year ⛔
Jun 23–27 ✅
late June (proj)
late June (proj)
late June (proj)
H
Fuji Rock (Naeba)
Jul 24–26 ✅
late July (proj)
late July (proj)
late July (proj)
late July (proj)
H
Sziget (Budapest)
Aug 11–15 ✅
mid-August (proj)
mid-August (proj)
mid-August (proj)
mid-August (proj)
H
Rock in Rio (Rio)
Sep 4–7 & 11–13 ✅
None (biennial) ⛔
September (proj)
None (biennial) ⛔
September (proj)
H
Key corrections from the first draft:
Glastonbury has no 2026 festival — it is a planned fallow year; the next is 23–27 June 2027. (H — Glastonbury official + BBC + Time Out)
Rock in Rio (Rio) is biennial, running in even years; there is no Rio edition in 2027 or 2029. (H — confirmed 2026 dates; biennial pattern from edition history)
Tomorrowland 2027 is already public (Jul 16–18 & 23–25). (H — multiple outlets / countdown pages)
Ticket-status notes (true as of June 2026, will change):
Tomorrowland 2026 passes are largely sold out — resale only, or target 2027. (M — volatile)
Fuji Rock 2026 3-day and Saturday GA sold out; Friday/Sunday and Friday-night tickets remained. (M — volatile)
Rock in Rio 2026 pre-sale broke records; buy early via Ticketmaster Brasil. (M — volatile)
Sources for dates: organiser sites (Glastonbury, Tomorrowland, Sziget, Fuji Rock, Rock in Rio / Visit Rio), plus BBC, Time Out, DJ Mag, Songkick, Tokyo Cheapo, Omelete.
4. "Real Talk" sourcing
The green/red flags and tips are synthesised from public attendee coverage and festival guides, not lived experience. The app states this plainly on every festival card ("Gathered from real festival-goers, not first-hand"). (H — this is a transparency statement, not a factual claim about the world.)
5. Deployment notes
The app is now two files — this is the cost of genuine offline on iOS:
keons-playlist.html — the app
sw.js — the service worker (must sit next to the HTML, same folder, same domain)
To publish (no server to run):
Upload both files to free static hosting — Cloudflare Pages or GitHub Pages (drag-and-drop). The HTML can be named index.html so the URL is clean.
Hosting must be HTTPS (Cloudflare/GitHub Pages are by default). Service workers and Add-to-Home-Screen require it. (H)
Send Keon the link. On each phone: open in Safari → Share → Add to Home Screen.
Have him open it once while online so the service worker caches it; after that it works offline (great for the WiFi-only iPhone 13). (H)
Personalising the birthday screen: in keons-playlist.html, find add Keon's photo here and replace that element's text with <img src="keon.jpg" alt="Keon" />, then upload a small keon.jpg beside the other files. (H)
Known limitations (all by design / platform):
No cross-device sync (no accounts / no server). (H)
Live links (tickets, Spotify, maps, flights) need a connection; only the curated content works offline. (H)
Saved progress can be cleared by iOS under storage pressure. (M)
Projected future dates are estimates — always reconfirm on the official site. (H)
6. Version 2 — Keon's three picks (added)
Keon's actual top three (all US) were added and pinned at the top of the home screen as "Keon's Picks" with a star badge. The original five remain below as the "Bucket list" group. The app now holds 8 festivals.
Festival
Location
2026 (confirmed)
2027–2030
Confidence
Source
Electric Forest
Double JJ Resort, Rothbury, MI
Jun 25–28 ✅
late June (projected)
H
Electric Forest official IG; Wikipedia; EDM Identity
Lollapalooza
Grant Park, Chicago, IL
Jul 30 – Aug 2 ✅
late July / early Aug (projected)
H
lollapalooza.com; ABC7 Chicago; Choose Chicago
EDC Orlando
Tinker Field, Orlando, FL
Nov 6–8 ✅
early November (projected)
H
EDC Orlando official; Ticketmaster; EDM Identity
Festival facts verified:
Electric Forest: all ages; camping; electronic + jam-band mix; ~40,000–50,000 attendance; nearest airport Grand Rapids (GRR). (H)
Lollapalooza: 4-day, ~170+ artists across 8 stages; all ages; non-camping (downtown Grant Park); 4-day passes were on a waitlist as of 2026. (H; ticket status M — volatile)
EDC Orlando: 18+ general admission, 21+ VIP — government photo ID required; non-camping; ~25 min from MCO airport; gates 1pm. (H)
Projected rows for these three use each festival's established annual window (late June / late July–early Aug / early November) and are not organiser-confirmed past 2026. (H that they are estimates.)
Other v2 changes:
The match quiz now scores all 8 festivals, and the travel question changed to "Stay in the US / Cross an ocean" to fit the mixed list. (H)
The Afters tab gained entries for all three picks (Forest Family; Chicago / Northalsted; Orlando). (H)
Service worker cache bumped to v3 — installed phones will pull the new version on their next online open. Re-upload both files to the same GitHub folder. (H)
The birthday photo is embedded directly in the HTML, so the deployment is still just 2 files (index.html + sw.js). (H)
7. Version 3 — in-app Guide + Inner Journeys
Guide moved into the app. It's now a styled in-app page (matching the dark/neon look), reached from a menu icon in the top-right header, opening with the Patrick Yaeger birthday dedication. The standalone keons-playlist-guide.md remains only as an optional printable. (H)
Birthday dedication now also appears on the splash screen: created by Patrick Yaeger for Keon's 29th birthday, Saturday June 13 2026, Cherokee Park Place, Louisville KY. (H)
New "Inner Journeys" page (same header menu): six copy-paste prompts that turn any LLM into an adaptive interviewer. Each prompt instructs the AI to ask one question at a time, wait for the answer, confirm readiness before continuing, and adapt the next question to the prior response; it ends with a synthesis. Themes: Personality & Inner Wiring; Experiences You Crave; Identity & Authenticity; Connection & Belonging; Music & Joy; Growth & The Next Chapter. Each has an optional "[your specific angle]" slot. (H)
Copy buttons use the Clipboard API with a hidden-textarea fallback for older iOS Safari. (M — clipboard behaviour varies by iOS version; fallback covers the gap.)
Navigation: bottom bar unchanged (Festivals · Match · Kit · Afters-when-unlocked); Guide and Inner Journeys live in the header menu to avoid overcrowding the bar. (H)
Service worker bumped to v5. Re-upload both files to GitHub; phones refresh on next online open. (H)
The Afters access (for reference): triple-tap the "Keon's Playlist" title on the home screen. Now also documented inside the in-app Guide. (H)
8. Live ticket prices verified (June 2026)
Face-value/official figures where available; resale marketplaces run higher and are excluded. All remain approximate and the app links out to confirm.
Festival
Price (approx, face)
Source
Electric Forest
~$450+ 4-day GA + camping
AXS / official history
Lollapalooza
~$400+ 4-day GA; single-day ~$150
lollapalooza.com / Time Out
EDC Orlando
$220 GA / $300 GA+ / $420 VIP (3-day, early-bird)
EDM Identity / Front Gate
Tomorrowland
€400 Full Madness; Day Pass €153
official 2026 pricing / festivalviewer
Glastonbury
£373.50 + £5 (2025); 2027 TBC
Glastonbury official
Fuji Rock
¥59,000 3-day; ¥26,000 1-day
Japan Web Magazine / official
Sziget
~€350+ 5-day pass; day tickets less
szigetfestival.com
Rock in Rio
R$870 GA day / R$435 half
official / Visit Rio
Prices are volatile and tier-based; treat as ballpark and confirm on the official site before buying. (Confidence: H that these were the figures as of June 2026; M that they hold, since tiers rise and sell out.)
Service worker bumped to v6.
9. Personal song added (v7)
A native HTML5 <audio> player card "Twenty-Nine Fine" added to the top of the home dashboard (play/pause/scrub, works on iOS + Android). Audio is not autoplayed (iOS blocks it) — tap to play. (H)
The player references ./twenty-nine-fine.mp3 in the same folder as index.html. Upload the provided twenty-nine-fine.mp3 to the GitHub repo root alongside index.html and sw.js. It runtime-caches for offline after the first online play. (H)
Service worker bumped to v7.
