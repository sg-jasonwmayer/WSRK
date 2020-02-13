import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Plus from 'Components/icons/PlusIcon';
import Button from './Button';
import PrimaryButton from './PrimaryButton';
import HollowButton from './HollowButton';

function sampleClickHandler() {
  alert('You clicked the primary button.'); // eslint-disable-line no-alert
}

const buttonText = '';

export default () => (
  <Page>
    <h2>Button</h2>

    <p>Use this component in a group of actions.</p>

    <h5>Primary</h5>

    <p>These tell the user that an action will affect this page in a holistic way such as adding something to it, taking something away from it or leaving it entirely. These buttons call for action to be taken immediately. You <strong>should</strong> only ever have ONE primary button in a group of actions.</p>

    <ReactSpecimen span={3}>
      <PrimaryButton
        action={sampleClickHandler}
      >
        Save User
      </PrimaryButton>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <PrimaryButton
        action={sampleClickHandler}
        disabled
        type="submit"
      >
        Save User
      </PrimaryButton>
    </ReactSpecimen>

    <h5>Hollow</h5>

    <p>These tell the user that the action <span style={{ textDecoration: 'underline' }}>will not</span> change the the page in any holistic way such as adding something to it, taking something away from it or leaving it entirely. These buttons call for additional options or decisions to be made.</p>

    <ReactSpecimen span={3}>
      <HollowButton
        action={sampleClickHandler}
      >
        Save User
      </HollowButton>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <HollowButton
        action={sampleClickHandler}
        disabled
        type="submit"
      >
          Save User
      </HollowButton>
    </ReactSpecimen>

    <h5>Link</h5>

    <p>Much like secondary buttons, link buttons do not signal holistic change. These buttons call for additional options or decisions to be made.</p>

    <ReactSpecimen span={3}>
      <Button
        action={sampleClickHandler}
      >
        Save User
      </Button>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <Button
        action={sampleClickHandler}
        category="link-inline"
      >
        Clear All
      </Button>
    </ReactSpecimen>

    <h5>Icon Only</h5>

    <p>Icons should only be used in specific cases ONLY:</p>
    <ul>
      <li>When it adds value to the user</li>
      <li>When the button can be reduced to JUST the icon and have user understand its meaning</li>
      <li>When it shows the direction (arrows for next and previous)</li>
    </ul>

    <ReactSpecimen span={3}>
      <Button
        action={sampleClickHandler}
        category="primary toggled"
        iconDirection="left"
        icon={Plus}
      >
        {buttonText}
      </Button>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>action</strong>: a handler function called when the button is clicked</li>
      <li><strong>category</strong>: a string that designates what type of styling a button will get</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>disabled</strong>: a boolean for whether the button is disabled, defaults to false</li>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
      <li><strong>type</strong>: a string for type of HTML button, defaults to &apos;button&apos;, other acceptable value is &apos;submit&apos;</li>
      <li><strong>icon</strong>: an svg icon component to be included on a button</li>
      <li><strong>iconDirection</strong>: a string that indicates if a button icon should be to the left or right of the button text</li>

    </ul>

  </Page>
);
