import { Injectable } from '@angular/core';
import { AddItem } from '../add-item';
import { ProfileComponent } from '../profile/profile.component';
import { JobComponent } from '../job/job.component';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  getAds() {
    return [
      new AddItem(ProfileComponent, { name: 'Ahmed rabea', bio: 'Developer' }),
      new AddItem(JobComponent, { headline: 'Software Jobs Here', body: 'Apply Now' }),
      new AddItem(ProfileComponent, { name: 'Khatab', bio: 'Java Developer' }),
      new AddItem(JobComponent, { headline: 'IT Jobs Here', body: 'Join Now' }),
    ]
  }
}
