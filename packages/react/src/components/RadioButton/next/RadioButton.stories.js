/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RadioButton from '../';
import RadioButtonGroup from '../../RadioButtonGroup';
import React from 'react';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  subcomponents: {
    RadioButtonGroup,
  },
};

export const Default = () => {
  return (
    <RadioButtonGroup
      legendText="Radio button heading"
      name="radio-button-group"
      defaultSelected="radio-1">
      <RadioButton labelText="Option 1" value="radio-1" id="radio-1" disabled />
      <RadioButton labelText="Option 2" value="radio-2" id="radio-2" />
      <RadioButton labelText="Option 3" value="radio-3" id="radio-3" />
    </RadioButtonGroup>
  );
};
