import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  /**
   * Clase creada para realizar una validación personalizada del campo DNI comprobando que la numeración y la letra son correctas.
   * @returns 
   */
  static checkDNI(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valueToString = new String(control.value);
      if (valueToString.length !== 9) {
        return null;
      }
      if (control.value === null) {
        return { checkDNI: { value: true } };
      }

      const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
      const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
      const str = control.value.toString().toUpperCase();
      if (!nifRexp.test(str) && !nieRexp.test(str)) {
        return { checkDNI: { value: true } };
      }

      const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

      const letter = str.substr(-1);
      const charIndex = parseInt(nie.substr(0, 8)) % 23;

      if (validChars.charAt(charIndex) === letter) {
        return null;
      }

      return { checkDNI: { value: true } };
    };
  }
}
