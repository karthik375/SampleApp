import { Component, OnInit } from '@angular/core';
import { EpShellService, IEpMenuPanelKeys, IEpToastServiceModel } from '@epicor/ux-platform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private epShellService: EpShellService) {}

  items = [
    {
      id: 'about',
      caption: 'About',
      icon: 'mdi mdi-cube-outline',
      action: () => {
        this.router.navigateByUrl('about');
      }
    }
  ];

  tstConfig: IEpToastServiceModel = {};
  toastOpt = {
    message: 'Clicked item',
    toastConfig: this.tstConfig
  };

  ngOnInit() {
    this.epShellService.loadMenu({
      flat: true,
      items: this.items
    });

    const hideMenuItems: IEpMenuPanelKeys = {
      primary: {
        add: true,
        videos: true,
        charts: true,
        monitor: true,
        notes: true,
        history: true
      },
      secondary: {
        account: true,
        collaborate: true,
        help: true,
        notifications: false
      }
    };
    this.epShellService.manageMenuBarItems(hideMenuItems, 'hidden');
  }
}
