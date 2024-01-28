import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TranslationComponent } from './translation/translation.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path: 'chat',  component:ChatComponent},
  {path:'chat/translation/:text',component:TranslationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
