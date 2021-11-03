import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PollProgressComponent } from 'app/site/polls/components/poll-progress/poll-progress.component';
import { E2EImportsModule } from 'e2e-imports.module';

import { MotionPollVoteComponent } from './motion-poll-vote.component';

describe(`MotionPollVoteComponent`, () => {
    let component: MotionPollVoteComponent;
    let fixture: ComponentFixture<MotionPollVoteComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [E2EImportsModule],
                declarations: [MotionPollVoteComponent, PollProgressComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MotionPollVoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
