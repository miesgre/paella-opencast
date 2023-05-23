/**
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 *
 * The Apereo Foundation licenses this file to you under the Educational
 * Community License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License
 * at:
 *
 *   http://opensource.org/licenses/ecl2.txt
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */

import { EventLogPlugin, Events } from 'paella-core';

import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import '../css/OnBoarding.css';

export default class OnboardingPlugin extends EventLogPlugin {

  get events() {
    return [
      Events.PLAYER_LOADED
    ];
  }
 
  async onEvent(evt,params) {
    setTimeout(()=>{ this.player.pause();}, 1000);

    const tour = new Shepherd.Tour({
        tourName: 'paella-onboarding',
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'paella-onboarding',
            scrollTo: true,
            highlightClass: 'paella-onboarding-highlight',
            canClickTarget: false
        }
    });

    tour.addSteps([
        {
            title: 'Paella onboarding tutorial',
            text: 'Welcome to paella player tutorial.',
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'This is the timeline. You can click to go to that instant time.',
            attachTo: {
                element: '.playback-bar .progress-indicator',
                on: 'top'
            },
            highlightClass: 'paella-onboarding-highlight',
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Back',
                    action: tour.back
                },
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'Here are some buttons on the left.',
            attachTo: {
                element: '.playback-bar .button-plugins.left-side',
                on: 'top'
            },
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Back',
                    action: tour.back
                },
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'And on the right side',
            attachTo: {
                element: '.playback-bar .button-plugins.right-side',
                on: 'top'
            },
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Back',
                    action: tour.back
                },
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'This is the play/pause button!',
            attachTo: {
                element: 'button[name="es.upv.paella.playPauseButton"]',
                on: 'top'
            },
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Back',
                    action: tour.back
                },
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'This button',
            attachTo: {
                element: 'button[name="org.opencast.paella.toolsGroupPlugin"]',
                on: 'top'
            },
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Back',
                    action: tour.back
                },
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        },
        {
            text: 'That\'s All Folks',
            classes: 'example-step-extra-class',
            buttons: [
                {
                    text: 'Done',
                    action: tour.complete
                }
            ]
        }
    ]);

    tour.start();
  }
}