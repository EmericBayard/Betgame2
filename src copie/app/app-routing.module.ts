import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },    
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contests',
    loadChildren: () => import('./contests/contests.module').then( m => m.ContestsPageModule)
  },
  {
    path: 'create-new-team',
    loadChildren: () => import('./create-new-team/create-new-team.module').then( m => m.CreateNewTeamPageModule)
  },
  {
    path: 'player-info',
    loadChildren: () => import('./player-info/player-info.module').then( m => m.PlayerInfoPageModule)
  },
  {
    path: 'team-preview',
    loadChildren: () => import('./team-preview/team-preview.module').then( m => m.TeamPreviewPageModule)
  },
  {
    path: 'choose-captain',
    loadChildren: () => import('./choose-captain/choose-captain.module').then( m => m.ChooseCaptainPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'my-matches',
    loadChildren: () => import('./my-matches/my-matches.module').then( m => m.MyMatchesPageModule)
  },
  {
    path: 'player-performance',
    loadChildren: () => import('./player-performance/player-performance.module').then( m => m.PlayerPerformancePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-points',
    loadChildren: () => import('./my-points/my-points.module').then( m => m.MyPointsPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'country-code',
    loadChildren: () => import('./country-code/country-code.module').then( m => m.CountryCodePageModule)
  },
  {
    path: 'edit-team',
    loadChildren: () => import('./edit-team/edit-team.module').then( m => m.EditTeamPageModule)
  },
  {
    path: 'upcoming-match-info',
    loadChildren: () => import('./upcoming-match-info/upcoming-match-info.module').then( m => m.UpcomingMatchInfoPageModule)
  },
  {
    path: 'live-match-info',
    loadChildren: () => import('./live-match-info/live-match-info.module').then( m => m.LiveMatchInfoPageModule)
  },
  {
    path: 'completed-match-info',
    loadChildren: () => import('./completed-match-info/completed-match-info.module').then( m => m.CompletedMatchInfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
