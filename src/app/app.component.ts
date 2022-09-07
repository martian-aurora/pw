import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  withLetters = false;
  withNumbers = false;
  withSymbols = false;

onChangeLength(event: Event) {
  const target = event.target as HTMLInputElement
  const parsedValue = parseInt(target.value);

  if (!isNaN(parsedValue)) {
    this.length = parsedValue;
  }
  else {
    this.length = 0;
    this.password = '';
  }
}

  onChangeUseLetters() {
    this.withLetters = !this.withLetters
  }

  onChangeUseNumbers() {
    this.withNumbers = !this.withNumbers
  }

  onChangeUseSymbols() {
    this.withSymbols = !this.withSymbols
  }

  onButtonClick() {
    
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'
    
    let validChars = '';
    if (this.withLetters) {
      validChars += letters;
    }
    if (this.withNumbers) {
      validChars += numbers;
    }
    if (this.withSymbols) {
      validChars += symbols;
    }

let generatedPassword = '';
for (let i = 0; i < this.length; i++) {
  const index = Math.floor(Math.random() * validChars.length);
  generatedPassword += validChars[index];
}

this.password = generatedPassword;

    console.log(`
    generating a password with:
    Length: ${this.length}
    Letters: ${this.withLetters}
    Numbers: ${this.withNumbers}
    Symbols: ${this.withSymbols}
    `);
  }
}
