import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from '../Form';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'texarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  return (
    <FormFieldWrapper>
      <label htmlFor={fieldId}>
        <Input
          as={tag}
          type={type}
          name={name}
          id="nomeCategoria"
          onChange={onChange}
          value={value}
          hasValue={hasValue}
        />
        <Label.Text
          type={type}
        >
          {label}
          :
        </Label.Text>
      </label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
