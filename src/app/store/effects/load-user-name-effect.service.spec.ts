/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadUserNameEffectService } from './load-user-name-effect.service';

describe('LoadUserNameEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadUserNameEffectService]
    });
  });

  it('should ...', inject([LoadUserNameEffectService], (service: LoadUserNameEffectService) => {
    expect(service).toBeTruthy();
  }));
});
