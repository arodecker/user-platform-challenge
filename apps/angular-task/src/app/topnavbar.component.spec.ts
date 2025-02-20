import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopnavbarComponent } from './topnavbar.component';

describe('TopnavbarComponent', () => {
    let component: TopnavbarComponent;
    let fixture: ComponentFixture<TopnavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TopnavbarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TopnavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
