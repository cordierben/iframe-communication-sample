import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-container',
  templateUrl: './iframe-container.component.html',
  styleUrls: ['./iframe-container.component.css']
})
export class IframeContainerComponent implements OnInit {
  iframeHeight: number = 300; // Default height for the iframe

  constructor() { }

  ngOnInit(): void {
    // Listen to the event emitted by Flutter
    window.addEventListener('message', (event) => {
      const flutterEvent = JSON.parse(event.data);
      if (flutterEvent.type == "pageHeight") {
        // Set the iframe height based on the received data from Flutter
        console.log("ui");
        this.iframeHeight = flutterEvent.pageHeight;
      }
    });
  }
}