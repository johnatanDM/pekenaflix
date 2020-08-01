import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from '../Form';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'texarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);
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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text
          type={type}
        >
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
            suggestions.map((opt) => (
              <option value={opt} key={`suggestionFor_${fieldId}option${opt}`}>
                {opt}
              </option>
            ))
          }
          </datalist>
          )
        }
      </label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
