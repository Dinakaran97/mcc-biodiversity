import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { FloraComponent } from './flora/flora.component';
import { FaunaComponent } from './fauna/fauna.component';
import { CommonModule } from '@angular/common';
import { HerbsComponent } from './herbs/herbs.component';
import { ShrubsComponent } from './shrubs/shrubs.component';
import { LianaComponent } from './liana/liana.component';
import { TreeComponent } from './tree/tree.component';
import { ButterfliesComponent } from './butterflies/butterflies.component';
import { BirdsComponent } from './birds/birds.component';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { HerbsListComponent } from './herbs-list/herbs-list.component';
import { EditHerbsComponent } from './edit-herbs/edit-herbs.component';
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


const routes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'flora', component: FloraComponent },
  { path: 'fauna', component: FaunaComponent },
  { path: 'herbs', component: HerbsComponent },
  { path: 'shrubs', component: ShrubsComponent },
  { path: 'liana', component: LianaComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'butterfly', component: ButterfliesComponent },
  { path: 'birds', component: BirdsComponent },
  { path: 'reptiles', component: ReptilesComponent },
  { path: 'herbs-list', component: HerbsListComponent },
  { path: 'edit-herbs', component: EditHerbsComponent },
  { path: 'shrubs-list', component: ShrubsListComponent },
  { path: 'edit-shrubs', component: EditShrubsComponent },
  { path: 'liana-list', component: LianaListComponent },
  { path: 'edit-liana', component: EditLainaComponent },
  { path: 'edit-tree', component: EditTreeComponent },
  { path: 'tree-list', component: TreeListComponent },
  { path: 'edit-birds', component: EditBirdsComponent },
  { path: 'birds-list', component: BirdsListComponent },
  { path: 'edit-butterfly', component: EditButterfliesComponent },
  { path: 'butterfly-list', component: ButterfliesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
