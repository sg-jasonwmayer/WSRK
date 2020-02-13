import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import TextField from 'Components/forms/text-field/TextField';
import SelectInput from 'Components/forms/select-input/SelectInput';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput';
import InformationBubble from 'Components/information-bubble/InformationBubble';
import WizardAccordion from './WizardAccordion.js';

const reportList = [
  {
    value: 'batches',
    text: 'Batches',
  },
  {
    value: 'settled-transactions',
    text: 'Settled Transactions',
  },
  {
    value: 'chargebacks',
    text: 'Chargebacks',
  },
  {
    value: 'authorizations',
    text: 'Authorizations',
  },
];

export class WizardAccordionDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: reportList[0],
      textareaInputValue: '',
    };
  }

  onTextareaInputChange = (event) => {
    this.setState({ textareaInputValue: event.target.value });
  }

  toggleAccordion = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleReportSelection = (value, event) => {
    event.stopPropagation();
    const newSelection = reportList.find((item) => { return item.value === value; });
    if (newSelection) {
      this.setState({ selectedItem: newSelection });
    }
  }

  get selectInputLabelContent() {
    return (
      <span>
        Select report
        <InformationBubble
          info
          position="top"
          tooltipTitle="Select Report"
          tooltipContent="A description of an input field"
        />
      </span>
    );
  }

  get textareaInputContent() {
    return (
      <span>
        Report description
        <InformationBubble
          info
          position="top"
          tooltipTitle="Report Description"
          tooltipContent="A description of a textarea"
        />
      </span>
    );
  }

  get content() {
    return (
      <div className="wizard-accordion__content">
        <TextField
          htmlFor="select-report"
          labelContent={this.selectInputLabelContent}
        >
          <SelectInput
            id="select-report"
            dataList={reportList}
            handleSelection={this.handleReportSelection}
            selectedItem={this.state.selectedItem}
            wrapperClass="select-menu__form"
          />
        </TextField>
        <TextField
          htmlFor="report-description"
          labelContent={this.textareaInputContent}
        >
          <TextareaInput
            name="report-description"
            placeholder="This report details Batch refunds"
            onChange={this.onTextareaInputChange}
            value={this.state.textareaInputValue}
          />
        </TextField>
      </div>
    );
  }

  render() {
    return (
      <Page>
        <h2>WizardAccordion</h2>

        <p>Use this component for displaying information where there may be a limited amount of space or in a series where the user may only need to see one set of information at a time.</p>

        <ReactSpecimen span={6}>
          <WizardAccordion
            headerText="Type & Description"
            isOpen={this.state.isOpen}
            toggleAccordion={this.toggleAccordion}
            linkButtonText="Cancel"
            secondaryButtonText="Reset"
            primaryButtonText="Save & Next"
            id="type-and-description"
          >
            {this.content}
          </WizardAccordion>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>headerText</strong>: text that describes content of accordion</li>
          <li><strong>isOpen</strong>: boolean of whether accordion is toggled or not</li>
          <li><strong>toggleAccordion</strong>: function to toggle accordion open or closed</li>
          <li><strong>content</strong>: elements to be nested within body section of accordion</li>
          <li><strong>id</strong>: a unique html id attribute should there be multiple accordions on a page</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>linkButtonText</strong>:
            text for link button, if there is one
          </li>
          <li><strong>secondaryButtonText</strong>: text for secondary button, if there is one</li>
          <li><strong>primaryButtonText</strong>: text for primary button, if there is one</li>
        </ul>

      </Page>
    );
  }
}

export default WizardAccordionDoc;
