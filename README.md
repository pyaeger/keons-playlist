# Keon's Playlist — Claims Verification & Deployment Notes

*Prepared June 2026. This document is the evidence file for the app. It is intentionally kept separate from the app itself so the app stays clean and this stays auditable. Confidence labels: **H** = high, **M** = medium, **L** = low (L/M explained).*

---

## 1. Device compatibility

| Claim | Verified result | Confidence | Source |
|---|---|---|---|
| iPhone 8 runs the app | Yes. iPhone 8 caps at **iOS 16.7.x** and cannot install iOS 17+. The app targets iOS 16, so it runs. | H | Apple Support community; Macworld iOS support guide |
| iPhone 8 can "update to iOS 17 soon" | **No — this is not possible.** The iPhone 8 (A11 chip) is permanently limited to iOS 16. iOS 17 requires A12 (iPhone XS or newer). The 8 stays on 16. | H | Apple Support community; Wikipedia iOS 17 supported-devices |
| iPhone 13 runs the app | Yes, and better. The 13 runs iOS 17 and well beyond (current iOS line). | H | Apple support lists |
| iOS 16 still gets security patches | Yes, as of May 2026 Apple was still issuing iOS 16 security updates for the iPhone 8/X generation, though this is not expected to continue much past September 2026. | M | Macworld (3 days old at time of writing) |

**Implication:** the two-phone split is real and permanent — the 8 is iOS 16 forever, the 13 is the modern one. Nudge Keon to keep the 13 updated; the 8 is fine but increasingly out of long-term support.

---

## 2. App capability claims

| Claim | Verified result | Confidence | Notes |
|---|---|---|---|
| "Add to Home Screen" gives an app-like, full-screen launch on iOS 16/17 | True. Supported well before iOS 16. Install is **manual** (Share → Add to Home Screen); iOS shows no automatic install prompt. | H | Standard iOS behaviour; multiple PWA references |
| Works **offline** | **Only true with a service worker** — which the app now includes (`sw.js`). Without it, a home-screen page shows "No internet connection" when offline. Offline works **after the first online load** caches the page. | H | Apple Developer Forums thread documents the no-service-worker failure; this is why `sw.js` was added |
| Saved data (checklist ticks, unlocked Afters tab) persists | True via `localStorage`. iOS can clear site data under storage pressure or long disuse; home-screen apps are more protected than plain Safari tabs, but persistence is **not guaranteed**. Safari 17 added a Persistent Storage API and larger quotas. | M | PWA-on-iOS 2026 references. *M because eviction behaviour varies by iOS version and usage.* |
| Visuals (gradients, blur glow, slide-up sheet, fl/grid layout) render on iOS 16 | True. All are long-supported in iOS 16 Safari (WebKit). | H | — |
| Countdown, quiz, filters, secret unlock | True. Plain JavaScript, nothing version-sensitive. | H | — |
| Smooth on the older iPhone 8 | Expected yes. The animated glow is the only demanding element; the app now **auto-disables the glow animation** if it measures a low frame rate on load, and respects reduced-motion. | M | *M because performance is device-state dependent; the safeguard is insurance, not a guarantee.* |

**No accounts by design.** Because there is no server, each phone stores its own progress. The checklist and the unlocked Afters tab **do not sync** between the iPhone 8 and the iPhone 13. (H)

---

## 3. Festival dates — confirmed vs projected

Only organiser-announced dates are labelled **Confirmed**. Future years marked **Projected** use each festival's long-standing scheduling pattern and are *not* official.

| Festival | 2026 | 2027 | 2028 | 2029 | 2030 | Confidence on confirmed rows |
|---|---|---|---|---|---|---|
| **Tomorrowland** (Boom) | Jul 17–19 & 24–26 ✅ | Jul 16–18 & 23–25 ✅ | late July (proj) | late July (proj) | late July (proj) | H |
| **Glastonbury** (Worthy Farm) | **None — fallow year** ⛔ | Jun 23–27 ✅ | late June (proj) | late June (proj) | late June (proj) | H |
| **Fuji Rock** (Naeba) | Jul 24–26 ✅ | late July (proj) | late July (proj) | late July (proj) | late July (proj) | H |
| **Sziget** (Budapest) | Aug 11–15 ✅ | mid-August (proj) | mid-August (proj) | mid-August (proj) | mid-August (proj) | H |
| **Rock in Rio** (Rio) | Sep 4–7 & 11–13 ✅ | **None (biennial)** ⛔ | September (proj) | **None (biennial)** ⛔ | September (proj) | H |

**Key corrections from the first draft:**
- **Glastonbury has no 2026 festival** — it is a planned fallow year; the next is 23–27 June 2027. (H — Glastonbury official + BBC + Time Out)
- **Rock in Rio (Rio) is biennial**, running in even years; there is no Rio edition in 2027 or 2029. (H — confirmed 2026 dates; biennial pattern from edition history)
- **Tomorrowland 2027 is already public** (Jul 16–18 & 23–25). (H — multiple outlets / countdown pages)

**Ticket-status notes (true as of June 2026, will change):**
- Tomorrowland 2026 passes are **largely sold out** — resale only, or target 2027. (M — volatile)
- Fuji Rock 2026 3-day and Saturday GA **sold out**; Friday/Sunday and Friday-night tickets remained. (M — volatile)
- Rock in Rio 2026 pre-sale broke records; buy early via Ticketmaster Brasil. (M — volatile)

Sources for dates: organiser sites (Glastonbury, Tomorrowland, Sziget, Fuji Rock, Rock in Rio / Visit Rio), plus BBC, Time Out, DJ Mag, Songkick, Tokyo Cheapo, Omelete.

---

## 4. "Real Talk" sourcing

The green/red flags and tips are **synthesised from public attendee coverage and festival guides**, not lived experience. The app states this plainly on every festival card ("Gathered from real festival-goers, not first-hand"). (H — this is a transparency statement, not a factual claim about the world.)

---

## 5. Deployment notes

**The app is now two files** — this is the cost of genuine offline on iOS:
1. `keons-playlist.html` — the app
2. `sw.js` — the service worker (must sit **next to** the HTML, same folder, same domain)

**To publish (no server to run):**
1. Upload **both files** to free static hosting — Cloudflare Pages or GitHub Pages (drag-and-drop). The HTML can be named `index.html` so the URL is clean.
2. Hosting must be **HTTPS** (Cloudflare/GitHub Pages are by default). Service workers and Add-to-Home-Screen require it. (H)
3. Send Keon the link. On each phone: open in **Safari** → Share → **Add to Home Screen**.
4. Have him open it **once while online** so the service worker caches it; after that it works offline (great for the WiFi-only iPhone 13). (H)

**Personalising the birthday screen:** in `keons-playlist.html`, find `add Keon's photo here` and replace that element's text with `<img src="keon.jpg" alt="Keon" />`, then upload a small `keon.jpg` beside the other files. (H)

**Known limitations (all by design / platform):**
- No cross-device sync (no accounts / no server). (H)
- Live links (tickets, Spotify, maps, flights) need a connection; only the curated content works offline. (H)
- Saved progress can be cleared by iOS under storage pressure. (M)
- Projected future dates are estimates — always reconfirm on the official site. (H)
