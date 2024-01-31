import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const boxAnimations = trigger('box', [
    state('start', style({ background: 'blue' })),
    state('end', style({ background: 'red', transform: 'scale(1.5)' })),
    state(
      'special',
      style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
      })
    ),
    transition('start => end', [animate('450ms ease-in-out')]),
    transition('end => start', [animate('450ms ease-in-out')]),
    transition('* => special', [animate('500ms ease-in-out')]),
    // transition('special => *', [animate('500ms ease-in-out')]),
    transition('special => *', [
      style({ background: 'green' }),
      animate('1s'),
      style({ background: 'pink' }),
      animate('1s'),
    ]),
    //'void => *' === :enter
    //''* => void', === :leave
    transition(':enter', [
      // style({ opacity: 0 }),
      // animate('500ms ease-in-out'),
      animate(
        '4s',
        keyframes([
          style({ background: 'red', offset: 0 }),
          style({ background: 'black', offset: 0.2 }),
          style({ background: 'orange', offset: 0.3 }),
          style({ background: 'blue', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('500ms ease-in-out'),
    ]),
  ]);