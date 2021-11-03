import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PollProgressComponent } from 'app/site/polls/components/poll-progress/poll-progress.component';
import { E2EImportsModule } from 'e2e-imports.module';

import { MotionPollVoteComponent } from '../motion-poll-vote/motion-poll-vote.component';
import { MotionPollComponent } from './motion-poll.component';

describe(`MotionPollComponent`, () => {
    let component: MotionPollComponent;
    let fixture: ComponentFixture<MotionPollComponent>;
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [E2EImportsModule],
                declarations: [MotionPollComponent, MotionPollVoteComponent, PollProgressComponent]
            }).compileComponents();
        })
    );
    beforeEach(() => {
        fixture = TestBed.createComponent(MotionPollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
