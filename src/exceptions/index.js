const ValidationError = require('./validation.error');
const NoDataFoundError = require('./nodatafound.error');
const MailNotSendError = require('./mailNotsend.error');
const NotVerifiedUserError = require('./notVerified.error');
const DatabaseError = require('./Database.error');
const ForbiddenError = require('./Forbidden.error');
const ExternalServiceError = require('./ExternalServiceCall.error')

module.exports = {
    ValidationError,
    NoDataFoundError,
    MailNotSendError,
    NotVerifiedUserError,
    DatabaseError,
    ForbiddenError,
    ExternalServiceError
}