import { Profile } from '../../type/ProfileScheme';
import { ValidateProfileErrors } from '../../../model/type/ProfileScheme';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.SERVER_ERROR];
    }

    const { first, lastname, age, country } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }

    return errors;
};