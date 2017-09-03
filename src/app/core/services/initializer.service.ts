import {Injectable, OnDestroy} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {isPlatformBrowser, Location, PopStateEvent} from '@angular/common';

@Injectable()
export class InitializerService implements OnDestroy {

    private lastPoppedUrl: string;
    private loadingBarSubscription: Subscription;
    private scrollingSubscription: Subscription;

    constructor(private readonly router: Router,
                private readonly location: Location,
                private readonly loadingBarService: SlimLoadingBarService) {
        this.initializeLoadingBar();
        this.initializeScrollingInterceptor();
    }

    ngOnDestroy(): void {
        if (this.loadingBarSubscription) {
            this.loadingBarSubscription.unsubscribe();
        }
        if (this.scrollingSubscription) {
            this.scrollingSubscription.unsubscribe();
        }
    }

    private initializeLoadingBar() {
        this.loadingBarSubscription = this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.loadingBarService.reset();
                this.loadingBarService.start(() => {
                    this.loadingBarService.reset();
                });
            } else if (event instanceof NavigationEnd) {
                this.loadingBarService.complete();
                this.loadingBarService.stop();
            } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
                this.loadingBarService.stop();
                this.loadingBarService.reset();
            }
        });
    }

    private initializeScrollingInterceptor() {
        if (isPlatformBrowser) {
            this.location.subscribe((ev: PopStateEvent) => {
                this.lastPoppedUrl = ev.url;
            });
            this.scrollingSubscription = this.router.events.subscribe((event: Event) => {
                if (event instanceof NavigationEnd) {
                    if (event.url === this.lastPoppedUrl) {
                        this.lastPoppedUrl = undefined;
                    } else {
                        window.scrollTo(0, 0);
                    }
                }
            });
        }
    }
}
