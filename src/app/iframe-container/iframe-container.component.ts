import { Component, OnInit } from '@angular/core';

declare var _flutter: any;

@Component({
  selector: 'app-iframe-container',
  templateUrl: './iframe-container.component.html',
  styleUrls: ['./iframe-container.component.css']
})
export class IframeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Listen to the event emitted by Flutter
    console.log("Hello");
    window.addEventListener("load", function (ev) {
    _flutter.loader.loadEntrypoint({
    entrypointUrl: "../../assets/flutter/main.dart.js",
        onEntrypointLoaded: async function(engineInitializer: any) {
          let appRunner = await engineInitializer.initializeEngine({
            // Pass a reference to "div#flutter_host" into the Flutter engine.
            hostElement: document.querySelector("#flutter_host")
          });
          await appRunner.runApp();
        }
      });
    });
  }
}