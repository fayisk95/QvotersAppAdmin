import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { QuestionaireComponent } from './Questionaire/Questionaire.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const AppRoutes: Routes = [
    {   path: '',   redirectTo: 'dashboard',    pathMatch: 'full', },
    {   path: 'dashboard',  component: DashboardComponent   },
    {   path: 'user',   component: UserComponent    },
    {   path: 'table',  component: TableComponent   },
    {   path: 'typography', component: TypographyComponent   },
    {   path: 'icons',  component: IconsComponent   },
    {   path: 'maps',   component: MapsComponent    },
    {   path: 'notifications',  component: NotificationsComponent   },
    {   path: 'upgrade',    component: UpgradeComponent     },
    {   path:'gallery',  component:GalleryComponent  },
    {   path:'videos',  component:VideosComponent  },
    {   path:'questionnaire',component:QuestionaireComponent  },
    {   path:'report',component:ReportComponent},
    {   path:'login',component:LoginComponent},
    {   path:'logout',  component:LogoutComponent}
]
