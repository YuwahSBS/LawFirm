// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { development } from '../assets/data/config';

export const environment = {
  production: false,
  defaultLanguage: "en",
  defaultLoadingImage: development.defaultLoadingImage,
  errorImage: development.errorImage,
  apiServer: "https://gaullacmommyanmar.com:4044/Modules/CMS_Portal/Webservices/WebService_PublicGaullacAPI.asmx/",
  linkUrl: "https://",
  adminLinkUrl: 'http://43.228.125.24:280/portal/post_detail?id=f7aa3a6e-f9c8-4ff0-9735-72fcefc6f1c6'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
