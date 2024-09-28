import { Component } from '@angular/core'
import { HeroSectionComponent } from '../hero-section/hero-section.component'
import { ServiceSectionComponent } from '../service-section/service-section.component'
import { ExperienceSectionComponent } from '../experience-section/experience-section.component'
import { PortofolioSectionComponent } from '../portofolio-section/portofolio-section.component'
import { ContactSectionComponent } from '../contact-section/contact-section.component'
import { HeaderComponent } from '../../shared/components/header/header.component'
import { FooterComponent } from '../../shared/components/footer/footer.component'

@Component({
  selector: 'app-portofolio-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServiceSectionComponent,
    ExperienceSectionComponent,
    PortofolioSectionComponent,
    ContactSectionComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './portofolio-home.component.html',
  styleUrl: './portofolio-home.component.css',
})
export class PortofolioHomeComponent {}
