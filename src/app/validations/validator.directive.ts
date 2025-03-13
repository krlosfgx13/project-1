import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}

export const ValidatorDirectiveValidator: ValidatorFn = (control: AbstractControl):
ValidationErrors | null => {
  const country = control.get('country');
  return country && country.value === null? { ValidatorNull: true } : null; 
}
