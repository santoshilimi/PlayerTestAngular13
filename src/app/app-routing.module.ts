import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfComponent } from './pdf/pdf.component';
import { EpubComponent } from './epub/epub.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: 'pdf', component: PdfComponent},
  {path: 'epub', component: EpubComponent},
  {path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
