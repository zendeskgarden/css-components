<!-- structure the Title above as the first line of a
     https://conventionalcommits.org/ message. example: "fix(buttons):
     increase specificity for disabled state". the title informs the
     semantic version bump if this PR is merged. -->

- [ ] **BREAKING CHANGE?** <!-- if so, indicate why under description -->

## Description

<!-- a summary of the changes introduced by this PR. this description
     may populate the commit body and versioned changelog if the PR is
     merged. -->

## Detail

<!-- supporting details; screen shot, code, etc. -->

<!-- closes GITHUB_ISSUE -->

## Checklist

* [ ] :ok_hand: style updates are Garden Designer approved (add the
  designer as a reviewer)
* [ ] :globe_with_meridians: component demo is up-to-date (`yarn start`)
* [ ] :white_check_mark: all component states are represented
  (`.is-hovered`, `.is-focused`, etc.)
* [ ] :arrow_left: renders as expected with reversed (RTL) direction
* [ ] :metal: renders as expected sans Bedrock (`?bedrock=false`)
* [ ] :nail_care: provides `custom.css` example for modifying the
  primary accent color
* [ ] :memo: tested in Chrome, Firefox, Safari, Edge, and IE11
