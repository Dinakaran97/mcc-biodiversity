import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from "./shared/services/auth.service";
import { FloraComponent } from './flora/flora.component';
import { FaunaComponent } from './fauna/fauna.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HerbsComponent } from './herbs/herbs.component';
import { ShrubsComponent } from './shrubs/shrubs.component';
import { LianaComponent } from './liana/liana.component';
import { TreeComponent } from './tree/tree.component';
import { ButterfliesComponent } from './butterflies/butterflies.component';
import { BirdsComponent } from './birds/birds.component';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { EditHerbsComponent } from './edit-herbs/edit-herbs.component';
import { HerbsListComponent } from './herbs-list/herbs-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditShrubsComponent } from './edit-shrubs/edit-shrubs.component';
import { ShrubsListComponent } from './shrubs-list/shrubs-list.component';
import { EditLainaComponent } from './edit-laina/edit-laina.component';
import { LianaListComponent } from './liana-list/liana-list.component';
import { EditTreeComponent } from './edit-tree/edit-tree.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { EditBirdsComponent } from './edit-birds/edit-birds.component';
import { BirdsListComponent } from './birds-list/birds-list.component';
import { EditButterfliesComponent } from './edit-butterflies/edit-butterflies.component';
import { ButterfliesListComponent } from './butterflies-list/butterflies-list.component';
import { ReptilesListComponent } from './reptiles-list/reptiles-list.component';
import { EditReptilesComponent } from './edit-reptiles/edit-reptiles.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FloraComponent,
    FaunaComponent,
    HerbsComponent,
    ShrubsComponent,
    LianaComponent,
    TreeComponent,
    ButterfliesComponent,
    BirdsComponent,
    ReptilesComponent,
    EditHerbsComponent,
    HerbsListComponent,
    EditShrubsComponent,
    ShrubsListComponent,
    EditLainaComponent,
    LianaListComponent,
    EditTreeComponent,
    TreeListComponent,
    EditBirdsComponent,
    BirdsListComponent,
    EditButterfliesComponent,
    ButterfliesListComponent,
    ReptilesListComponent,
    EditReptilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
