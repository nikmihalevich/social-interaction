import { combineReducers } from 'redux';

import loginUser from './user.js';
import userProfile from "./userProfile.js";
import reminderReducer from "./ReminderCard.js";
import giftReducer from './Gift.js'
import cardIdReducer from './CardId.js'
import wizardValidate from './WizardValidate.js'
import wizardStep from './WizardStep.js'

const rootReducer = combineReducers({
   loginUser,
   userProfile,
   reminderReducer,
   giftReducer,
   cardIdReducer,
   wizardValidate,
   wizardStep
})

export default rootReducer;