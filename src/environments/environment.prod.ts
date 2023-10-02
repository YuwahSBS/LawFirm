import { development, live } from '../assets/data/config';

export const environment = {
  production: true,
  apiServer: live.apiServer,
  defaultLoadingImage: live.defaultLoadingImage,
  errorImage: live.errorImage,
  linkUrl: live.linkUrl,
  defaultLanguage: live.defaultLanguage,
  adminLinkUrl: live.adminLinkUrl
};


// export const environment = {
//   production: true,
//   apiServer: development.apiServer,
//   defaultLoadingImage: development.defaultLoadingImage,
//   errorImage: development.errorImage,
//   linkUrl: development.linkUrl,
//   defaultLanguage: development.defaultLanguage,
//   adminLinkUrl: development.adminLinkUrl
// };
