# Homepage expansion: complete training, services and career support

## Goal
Reposition the homepage as a complete Nursing + Midwifery + Caregiving + Japanese Language institute with Bangladesh job support, Japan career support and caregiver services—not only a Japan-focused advertisement.

## What will change

### 1. First-viewport trust and positioning
- Update the hero/supporting copy so training, Bangladesh careers, Japan careers and caregiver services are all immediately clear.
- Add a prominent approval band near the top using the exact uploaded Bangladesh Government emblem, unchanged.
- Place the exact Bengali text directly below the emblem: **“বাংলাদেশ সরকারের প্রধানমন্ত্রীর কার্যালয় কর্তৃক অনুমোদিত”**, followed by the English supporting line.
- Keep admission and direct contact actions visible.

### 2. Editable animated achievement counters
- Add a large responsive counter section for 500+, 300+, 100+ and 50+.
- Store all values and labels in one exported configuration array so verified figures can be replaced easily later.
- Clearly label the current figures as placeholder/provisional statistics rather than presenting them as verified facts.
- Animate once when the section enters the viewport and respect reduced-motion preferences.

### 3. Bangladesh and Japan career support
- Replace the current Japan-heavy career pathway with two visually distinct, same-brand pathway panels:
  - Bangladesh: Training → Skill Development → Certificate → Job Preparation → Bangladesh Job
  - Japan: Caregiving Training → Japanese Language → Skill Preparation → Language/Skill Assessment → Interview → Japan Career Support
- Add a dedicated Bangladesh opportunities section covering Hospital, Clinic, Nursing Home, Care Center, Home Care, Elderly Care and Healthcare Support.
- Add the broader “কোর্স শেষে আপনার ক্যারিয়ার কোথায়?” opportunity grid.
- Use the required eligibility/employer/government-rules disclaimer and avoid guaranteed job/visa claims.

### 4. Caregiver services experience
- Add a major “আমাদের Caregiver Services” section with eight image-led service cards: Home Caregiving, Elderly Care, Patient Care, Dementia Care, Daily Living Support, Mobility Support, Children Care and Special Needs Care.
- Add premium alternating image/text feature rows for:
  1. Bangladesh caregiver service
  2. Japan caregiving career
  3. Caregiver training versus career-support clarification
- Clearly separate the service offered to families, caregiver training offered to learners, and Japan career support.

### 5. Authentic visual assets
- Generate a cohesive set of realistic healthcare images for the required care scenes, following the olive-green uniform, collar and overall appearance visible in the institute’s supplied references—never generic blue scrubs.
- Reuse the existing real institute classroom/training imagery for nursing practical training, caregiver practical training and Japanese learning where appropriate.
- Use the generated images across service cards and alternating feature sections without replacing the user-supplied institute photographs.

### 6. Student success without fabricated claims
- Add “আমাদের শিক্ষার্থীদের সাফল্য” using real supplied training/event photos and clearly marked content placeholders.
- Include categories for training, career achievement, Bangladesh employment and Japan journey.
- Do not invent names, testimonials, employers or individual outcomes.

### 7. Navigation, content and responsive QA
- Update navigation anchors and supporting CTA copy for the expanded content.
- Keep the existing Bengali-first bilingual visual system, semantic colors, accessibility labels and responsive behavior.
- Verify desktop and 390px mobile layouts, image loading, counter animation, anchor navigation, no horizontal overflow and no browser console errors.

## Technical details
- Add the uploaded emblem through the project asset pipeline and import its CDN pointer.
- Keep editable statistics, services and pathway steps in `src/lib/site-data.ts`.
- Build focused components for trust/stats, caregiver services, pathways/opportunities and student success rather than further enlarging the existing general sections file.
- Update the homepage assembly and route metadata description to reflect Bangladesh career support and caregiver services.
