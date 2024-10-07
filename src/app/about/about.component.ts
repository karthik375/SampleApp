import { Component, OnInit } from '@angular/core';
import { IEpViewModel, EpShellService, EpFeatureDetectionService } from '@epicor/ux-platform';
import { AppLocalizationStrings } from '../app.localization.strings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  appStrings = AppLocalizationStrings;
  isMobile = this.epFeatureDetection.features.browserIsMobile || this.epFeatureDetection.isCordovaIos();

  viewModel: IEpViewModel = {
    title: this.appStrings.about
  };

  constructor(private epShellService: EpShellService, private epFeatureDetection: EpFeatureDetectionService) {}

  ngOnInit() {
    if (this.isMobile) {
      this.epShellService.setTitle(this.viewModel.title as string);
    }
  }
}
