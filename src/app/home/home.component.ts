import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IEpGestureEventArgs, IEpComponentEventArgTyped, EpComponentSharedService, IEpGestureModel } from '@epicor/ux-platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  pressMessage: string = '';
  rotateMessage: string = '';
  rotation: number=0;
  pinchMessage: string = '';
  pinchScale = 1;
  pinchDelta = 1;

  epGestureModel: IEpGestureModel = {
    // Add any properties your gesture model requires
  };


  constructor(private epComponentShared: EpComponentSharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.setStylesForScrolling();
  }

  executePress(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.pressMessage = `Press registered at [${evt.event?.center.x}, ${evt.event?.center.y}]`;
  }

  executePressRelease(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.pressMessage += '. Released';
  }

  executeRotate(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.rotation = evt.event?.rotation ?? 0;
  }

  executeRotateEnd(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.rotateMessage = `Rotated ${evt.event?.angle} degrees`;
  }

  executePinch(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.pinchDelta = evt.event?.scale ?? 0;
  }

  executePinchEnd(evt: IEpComponentEventArgTyped<IEpGestureEventArgs>) {
    this.pinchScale *= this.pinchDelta;
    this.pinchDelta = 1;
    this.pinchMessage = `Pinch Scale: [${Math.round(this.pinchScale * 1000) / 1000}]`;
  }

  /**
   * Sets the style required in each example for scrolling to work on mobile
   */
  setStylesForScrolling() {
    const epCardExamples = document.getElementsByClassName('ep-card');
    const epCardArray = Array.from(epCardExamples);
    for (const cardExample of epCardArray) {
      this.epComponentShared.renderer.setStyle(cardExample, 'touch-action', 'pan-y');
    }
  }
}
