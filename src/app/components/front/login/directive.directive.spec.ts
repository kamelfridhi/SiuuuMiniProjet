import { EmailDirective } from './email.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('DirectiveDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockRenderer2 = {} as Renderer2;

    const directive = new EmailDirective(mockElementRef, mockRenderer2);

    expect(directive).toBeTruthy();
  });
});
