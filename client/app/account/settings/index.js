'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('handHygenieApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
