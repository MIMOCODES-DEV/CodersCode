# home_layout guide screenshots

Referenced by `app_guides.register("home_layout", ...)` in
[app_src/js/app_guides_definitions.js](../../../../app_src/js/app_guides_definitions.js).
The guide plays on the first launch, right after the layout drawer closes — the user has
just used the picker, so the guide only shows where to find it again.

**No text is baked into these images.** The step title and body are drawn by the app
underneath the frame, from the definition file, so they translate and can be reworded
without re-exporting a PNG. Capture the app's own UI only.

## Files

| File | Capture |
|---|---|
| `01_home_layout_button.png` | The Home top bar with the **Home Layout** button (`#home-top-layout`, item 8 of 10) focused, so its "Home Layout" tooltip is showing. |
| `02_settings_home_theme.png` | Settings > **Home Theme**. The layout rail sits at the top (`combineHomeThemePanel()` prepends it) with the Background section under it — frame it so both are visible. |
| `03_settings_channel_theme.png` | Settings > **Channel Theme**, showing its Layout row (Classic / Normal / Modern). |

## Format

- **1280×720 PNG**, 16:9. The frame is 1152×648 and uses `object-fit: contain`, so any
  16:9 works; 1280×720 is the sweet spot for file size.
- Capture at 1920×1080 and downscale — do not capture at 1280×720, TV UI text goes soft.
- Keep each file under ~300 KB. They are fetched from the remote host/CDN on first launch.
- Optional: a drawn ring or arrow around the thing to press is fine and useful — the app
  cannot draw one. Just no sentences; the caption handles those.

Until these exist the overlay falls back to `app_src_min/images/def_image.jpg` (dimmed,
caption still readable), so dropping the real PNGs in needs no code change.

## Caveat worth knowing

Home has 17 layouts and this guide runs immediately after the user has chosen one, so the
Home screen behind the top bar in `01` will show whichever layout you captured, not
theirs. Framing `01` tightly around the top bar keeps it useful across layouts.
