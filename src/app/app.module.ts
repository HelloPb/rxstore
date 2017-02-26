import { NameService } from './services/name/name.service';
import { USER_NAMES_LOADED_ACTION, UserNamesLoadedAction } from './store/action/user-names-loaded-action';
import { IPersons, IStoreApp, STOREAPP } from './store/models/istore';
import { Action, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoadUserNameEffectService } from './store/effects/load-user-name-effect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { AcompComponent } from './comp/acomp/acomp.component';
import { BcompComponent } from './comp/bcomp/bcomp.component';  
import * as _ from 'lodash';
import { PresentComponent } from './comp/bcomp/present/present.component';

export function reducerStore(state : IStoreApp = STOREAPP, action: Action) {  
  switch(action.type) {
    case USER_NAMES_LOADED_ACTION :  state.personDetails =  mapNamesFromList(state.personDetails, action); 
  }
  return state;  
}

function mapNamesFromList(persons : IPersons, action : UserNamesLoadedAction): IPersons {  
  return { names : _.keyBy(action.payload.names, 'id'),
           cities : _.keyBy(action.payload.cities, 'id') };
}

@NgModule({
  declarations: [
    AppComponent,
    AcompComponent,
    BcompComponent,
    PresentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducerStore),
    EffectsModule.run(LoadUserNameEffectService)
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
